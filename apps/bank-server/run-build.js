#!/usr/bin/env node
const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function maskVal(v) {
  if (typeof v === 'undefined') return 'undefined';
  if (v === '') return 'empty';
  return '***';
}

function printDiagnostics(cwd, inner) {
  console.log('--- run-build diagnostics ---');
  console.log('cwd:', cwd);
  console.log('inner path:', inner);
  console.log('CI =', process.env.CI);
  console.log('NODE_ENV =', process.env.NODE_ENV);
  console.log('SKIP_ENV_VALIDATION =', process.env.SKIP_ENV_VALIDATION);
  console.log('FAIL_ON_MISSING_ENV =', process.env.FAIL_ON_MISSING_ENV);
  console.log('WEBHOOK_URL present =', !!process.env.WEBHOOK_URL);
  console.log('DATABASE_URL present =', !!process.env.DATABASE_URL);
  console.log('WEBHOOK_SECRET present =', !!process.env.WEBHOOK_SECRET);
  console.log('CLIENT_RETURN_URL present =', !!process.env.CLIENT_RETURN_URL);
  console.log('--- file listing (cwd) ---');
  try {
    const files = fs.readdirSync(cwd);
    console.log(files.join(' | '));
  } catch (e) {
    console.error('Could not list cwd files:', e && e.message);
  }
  console.log('--- end diagnostics ---');
}

function runBuildAt(dir) {
  console.log(`Running npm run build in: ${dir}`);
  const pkgPath = path.join(dir, 'package.json');
  if (fs.existsSync(pkgPath)) {
    try {
      const pkg = require(pkgPath);
      console.log('inner package name:', pkg.name || '(no name)');
      console.log('inner scripts.build:', (pkg.scripts && pkg.scripts.build) || '(no build script)');
    } catch (e) {
      console.warn('Failed to read inner package.json:', e && e.message);
    }
  } else {
    console.warn('No package.json found in inner dir');
  }

  const res = spawnSync('npm', ['run', 'build'], { stdio: 'inherit', cwd: dir, env: process.env });
  if (res.error) {
    console.error('Failed to run build:', res.error && res.error.message);
    process.exit(1);
  }
  if (typeof res.status === 'number' && res.status !== 0) {
    console.error('Inner build exited with status', res.status);
    process.exit(res.status);
  }
  process.exit(0);
}

const cwd = process.cwd();
const inner = path.join(cwd, 'bank-server');

printDiagnostics(cwd, inner);

// If an inner bank-server folder exists with package.json, run build there.
if (fs.existsSync(path.join(inner, 'package.json'))) {
  runBuildAt(inner);
}

// If current directory looks like the actual bank-server app (package.json name), build here.
try {
  const pkgPath = path.join(cwd, 'package.json');
  if (fs.existsSync(pkgPath)) {
    const pkg = require(pkgPath);
    if (pkg && pkg.name && pkg.name.includes('bank-server')) {
      runBuildAt(cwd);
    }
  }
} catch (e) {
  // fallthrough
}

// Fallback: if inner doesn't exist and current dir didn't match, try to run in inner anyway
if (fs.existsSync(inner)) {
  runBuildAt(inner);
}

console.error('Could not find bank-server package to build.');
process.exit(1);
