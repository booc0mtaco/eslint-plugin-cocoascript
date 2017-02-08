/**
 * @fileoverview Syntax Highlighting for JS-flavored CocoaScript
 * @author Andrew Holloway
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

var re_importStatement = /\@import[ ]+[A-Za-z0-9\/\.\"\']+\;/;
var re_nilStatement = /(nil|NIL)/;

function stripImports(fromString) {
    return fromString.replace(re_importStatement, '');
}

function replaceNil(inString) {
    return inString.replace(re_nilStatement, 'null');
}

// import processors
module.exports.processors = {

    // add your processors here
    ".sketchscript": {
        preprocess: function(text, filename) {
            // parsing on two things to start (run all preprocess methods above):
            return [stripImports(replaceNil(text))];
        },
        postprocess: function(messages, filename) {
            return messages[0];
        }
    }
};