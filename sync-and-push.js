#!/usr/bin/env node
// sync-and-push.js
// Node.js script to automate Sanity → config.ts sync and git push

const http = require('http');
const { execSync } = require('child_process');
const fs = require('fs');

const SYNC_URL = 'http://localhost:3000/api/sanity/sync-to-config';
const CONFIG_PATH = 'src/data/config.ts';

function syncConfig() {
  return new Promise((resolve, reject) => {
    const req = http.request(SYNC_URL, { method: 'POST' }, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(data);
        } else {
          reject(new Error('Sync failed: ' + data));
        }
      });
    });
    req.on('error', reject);
    req.end();
  });
}

async function main() {
  try {
    console.log('Syncing config.ts from Sanity...');
    await syncConfig();
    if (fs.existsSync(CONFIG_PATH)) {
      const status = execSync(`git status --porcelain ${CONFIG_PATH}`).toString().trim();
      if (status) {
        execSync(`git add ${CONFIG_PATH}`);
        execSync(`git commit -m "Auto-sync config.ts from Sanity"`);
        execSync(`git push`);
        console.log('config.ts updated, committed, and pushed.');
      } else {
        console.log('config.ts is already up to date.');
      }
    }
  } catch (err) {
    console.error('Sync automation failed:', err.message);
    process.exit(1);
  }
}

main();
