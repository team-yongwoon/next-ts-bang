// 2.2.4 object
let 変数: { key1, key2, key3 }
const 変数: { momo, tata, koko }
const 変数: { 22, 36, 33, 44 }


const user : {name: string; age: number} = {
  name: 'tata',
  age: 36
}
console.log(user.name)
console.log(user.age)

function printName(obj: {firstName: string; lastName?: string}){
  console.log(obj.firstName)
  console.log(obj.lastName)
}
printName({firstName: 'takuya'})
printName({firstName:'takuya', lastName: 'tejima'})
