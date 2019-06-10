#!/usr/bin/env node

const {get} = require('https');
const {readFileSync} = require('fs');


const defaultId = 'MIT';
let arg = process.argv[2];

try {
  arg = !arg
    ? (JSON.parse(readFileSync('./package.json', 'utf-8')).license || defaultId)
    : arg;
} catch (e) {
  arg = defaultId;
}

get(`https://api.github.com/licenses/${arg}`, {headers: {'User-Agent': 'fetchlicense'}}, res => {
  let data = Buffer.from([], 'utf-8');

  if (res.statusMessage !== 'OK') {
    console.error(`Error [${res.statusMessage}]: Cannot fetch license`);
    process.exit(1);
  }

  res.on('data', d => data = Buffer.concat([data, d]));

  res.on('end', d => {
    data = d ? Buffer.concat([data, d]) : data;
    process.stdout.write(JSON.parse(data.toString('utf-8')).body);
  });
}).on('error', e => {
  console.error(`Error [${e.code}]: Failed to fetch license, check your network settings`);
  process.exit(1);
});
