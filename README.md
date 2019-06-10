![banner image](https://raw.githubusercontent.com/r0mflip/fetchlicense/master/fetchlicense.png)

# `fetchlicense`
[![npm-badge](https://badgen.net/npm/v/fetchlicense?style=flat)](https://www.npmjs.com/package/fetchlicense)
[![npm-badge](https://badgen.net/packagephobia/publish/fetchlicense?&style=flat)](https://packagephobia.now.sh/result?p=fetchlicense)

A (1KB) utility to fetch a license for use with GitHub _(fetched from [Github API](https://api.github.com/licenses/))_

## Usage
``` sh
$ npx fetchlicense [SPDX_LICENSE_IDENTIFIER] > LICENSE
```

`SPDX_LICENSE_IDENTIFIER` _(optional)_ : Any license identifier from the [SPDX License List](https://spdx.org/licenses/)
_(defaults to `license` field of `package.json` in current directory)_

## License
[MIT](LICENSE)
> Fetched by using this utility 😁
