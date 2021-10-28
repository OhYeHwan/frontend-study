# Array.js

1. 배열의 선언

```javascript
const arr1 = new Array();
const arr2 = [];
```

2. 인덱스

```javascript
const fruits = ["사과", "바나나"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // 인덱스로 접근
```

3. Looping over an array

```javascript
// a. for
for(let i =0; i<fruits.length; i++>) {
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits) {
    console.log(fruit);
}

// c. forEach : 콜백함수를 받아온다.
fruits.forEach((fruit, index, array) => console.log(fruit, item, array));
fruits.forEach(fruit => console.log(fruit));

// forEach(콜백함수(value, index, array), thisArgs) => void
```

4. Addition, deletion, copy

```javascript
push & pop 뒤에서부터 값을 넣고 빼기
unshift & shift 앞에서부터 값을 넣고 빼기

* unshift와 shift는 매우 느리다.
* 배열 전체의 값들이 옮겨가야하기 때문에

splice : 지정된 인덱스에서 값을 지우기
const arr = [1,2,3];
arr.splice(1); // 1번 인덱스부터 뒤로 전부삭제 [1]
arr.splice(1,1); // 1번 인덱스부터 1개 삭제 [1,3]
arr.splice(인덱스, 개수);
arr.splice(인덱스, 개수, 추가할 원소);

const arr2 = [4,5,6];
const newArr = arr.concat(arr2); //[1,2,3,4,5,6]
```

5. Searching

```javascript
arr.indexOf("값"); // 배열안에서 값이 몇번째 인덱스에 있는지 알려준다.

arr.includes("값"); // 배열안에 값이 있는지 없는지 알려준다.

arr.lastIndexOf("값"); // 마지막에 있는 값의 인덱스를 알려준다.
```
