DEPRECATED 

THIS PACKAGE HAS BEEN DEPRECATED IN FAVOUR OF [@vighnesh153/ftp-server](https://www.npmjs.com/package/@vighnesh153/ftp-server). IT WAS NOT FUN TO MAINTAIN MULTIPLE REPOSITORIES AND I HAVE NOW MOVED ALL MY PACKAGES TO A SINGLE MONOREPO. APOLOGIES FOR THE INCONVINIENCE. [NEW REPOSITORY](https://github.com/vighnesh153/vighnesh153-turbo)

# rv-serve-directory

[![npm](https://img.shields.io/npm/v/rv-serve-directory)](https://www.npmjs.com/package/rv-serve-directory)
[![npm](https://img.shields.io/npm/dt/rv-serve-directory)](https://img.shields.io/npm/dt/rv-serve-directory)
[![GitHub](https://img.shields.io/github/license/vighnesh153/serve-directory)](https://github.com/vighnesh153/serve-directory/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/vighnesh153/serve-directory)](https://github.com/vighnesh153/serve-directory/issues)


Serve a directory on your machine over `http`. Visit the server UI on the
browser.

## Usage

This will serve your current directory.

```sh
npx rv-serve-directory
```

## Serve a different directory

```sh
npx rv-serve-directory --path /usr/bin
```

## Default port busy? Serve on different port.

```sh
npx rv-serve-directory --port 4200
```
