//配列
const array: string[] = []
array.push('Takuya')
array.push(1)

const mixedArray: ['foo', 1]
const mixedArrayU: (string|number)[] = ['foo', 1] //union
const mixedArrayT: (number)[] = ['foo', 1]