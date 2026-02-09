import json
import re
from pathlib import Path

config_path = Path('src/data/config.ts')
content = config_path.read_text(encoding='utf-8')

# Extract JSON part
match = re.search(r'export const config = ({.*});', content, re.DOTALL)
if not match:
    print("Could not find export statement")
    exit(1)

json_str = match.group(1)

# Parse JSON
try:
    config = json.loads(json_str)
except json.JSONDecodeError as e:
    print(f"JSON parsing error: {e}")
    exit(1)

# Recursive function to convert blocks to plain text
def convert_blocks(obj):
    if obj is None:
        return obj
    
    if isinstance(obj, str):
        return obj
    
    if isinstance(obj, list):
        # Check if this is a block array (each element has _type: 'block')
        if obj and isinstance(obj[0], dict) and obj[0].get('_type') == 'block':
            # Convert block array to plain text
            texts = []
            for block in obj:
                if 'children' in block and isinstance(block['children'], list):
                    block_text = ''.join(
                        child.get('text', '') 
                        for child in block['children']
                        if isinstance(child, dict)
                    )
                    if block_text:
                        texts.append(block_text)
            return '\n\n'.join(texts) if texts else None
        return [convert_blocks(item) for item in obj]
    
    if isinstance(obj, dict):
        result = {}
        for key, value in obj.items():
            if key == 'id' and isinstance(value, dict) and value.get('_type') == 'slug':
                # Convert slug object to string
                result[key] = value.get('current', '')
            else:
                result[key] = convert_blocks(value)
        return result
    
    return obj

converted = convert_blocks(config)

# Write back as TypeScript
output = 'export const config = ' + json.dumps(converted, indent=2) + ';'
config_path.write_text(output, encoding='utf-8')

print(f'✅ Config file converted successfully')
print(f'Original file size: {len(content)} bytes')
print(f'New file size: {len(output)} bytes')
