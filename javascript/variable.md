# variable.js

1. use strict

   - add in ES5
   - use this for Vanila Javascript
   - 'use strict';

2. Variable
   - let (added in ES6)
   - var은 사용하지 말 것
   - var hoisting (move declaration from bottom to top)
   - has no block scope
   - READ/WRITE : 메모리에 값을 읽고 쓰는 것이 가능

```javascript
let globalName = "global name";
{
  let name = "oh";
  console.log(name); // oh
  name = "hello";
  console.log(name); // hello
  console.log(globalName); // global name
}
console.log(name); // x
console.log(globalName); // global name
```

3. Constant
   - Immutable data types : premitive types, frozen objects (i.e. object.freeze())
   - Mutable data types: all objects by default are mutable in JS
   - favor immutable data type always for a few reasons :
     - security
     - thread safety
     - reduce human mistakes
   - READ ONLY : 읽기만 가능 하다.

```javascript
const daysInWeek = 7;
const maxNumber = 5;
```

4. Variable types
   - primitive, single item
     - number
     - string
     - boolean
     - null
     - undefined
     - symbol
   - reference
     - array
     - Enumeration
     - class
     - interface

```javascript
const count = 17; // integer
const size = 17.1; // decimal number

const infinity = 1 / 0; // Infinity
const negativeInfinity = -1/0; // -Infinity
const nAn = 'not a number'/2 // NaN;


const bigInt = 123456789123456789001234567890n; // over -2**53 ~ 2**53


// string
const char = 'c';
const brendan = 'brendan';
const greeting ='hello' + brenden;
// ` : 백틱

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value

const canRead = true;
const test 3 < 1; // false

// null
let nothing = null; // 확실하게 비어있는경우

// undefined
let x;
let x = undefined; // 값이 정해지지 않은 경우

// symbol 고유한 식별자가 필요할 때
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');



// 5. Dynamic typing : dynamically typed language
let text = 'hello'; // type : string
text = 1; // type : number
text = '7' + 5; // type : string 75
text = '8' / '2'; // type : number 4

런타임에서 타입이 발생한다....(실행을 해봐야만 에러가 발생한 것을 알 수 있음) => 그래서 타입스크립트가 나오게 된 것



const yehwan = { name : 'ellie', age: 20};
// 여기서 constd의 의미는
// 다른 오브젝트로 변경이 불가능한것

yehwan.name = '111';
// 오브젝트안의 값들은 다른 값들로 할당이 가능
```
