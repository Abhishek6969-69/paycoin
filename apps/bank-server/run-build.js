#!/usr/bin/env node
const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function runBuildAt(dir) {
  console.log(`Running npm run build in: ${dir}`);
  const res = spawnSync('npm', ['run', 'build'], { stdio: 'inherit', cwd: dir });
  if (res.error) {
    console.error('Failed to run build:', res.error);
    process.exit(1);
  }
  process.exit(res.status || 0);
}

const cwd = process.cwd();
const inner = path.join(cwd, 'bank-server');

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
