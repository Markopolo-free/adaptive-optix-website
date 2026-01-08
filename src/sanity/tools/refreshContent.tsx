import React, { useState } from 'react';
import { definePlugin } from 'sanity';
import { Button, Card, Code, Stack, Text } from '@sanity/ui';

function RefreshContentTool() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const refresh = async () => {
    setStatus('loading');
    setMessage('');
    try {
      const res = await fetch('/api/content/cards', { cache: 'no-store' });
      const json = await res.json();
      setStatus('success');
      setMessage(`Content API responded (${json?.source ?? 'unknown source'}) at ${new Date().toLocaleTimeString()}`);
    } catch (err: any) {
      setStatus('error');
      setMessage(err?.message ?? 'Failed to refresh');
    }
  };

  return (
    <Card padding={4} sizing="border">
      <Stack space={4}>
        <Text size={3} weight="semibold">
          Refresh Site Content
        </Text>
        <Text size={2} muted>
          Fetches the site content API to pull latest Sanity data. After publishing, click refresh here and reload the site page to view updates.
        </Text>
        <Button text={status === 'loading' ? 'Refreshing…' : 'Refresh content'} tone="primary" loading={status === 'loading'} onClick={refresh} />
        {message && (
          <Card padding={3} radius={2} shadow={1} tone={status === 'error' ? 'critical' : 'positive'}>
            <Code size={1}>{message}</Code>
          </Card>
        )}
      </Stack>
    </Card>
  );
}

export const refreshContentTool = definePlugin({
  name: 'refresh-content-tool',
  tools: [
    {
      name: 'refresh-content',
      title: 'Refresh Content',
      component: RefreshContentTool,
    },
  ],
});
