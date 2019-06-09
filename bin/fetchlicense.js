#!/usr/bin/env node

const {get} = require('https');
const {readFileSync} = require('fs');


const defaultLicense = 'MIT';
let licenseId = process.argv[2];

try {
  licenseId = !licenseId
    ? (JSON.parse(readFileSync('./package.json', 'utf-8')).license || defaultLicense)
    : licenseId;
} catch (e) {
  licenseId = defaultLicense;
}

get(`https://api.github.com/licenses/${licenseId}`,
  {headers: {'User-Agent': 'r0mflip/fetchlicense'},
}, res => {
  let data = Buffer.from([], 'utf-8');

  if (res.statusMessage !== 'OK') {
    console.log(`Error [${res.statusMessage}]: Cannot fetch license`);
    return;
  }

  res.on('data', d => data = Buffer.concat([data, d]));

  res.on('end', d => {
    data = d ? Buffer.concat([data, d]) : data;
    process.stdout.write(JSON.parse(data.toString('utf-8')).body);
  });
}).on('error', e => {
  console.error(`Error [${e.code}]: Failed to fetch license, check your network settings`);
  process.exit();
});
