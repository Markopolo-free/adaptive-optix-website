// src/app/api/sync-and-push/route.ts
import { NextResponse } from 'next/server';
import { exec } from 'child_process';

export async function POST() {
  return new Promise((resolve) => {
    exec('node sync-and-push.js', { cwd: process.cwd() }, (error, stdout, stderr) => {
      if (error) {
        resolve(NextResponse.json({ success: false, error: stderr || error.message }, { status: 500 }));
      } else {
        resolve(NextResponse.json({ success: true, output: stdout }));
      }
    });
  });
}
