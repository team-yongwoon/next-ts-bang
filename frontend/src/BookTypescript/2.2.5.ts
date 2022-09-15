// 2.2.5 any

let user1: any = {firstName: 'takuya'}
user1.hello()
user1()
user1.age = 100
user1 = 'hello'

const n: number = user1