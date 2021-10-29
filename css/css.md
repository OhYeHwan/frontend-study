# css

- CSS : Cascading Style Sheet

  - Cascading
    - Author Style : 개발자가 지정한 것
    - User Style : 사용자가 지정
    - Browser : 브라우저 기본값
    - !important : 속성 강제 적용 - bed smell
      <br></br>

- selectors : 선택자
  - Universal \* : 모든 태그 선택
  - type Tag
  - ID #id
  - Class .class
  - State :
  - Attribute []

<br></br>

```css
selector {
  property: value;
}

* {
  color: green;
}

/*
구체적으로 쓸수록 우선순위가 높아진다.
*/
li {
  color: blue;
}

/*
ID
*/
#special {
  color: pink;
}

/*
Class
*/
.red {
  width: 100px;
  height: 100px;
  background: yellow;
}

button:hover {
  color: red;
  background: beige;
}

/*
속성값
*/
a[href^="naver.com"] {
  color: purple;
}
```

```css
.red {
  width: 100px;
  height: 100px;
  padding: 20px; 컨텐츠 안에들어간다.
  padding-top: 10px;
  padding: 10 20 10 20; 시계방향
  margin: 20px 컨텐츠 밖에 들어간다.
  backfground: yellow;
}
```
