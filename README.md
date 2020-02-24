# xSQL
SQL query whith {{ steroids }}

![logo](./mustache.svg)

Based on [Mustache](https://www.npmjs.com/package/mustache)

```bash
npm install @lbonomo/xsql
```

```javascript
const xsql = require('xsql')
let query = xsql('select * from sales where date = {{ today }}')
```
This sentence return a string where {{ today }} was replace with a date (format YYYY-mm-dd)

## Commands and values
Examples:

| Command        | Exsample   |
|----------------|------------|
| Today          | 2020-02-24 |
| Yesterday      | 2020-02-23 |
| StartThisMonth | 2020-02-01 |
| EndThisMonth   | 2020-02-29 |
| StartLastMonth | 2020-01-01 |
| EndLastMonth   | 2020-01-31 |
| StartThisWeek  | 2020-02-23 |
| EndThisWeek    | 2020-02-29 |
| StartLastWeek  | 2020-02-16 |
| EndLastWeek    | 2020-02-22 |
