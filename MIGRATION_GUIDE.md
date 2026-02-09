# Text to Block Content Migration Guide

This guide explains how to safely add text formatting options (Bold, Italic, etc.) to card text fields in Sanity Studio.

## Overview

Converting text fields from plain `text` type to rich `block` content requires a two-step process:
1. **Migrate the data** - Convert existing text to block format
2. **Update schemas** - Change field types from `text` to `array` of blocks

## Prerequisites

- Make sure you have a `SANITY_API_TOKEN` environment variable set with write permissions
- Back up your Sanity dataset (optional but recommended)

## Method 1: Using the API Endpoint (Recommended)

### Step 1: Run the Migration

1. Make sure your dev server is running on port 3000
2. Send a POST request to the migration endpoint:

```bash
# Using curl
curl -X POST http://localhost:3000/api/migrate-to-blocks

# Using PowerShell
Invoke-RestMethod -Uri http://localhost:3000/api/migrate-to-blocks -Method POST
```

3. Check the response for migration results

### Step 2: Update Schema Files

After successful migration, update the schema files with the new block content definitions. The updated schemas are in:

```
src/sanity/schemaTypes/homeCard.ts
src/sanity/schemaTypes/productCard.ts
src/sanity/schemaTypes/solutionCard.ts
src/sanity/schemaTypes/useCaseCard.ts
src/sanity/schemaTypes/consultancyCard.ts
src/sanity/schemaTypes/contactUsCard.ts
src/sanity/schemaTypes/pricingManagementCard.ts
src/sanity/schemaTypes/whyCard.ts
src/sanity/schemaTypes/solutionFeatureCard.ts
```

## Method 2: Using Node Script

### Step 1: Run the Migration Script

```bash
# Make sure dependencies are installed
npm install

# Run the migration
npx tsx src/scripts/migrate-text-to-blocks.ts
```

### Step 2: Update Schema Files

Same as Method 1, Step 2.

## What Gets Migrated

The migration converts these fields across all card types:

| Card Type | Fields |
|-----------|--------|
| homeCard | description |
| productCard | shortDescription, description, description_2 |
| solutionCard | description |
| useCaseCard | description, description_2 |
| consultancyCard | description |
| contactUsCard | description |
| pricingManagementCard | description |
| whyCard | description |
| solutionFeatureCard | description, description_2 |

## Data Format

Plain text like:
```
"This is a simple description"
```

Gets converted to block content:
```json
[
  {
    "_type": "block",
    "_key": "abc123",
    "style": "normal",
    "children": [
      {
        "_type": "span",
        "text": "This is a simple description",
        "marks": []
      }
    ],
    "markDefs": []
  }
]
```

## After Migration

Once migrated, editors will see a rich text editor with formatting options:
- **Bold** (strong)
- *Italic* (em)
- <u>Underline</u>
- `Code`

## Troubleshooting

### Migration Fails
- Check that `SANITY_API_TOKEN` is set correctly
- Verify the token has write permissions
- Check Sanity Studio for any validation errors

### Data Not Showing After Schema Update
- The migration might not have run successfully
- Revert schema changes and run migration again
- Check the API response for error details

### Partial Migration
- The script tracks which documents were migrated
- Safe to run multiple times (skips already-converted fields)

## Rollback

If you need to revert:

1. Revert the schema files back to `text` type
2. Create a reverse migration script if needed (converts blocks back to plain text)

## Environment Variables Required

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-write-token
```
