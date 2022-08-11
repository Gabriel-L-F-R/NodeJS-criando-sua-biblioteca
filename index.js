const chalk = require('chalk')

console.log(chalk.blue('Hello world'))

const paragrafo = 'texto retornado por uma funcao';

function texto(string) {
    return string
}

console.log(texto(paragrafo));