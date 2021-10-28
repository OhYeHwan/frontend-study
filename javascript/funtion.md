# function.js

## Funtion

- fundamental building block in the program
- subprogram can be used multiple times
- performs a task or calculates a value

1. Funtion declaration
   - function name(param1, param2) { body... return; }
   - one function === one thing
   - naming: doSomething, command, verb
   - e.g. createCardAndPoint -> createCard, createPoint
   - function is object in JS

```javascript
function log(message) {
  console.log(message);
}
```

2. Parameters

   - premitive parameters: passed by value
   - object parameters: passed by reference

3. Default parameters (added in ES6)

```javascript
function showMessage(message, from) {
  console.log(`${message} by ${from}`);
}

showMessage("hello"); // hello by unknown
```

4. Rest parameters (added in ES6)

```javascript
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  /* for (const arg of args {
        console.log(arg);
    }
*/
}

printAll("dream", "coding", "ellie");
```

5. Local scope

   - 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.

```javascript
let globalMessage = "global"; // global variable

function printMessage() {
  let message = "hello"; // local variable
}
```

6. Return value

```javascript
function sum(a, b) {
  return a + b;
}

const result = sum(1, 2);
console.log(result);
```

7. Early return, ealry exit

```javascript
function upgradeUser(user) {
  // 조건이 맞지 않을때 빠르게 리턴
  if (user.point <= 10) {
    return;
  }
  // 그 후에 로직 작성
  // long upgrade loginc
}
```

<br></br>

## First-class function

- functions are treated like any other variable
- can be assinged as a value to variable
- can be passed as an argument to other functions
- can be returned by another function
- 함수는 다른 변수와 마찬가지로 변수에 할당이되고
- 함수의 파라미터로 전달도 되고
- 리턴 값으로 리턴도 된다.

<br></br>

1. Funtion expression
   - a function declaration can be called earlier than it is defined. (hoisted)
   - 함수가 선언되기 전에 호출하는 것이 가능하다 cuz 호이스팅
   - 자바스크립트 엔진이 선언된 것을 위로 올려준다
   - a function expression is created when the execution reaches it.
   - function expression은 선언하기전에 호출이 불가능 하다.

```javascript
const print = function () {
  // anonymous fuction : 이름이 없는 함수
  console.log("print");
};
print();
const printAgain = print;
printAgain();
```

<br></br> 2. Callback function using function expression

```javascript
function randomQuiz(answer, printYes, printNo) {
  if (answer == "love") {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function : 이름 없는 함수
const printYes = function () {
  console.log("yes!");
};

// named function
// 디버깅을 할 때 유용하다.
const printNo = function print() {
  console.log("no!");
};

// Arrow function
// always anonymous
const simplePrint = () => console.log("hello");
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  //do something more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
// 선언함과 동시에 호출하는 방법
(function hello() {
  console.log("IIFE");
})();
```
