// --------------------------------------------------------------------
// Imports
// --------------------------------------------------------------------

var pexprs = require('./pexprs.js');

// --------------------------------------------------------------------
// Private stuff
// --------------------------------------------------------------------

var _applySpaces = new pexprs.Apply('spaces');

function skipSpaces(ruleDict, inputStream) {
  _applySpaces.eval(false, ruleDict, inputStream, undefined);
}

// --------------------------------------------------------------------
// Exports
// --------------------------------------------------------------------

module.exports = skipSpaces;
