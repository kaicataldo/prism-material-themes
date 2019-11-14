# Prism Material Themes 

[![npm](https://img.shields.io/npm/v/prism-material-themes?color=%231615e6&style=flat-square)](https://www.npmjs.com/package/prism-material-themes)

This repository contains the source code for themes for the Prism syntax highlighting library based on the wonderful [Material theme](https://material-theme.site/)!

## Installation

The themes are available on `npm`:

```sh
npm install prism-material-themes
```

## Usage

The themes are located in the package's `themes/` directory in the form of CSS files. 

### Copy and include as asset manually

You can copy the theme you'd like to use into your project and use it like so:

```html
<!DOCTYPE html>
<html>
  <head>
    ...
    <link href="themes/material-default.css" rel="stylesheet" />
  </head>
  <body>
    ...
    <script src="prism.js"></script>
  </body>
</html>
```

### Import using a bundler like webpack 

```js
import 'prism-material-themes/themes/material-default.css';
```

## Screenshots

### Material Default (`material-default.css`)

<img src="screenshots/material-default.png" alt="Screenshot of Material Default theme" title="Material Default (`material-default.css`)" width="600px">

### Material Darker (`material-darker.css`)

<img src="screenshots/material-darker.png" alt="Screenshot of Material Darker theme" title="Material Darker (`material-darker.css`)" width="600px">

### Material Lighter (`material-lighter.css`)

<img src="screenshots/material-lighter.png" alt="Screenshot of Material Lighter theme" title="Material Lighter (`material-lighter.css`)" width="600px">

### Material Ocean (`material-ocean.css`)

<img src="screenshots/material-ocean.png" alt="Screenshot of Material Ocean theme" title="Material Ocean (`material-ocean.css`)" width="600px">

### Material Palenight (`material-palenight.css`)

<img src="screenshots/material-palenight.png" alt="Screenshot of Material Palenight theme" title="Material Palenight (`material-palenight.css`)" width="600px">
