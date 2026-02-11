const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: '2cg9komv',
  dataset: 'production',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2026-01-20',
});

async function updateDataSecurityIcon() {
  try {
    // Find all solution cards
    const cards = await client.fetch(`*[_type == "solutionCard" && name match "Data Security*"]`);
    
    console.log('Found cards:', cards);
    
    if (cards.length === 0) {
      console.log('No Data Security card found. Checking all solution cards...');
      const allCards = await client.fetch(`*[_type == "solutionCard"] { _id, name, icon }`);
      console.log('All solution cards:', JSON.stringify(allCards, null, 2));
      return;
    }
    
    // Update each matching card
    for (const card of cards) {
      console.log(`Updating card: ${card.name} (${card._id})`);
      await client
        .patch(card._id)
        .set({ icon: '🛡️' })
        .commit();
      console.log(`✓ Updated ${card.name} with shield icon 🛡️`);
    }
    
    console.log('Done!');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

updateDataSecurityIcon();
