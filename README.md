![banner image](fetchlicense.png)

# `fetchlicense`
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
