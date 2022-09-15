function sayHello1(name: string, greeting?: string): string {
  return `${greeting} ${name}`
}
sayHello1('takuya')
sayHello1('takuya', 'hello')

function sayHello2(name: string, greeting: string = 'hello'): string {
  return `${greeting} ${name}`
}
sayHello2('takuya')
sayHello2('takuya', 'hey')


function printerName(firstName: string, formatter:(name: string) => string {
  console.log(formatter(firstName))
}

function formatName(name: string): string {
  return `${name} san`
}
printerName('takuya',formatName)


let sayHello3 = (name: string): string => `hello ${name}`

// (引数名：引数の型) => 戻り値の型

function genBirdsInfo(name: string): string[] {
  return name.split(',')
}
//(x: string) =>string[]
function singBirds(birdInfo: (x: string) => string[]): string {
  return birdInfo('hato, kiji')[0] + 'piyo piyo'
}

console.log(singBirds(genBirdsInfo))
console.log(singBirds('dobato'))
