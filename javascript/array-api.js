// Q1. make a string out of an array
// join : 배열을 스트링으로 만든다.
{
  const fruits = ["apple", "banana", "orange"];
  //console.log("result : " + fruits.join(" "));
  const str = fruits.join(" ");
  //console.log(str);
}

// Q2. make an array out of a string
// split : 스트링을 구분자로 배열로 만든다.
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const arr = fruits.split(",");
  //console.log(arr);
  //console.log(arr.length);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
// 정렬 기준 필요
{
  const array = [1, 2, 3, 4, 5];
  array.sort((a, b) => b - a);
  //console.log(array);
}

// Q4. make new array without the first two elements
// splice 반환 값은 삭제된 값이다. 원본에서 삭제된다.
{
  const array = [1, 2, 3, 4, 5];
  const newArray = array.splice(0, 2);
  //   console.log(array);
  //   console.log(newArray);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  const s = students.find((i) => i.score === 90);
  //   console.log(students);
  //   console.log(s);
}

// Q6. make an array of enrolled students
// filter : 새로운 배열을 리턴
{
  const errolled = students.filter((i) => i.enrolled === true);
  //   console.log(students);
  //   console.log(errolled);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
// map은 새로운 배열을 리턴
// forEach는 리턴 값이 없음
{
  const arr = [];
  students.forEach((i) => arr.push(i.score));
  const arr2 = students.map((i) => i.score);
  console.log(arr2);
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.filter((i) => i.score < 50);
  console.log(result);
}

// Q9. compute students' average score
{
  let result = 0;
  students.forEach((i) => {
    result += i.score;
  });
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const score = students.map((i) => i.score);
  console.log(score);
  const str = score.join(", ");
  console.log(str);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const score = students.map((i) => i.score);
  score.sort((a, b) => a - b);
  const str = score.join(", ");
  console.log(str);
}
