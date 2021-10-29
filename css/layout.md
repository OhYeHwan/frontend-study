# Diplay와 Position

- display
  - block-level : 한 줄에 하나
    - div : 상자
  - inline-level :
    - span : 안에 내용을 넣어야 보인다.

```css
div,
span {
  width: 80px;
  height: 80px;
  margin: 20px;
  background: pink;
}

div {
  background: red;
  display: inline; /* 보여지지 않음 -> inline은 컨텐츠 자체만을 꾸며준다.*/
  display: inline-block; /*기본 값 변경 inline-block은 한 줄에 여러개가 있는 상자*/
}

span {
  background: Blue;
  display: block; /*기본 값 변경 inline -> block*/
}
```

---

- position
  - static
    - 기본값
  - relative
    - 원래 있어야하는 자리에서 이동
  - absolute
    - 가장 가까운 상자 안에서 이동
  - fixed
    - 상자에서 벗어나 페이지 안에서 이동 하는 것
  - sticky
    - 스크롤링 해도 해당 자리에 붙어 있다.

```css
div {
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
  bacckground: red;
}

.container {
  background: yellow;
  left: 20px;
  top: 20px;
  position: static;
}

.box {
  background: blue;
  left: 20px;
  top: 20px;
  position: relative; /*원래있어야하는자리에서부터 이동*/
}
```
