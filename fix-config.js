const fs = require('fs');
const path = require('path');

// Read the current config file
const configPath = path.join(__dirname, 'src/data/config.ts');
let content = fs.readFileSync(configPath, 'utf8');

console.log('Original file size:', content.length);

// Simple approach: use JSON parsing and reconstruction
// First, extract the export statement and parse
const exportMatch = content.match(/export const config = ({[\s\S]*});/);
if (!exportMatch) {
  console.error('Could not find export statement');
  process.exit(1);
}

const jsonStr = exportMatch[1];
try {
  const config = JSON.parse(jsonStr);
  
  // Recursive function to convert blocks to text
  function convertBlocks(obj) {
    if (obj === null || obj === undefined) return obj;
    if (typeof obj === 'string') return obj;
    
    if (Array.isArray(obj)) {
      // Check if this is a block array
      if (obj.length > 0 && obj[0]._type === 'block') {
        // Convert blocks to plain text
        return obj.map(block => {
          if (block.children && block.children.length > 0) {
            return block.children.map(child => child.text || '').join('');
          }
          return '';
        }).join('\n\n');
      }
      return obj.map(convertBlocks);
    }
    
    if (typeof obj === 'object') {
      const result = {};
      for (const [key, value] of Object.entries(obj)) {
        if (key === 'id' && value && typeof value === 'object' && value._type === 'slug') {
          // Convert slug objects to strings
          result[key] = value.current;
        } else {
          result[key] = convertBlocks(value);
        }
      }
      return result;
    }
    
    return obj;
  }
  
  const converted = convertBlocks(config);
  
  // Reconstruct with TypeScript export
  const output = 'export const config = ' + JSON.stringify(converted, null, 2) + ';';
  
  fs.writeFileSync(configPath, output, 'utf8');
  console.log('✅ Config file converted successfully');
  console.log('New file size:', output.length);
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
