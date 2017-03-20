# eslint-plugin-cocoascript

Syntax Highlighting for JS-flavored CocoaScript. CocoaScript is used for [Sketch](http://sketchapp.com/) plugins, and provides access to JavaScript and Cocoa resources.

Works with any IDE that supports ESLint integration, like [Atom](http://atom.io/) and others.

More info at : <https://www.npmjs.com/package/eslint-plugin-cocoascript>

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-cocoascript`:

```
$ npm install eslint-plugin-cocoascript --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-cocoascript` globally.

## Usage

Add `cocoascript` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "cocoascript"
    ]
}
```

# License

MIT © [Andrew Holloway](mailto:booc0mtaco@gmail.com)



