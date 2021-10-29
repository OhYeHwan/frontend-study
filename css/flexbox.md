# flexbox

- flexbox

  - container 속성 값
    - display
      - flex : 왼쪽에서 오른쪽으로 정렬
    - flex-direction
      - row : 왼쪽에서 오른쪽으로 가는 방향 (중심축: 수평축)
      - row-reverse : 오른쪽에서 왼쪽
      - column : 위에서 아래로 (중심축: 수직축)
      - column-reverse : 아래에서 위로
    - flex-wrap
      - nowrap : 래핑을 안하겠다.
      - wrap : 한줄이 꽉차면 다음 라인으로 넘어 간다.
      - wrap-reverse
    - flex-flow
      - flex-direction + flex-wrap
    - justify-content : 아이템을 어떻게 배치할 것인지 결정한다.
      - 중심축에서 정렬
      - flex-start : 왼쪽 정렬
      - flex end : 오른쪽 정렬
      - center : 가운데 정렬
      - space-around : 박스를 여백으로 둘러 싼다.
      - space-evenly : 똑같은 간격을 넣어준다.
      - space-between : 맨왼쪽과 오른쪽은 딱 화면에 맞게 넣어준뒤 중간에만 아이템을 넣어준다
    - align-items
      - 반대축을 정렬
      - center
      - ...
      - baseline : 텍스트에 맞춰서 정렬
    - align-content
      - space-between
      - center
      - ...
  - item 속성 값

    - order : 순서를 정할 수 있다.
      - 기본값 : 0
      - 사용을 거의 안한다
    - flex-grow : 컨테이너를 꽉 채우려고 한다.
      - 기본값 : 0
      - 비율
    - flex-shrink : 컨테이너가 점점 작아질때 행동을 지정
      - 기본값 : 0
      - 2 : 줄어들때 2배로 줄여라
    - flex-basis : 공간을 얼마나차지해야하는지 세부적으로 지정

      - auto : 기본값
      - 60% , 30% ....

    - align-self : 아이템 별로 아이템을 정렬
      - center

- flexbox : 두가지의 축이 있다. + 수평이냐 수직이냐에 따라 중심축 반대축이 변경된다.
  - main axis(중심축)
  - cross axis(반대축)

## <br></br>

- % : 컨테이너가 속해있는 부모의 %로 채우겠다.
- vh : 부모에 상관없이 보이는 viewport의 height을 쓰겠다.

```css
// body의 부모는 html
// 컨테이너의 부모는 body

.container {
  background: beige;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  /*flex-flow: colum, nowrap; 한번에 작성 가능*/
  justify-content: flex-start;
}
```

```css
.item {
  width: 40px;
  height: 40px;
  border: 1px solid black;
}
.item2 {
  background: #ef9a9a;
  flex: 2 2 auto; /*grow, shrink, basis*/
}
.item3 {
  background: #ef9a9a;
}
```
