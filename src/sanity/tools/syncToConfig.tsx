import { definePlugin } from 'sanity';
import { SyncIcon } from '@sanity/icons';

export const syncToConfigTool = definePlugin({
  name: 'sync-to-config-tool',
  tools: (prev) => [
    ...prev,
    {
      name: 'sync-to-config',
      title: 'Sync to Config',
      icon: SyncIcon,
      component: () => {
        const handleSync = async () => {
          const confirmed = window.confirm(
            'This will overwrite src/data/config.ts with current Sanity content. Continue?'
          );

          if (!confirmed) return;

          try {
            const response = await fetch('/api/sanity/sync-to-config', {
              method: 'POST',
            });

            const data = await response.json();

            if (data.success) {
              alert(
                `✅ Config synced successfully!\n\n` +
                  `Home Cards: ${data.counts.homeCards}\n` +
                  `Why Cards: ${data.counts.whyCards}\n` +
                  `Products: ${data.counts.products}\n` +
                  `Solutions: ${data.counts.solutions}`
              );
            } else {
              alert(`❌ Sync failed: ${data.error}`);
            }
          } catch (error) {
            alert(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
          }
        };

        return (
          <div style={{ padding: '2rem', maxWidth: '600px' }}>
            <h1 style={{ marginBottom: '1rem' }}>Sync to Config File</h1>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              This tool syncs your published Sanity content back to the{' '}
              <code>src/data/config.ts</code> file.
            </p>
            <div
              style={{
                background: '#fff4e6',
                border: '1px solid #ffa940',
                borderRadius: '4px',
                padding: '1rem',
                marginBottom: '1.5rem',
              }}
            >
              <strong>⚠️ Important:</strong>
              <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                <li>This will overwrite your config.ts file</li>
                <li>Make sure your changes are published in Sanity first</li>
                <li>Consider committing your current config.ts to git first</li>
              </ul>
            </div>
            <button
              onClick={handleSync}
              style={{
                background: '#f26419',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '0.75rem 1.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = '#d85515')}
              onMouseOut={(e) => (e.currentTarget.style.background = '#f26419')}
            >
              <SyncIcon />
              Sync Sanity Content to Config
            </button>
            <div style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#666' }}>
              <strong>What this does:</strong>
              <ol style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                <li>Fetches all published content from Sanity</li>
                <li>Formats it as TypeScript code</li>
                <li>Writes it to src/data/config.ts</li>
                <li>Keeps config.ts in sync with Sanity Studio</li>
              </ol>
            </div>
          </div>
        );
      },
    },
  ],
});
