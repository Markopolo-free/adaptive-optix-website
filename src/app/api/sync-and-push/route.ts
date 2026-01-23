// src/app/api/sync-and-push/route.ts
import { NextResponse } from 'next/server';

import { exec } from 'child_process';
import { promisify } from 'util';

export async function POST() {
  const execAsync = promisify(exec);
  try {
    const { stdout } = await execAsync('node sync-and-push.js', { cwd: process.cwd() });
    return NextResponse.json({ success: true, output: stdout });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.stderr || error.message }, { status: 500 });
  }
}
