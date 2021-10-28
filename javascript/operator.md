# operator.js

1.String concatenation

```javascript
console.log("my" + "cat"); // 문자열 붙이기
console.log("1" + 2); // 12
console.log(`string literals: ${1 + 2}`);
```

<br></br> 2.Numberic operators

```javascript
+, - , / , * , %, **
```

<br></br> 3.Increment and decrement operators

```javascript
let counter = 2;
const preIncrement = ++counter;
const postIncrement = counter++;
```

<br></br> 4.Assigment operators;

```javascript
let x = 3;
let y = 6;
x += y;
```

<br></br> 5.Comparison operators

```javascript

> < <= >=

```

<br></br> 6.Logical operators

```javascript
||(or), &&(and), !(not)

or : 처음으로 true가 나오면 멈춘다.
console.log(true || false || false); // 첫 true 에서 멈춘다.
효율적인 코드 : 연산이 많은 불리언 함수는 맨 뒤에 넣는다

and : 처음으로 false가 나오면 멈춘다.

```

<br></br> 7.Equality

```javascript
const stringFive = '5';
const numberFive = 5;

== : loose equality (with type conversion)
console.log(stringFive == numberFive); // true;


=== : strict equality (no type conversion)
console.log(stringFive === numberFive); // false

```

<br></br> 8.Conditional operators : if

```javascript
if, else if, else

if(a <= 10) {
    console.log('yes');
} else if(a <= 5) {
    console.log('no');
} else {
    consoe.log('s');
}

```

<br></br> 9.Ternary operator: ?

```javascript
condition ? value1 : value2;
```

<br></br> 10.Switch statement

```javascript
switch (browser) {
  case "case1":
    break;
  case "case2":
    break;
  default:
    break;
}
```

<br></br> 11.Loops

```javascript
while (조건) {}

do {} while (조건);
```

<br></br> 12.for loop, for(begin; condition; step)

```javascript

for(let i=0; i<10; i++) {
    console.log(i);
}

break, continue

```
