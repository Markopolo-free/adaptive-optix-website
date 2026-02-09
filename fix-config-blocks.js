#!/usr/bin/env node
/**
 * Fix config.ts by converting block objects to plain text strings
 * Run this script whenever config.ts gets reformatted and block objects return
 * 
 * Usage: node fix-config-blocks.js
 * 
 * This script will:
 * 1. Convert description block arrays to plain text strings
 * 2. Convert shortDescription block arrays to plain text strings  
 * 3. Convert id slug objects to plain strings
 * 4. Clean up orphaned block properties
 * 
 * NOTE: If this script doesn't fully clean the file, you may need to manually
 * check for orphaned properties like markDefs, style, _key, _type, children.
 */

const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, 'src/data/config.ts');

console.log('Reading config.ts...');
let content = fs.readFileSync(configPath, 'utf8');

let changeCount = 0;

// Function to extract text from block structure
function extractText(str) {
  const matches = [...str.matchAll(/text:\s*"([^"]*)"/g)];
  return matches.map(m => m[1]).join('\n\n');
}

// Replace description: [ { block structure }, { block structure }, ... ]
// This handles multi-block arrays (multiple paragraphs)
const descriptionRegex = /description:\s*\[[\s\S]*?\{[\s\S]*?_type:\s*"block"[\s\S]*?\](?=,?\s*\n)/g;
content = content.replace(descriptionRegex, (match) => {
  changeCount++;
  const text = extractText(match);
  return `description: "${text}"`;
});

// Replace shortDescription: [ { block structure }, { block structure }, ... ]
const shortDescRegex = /shortDescription:\s*\[[\s\S]*?\{[\s\S]*?_type:\s*"block"[\s\S]*?\](?=,?\s*\n)/g;
content = content.replace(shortDescRegex, (match) => {
  changeCount++;
  const text = extractText(match);
  return `shortDescription: "${text}"`;
});

// Replace id: { _type: "slug", current: "value" }
const idRegex = /id:\s*\{\s*_type:\s*"slug",?\s*current:\s*"([^"]*)"\s*\}/g;
content = content.replace(idRegex, (match, slug) => {
  changeCount++;
  return `id: "${slug}"`;
});

// Remove orphaned block properties (markDefs, style, closing brackets)
const orphanedRegex = /,?\s*markDefs:\s*\[\s*\],?\s*style:\s*"normal"\s*\}\s*\]/g;
const orphanedMatches = content.match(orphanedRegex);
if (orphanedMatches) {
  content = content.replace(orphanedRegex, '');
  changeCount += orphanedMatches.length;
  console.log(`  Removed ${orphanedMatches.length} orphaned block properties`);
}

if (changeCount > 0) {
  fs.writeFileSync(configPath, content, 'utf8');
  console.log(`✅ Fixed ${changeCount} block/slug objects in config.ts`);
} else {
  console.log('✅ No block objects found - config.ts is already clean');
}
