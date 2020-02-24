// https://www.npmjs.com/package/mustache
const mustache = require("mustache");

// *** DAYS ***

const oneDay = 24*60*60*1000;

const today = () => {
  let date = new Date(Date.now());
  return date.toISOString().split('T')[0];
};

const yesterday = () => {
  let date = new Date(Date.now() - oneDay );
  return date.toISOString().split('T')[0];
};

// *** WEEK ***
const StartThisWeek = () => {
  let date = new Date(Date.now());
  let day = date.getDay();
  date.setDate(date.getDate() - day);
  return date.toISOString().split('T')[0];
}

const EndThisWeek = () => {
  let date = new Date(Date.now());
  let day = date.getDay();
  date.setDate(date.getDate() - day + 6);
  return date.toISOString().split('T')[0];
}

const StartLastWeek = () => {
  let date = new Date(Date.now());
  let day = date.getDay();
  date.setDate(date.getDate() - (day + 7) );
  return date.toISOString().split('T')[0];
}

const EndLastWeek = () => {
  let date = new Date(Date.now());
  let day = date.getDay();
  date.setDate(date.getDate() - (day + 1) );
  return date.toISOString().split('T')[0];
}

// TODO:
const Q1 = () => {}
const Q2 = () => {}
const Q3 = () => {}
const Q4 = () => {}

// *** MONTHS ***
const StartThisMonth = () => {
  let date = new Date(Date.now());
  date.setDate(1);
  return date.toISOString().split('T')[0]
}

const EndThisMonth = () => {
  let d = new Date(Date.now());
  // Los meses van del 0 al 11. Por lo que la siguente función
  // devuelve el ultimo dia del mes anterios al siguiente (+1)
  let date = new Date(d.getFullYear(), d.getMonth()+1, 0);
  return date.toISOString().split('T')[0]
}

const StartLastMonth = () => {
  let date = new Date(Date.now());
  date.setMonth(date.getMonth() - 1);
  date.setDate(1);
  return date.toISOString().split('T')[0];
}

const EndLastMonth = () => {
  let date = new Date(Date.now());
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate
  // For example if 0 is provided for dayValue, the date will be set to the last day of the previous month.
  date.setDate(0)
  return date.toISOString().split('T')[0];
}


const commands = {
    today: today(),
    yesterday: yesterday(),
    StartThisMonth:StartThisMonth(),
    EndThisMonth:EndThisMonth(),
    StartLastMonth:StartLastMonth(),
    EndLastMonth:EndLastMonth(),
    StartThisWeek:StartThisWeek(),
    EndThisWeek:EndThisWeek(),
    StartLastWeek:StartLastWeek(),
    EndLastWeek:EndLastWeek(),
};

const help = () => {
  let text = 'Valores permitidos en la consulta:\n==================================\n';
  for (command in commands) {
      text += `${ command } (${ commands[command]})\n`;
  }
  return text
}

const xsql = (template) => {
  let p = mustache.parse(template);
  for (x in p) {
    if (p[x][0] === 'name') {
      if ( ! commands.hasOwnProperty(p[x][1])) {
        // Si no existe el comando salimos
        return `No se reconoce el comando "${p[x][1]}"\n\n${help()}`;
      }
    }
  }

  let query = mustache.render(template, commands);
  return query;

};

module.exports = xsql;
