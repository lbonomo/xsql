const xsql = require('./index.js');

console.log(xsql(`
List of variables and values
===========================
Today          = {{ today }}
Yesterday      = {{ yesterday }}
StartThisMonth = {{ StartThisMonth }}
EndThisMonth   = {{ EndThisMonth }}
StartLastMonth = {{ StartLastMonth }}
EndLastMonth   = {{ EndLastMonth }}
StartThisWeek  = {{ StartThisWeek }}
EndThisWeek    = {{ EndThisWeek }}
StartLastWeek  = {{ StartLastWeek }}
EndLastWeek    = {{ EndLastWeek }}
`));

// unknown        = {{ unknown }}
