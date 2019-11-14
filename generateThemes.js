#!/usr/bin/env node

'use strict'

const path = require('path')
const fs = require('fs')
const postcss = require('postcss')
const prettier = require('prettier')

const fsPromises = fs.promises

const themes = {
  default: {
    foreground: '#eeffff',
    background: '#263238',
    comments: '#546e7a',
    red: '#ff5370',
    orange: '#f78c6c',
    yellow: '#ffcb6b',
    green: '#c3e88d',
    cyan: '#89ddff',
    blue: '#82aaff',
    paleblue: '#b2ccd6',
    purple: '#c792ea',
    brown: '#c17e70',
    pink: '#f07178',
    violet: '#bb80b3',
  },
  darker: {
    foreground: '#eeffff',
    background: '#212121',
    comments: '#545454',
    red: '#ff5370',
    orange: '#f78c6c',
    yellow: '#ffcb6b',
    green: '#c3e88d',
    cyan: '#89ddff',
    blue: '#82aaff',
    paleblue: '#b2ccd6',
    purple: '#c792ea',
    brown: '#c17e70',
    pink: '#f07178',
    violet: '#bb80b3',
  },
  lighter: {
    foreground: '#90a4ae',
    background: '#fafafa',
    comments: '#90a4ae',
    red: '#e53935',
    orange: '#f76d47',
    yellow: '#ffb62c',
    green: '#91b859',
    cyan: '#39adb5',
    blue: '#6182b8',
    paleblue: '#8796b0',
    purple: '#7c4dff',
    brown: '#c17e70',
    pink: '#ff5370',
    violet: '#945eb8',
  },
  ocean: {
    foreground: '#8f93a2',
    background: '#0f111a',
    comments: '#464b5d',
    red: '#ff5370',
    orange: '#f78c6c',
    yellow: '#ffcb6b',
    green: '#c3e88d',
    cyan: '#89ddff',
    blue: '#82aaff',
    paleblue: '#b2ccd6',
    purple: '#c792ea',
    brown: '#c17e70',
    pink: '#f07178',
    violet: '#bb80b3',
  },
  palenight: {
    foreground: '#a6accd',
    background: '#292d3e',
    comments: '#676e95',
    red: '#ff5370',
    orange: '#f78c6c',
    yellow: '#ffcb6b',
    green: '#c3e88d',
    cyan: '#89ddff',
    blue: '#82aaff',
    paleblue: '#b2ccd6',
    purple: '#c792ea',
    brown: '#c17e70',
    pink: '#f07178',
    violet: '#bb80b3',
  },
}

;(async function generateThemes() {
  const srcDir = path.join(__dirname, 'src')
  const themesDir = path.join(__dirname, 'themes')
  const template = await fsPromises.readFile(
    path.join(srcDir, 'prism-material-theme-template.css'),
    'utf8',
  )

  await fsPromises.mkdir(themesDir, { recursive: true })

  return Promise.all(
    Object.entries(themes).map(async ([style, themeData]) => {
      const { css } = await postcss([
        require('postcss-nested'),
        require('postcss-variables')({ globals: themeData }),
      ]).process(template, { from: undefined })
      const formattedCss = prettier.format(css, { parser: 'css' })
      fsPromises.writeFile(
        path.join(themesDir, `material-${style}.css`),
        formattedCss,
      )
    }),
  )
})()
