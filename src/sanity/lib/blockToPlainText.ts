/**
 * Utility to convert Sanity block content to plain text
 * Used for rendering block content as plain text strings
 */

export function blockToPlainText(blocks: any): string {
  // Handle null or undefined
  if (!blocks) return '';
  
  // If it's already a string, return it
  if (typeof blocks === 'string') return blocks;
  
  // If it's not an array, try to stringify it safely
  if (!Array.isArray(blocks)) {
    // If it's an object with text property, return that
    if (typeof blocks === 'object' && blocks.text) {
      return String(blocks.text);
    }
    return '';
  }
  
  return blocks
    .filter(block => block && typeof block === 'object')
    .map(block => {
      // Handle block type
      if (block._type === 'block' && Array.isArray(block.children)) {
        return block.children
          .filter((child: any) => child && typeof child === 'object')
          .map((child: any) => child.text || '')
          .join('');
      }
      
      // Handle plain text blocks
      if (block.text) {
        return String(block.text);
      }
      
      // Handle other types if needed
      return '';
    })
    .filter(text => text.length > 0)
    .join('\n\n');
}
