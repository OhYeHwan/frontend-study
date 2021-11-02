# CSS Study 정리

- selectors : 선택자

  ```CSS
  /* 모든 태그 */
  * {

  }

  /* 타입 */
  li {

  }

  /* iD */
  #id {

  }

  /*class*/
  .class명 {

  }

  /* 속성 */
  타입[속성] {

  }

  ```

<br></br>

- div 와 span

  - div : 블록 레벨(한 줄에 하나)
  - span : 공간이 허용하는 한 한줄에 들어간다.

<br></br>

- position
  - static : default
    - 왼쪽에서 오른쪽, 위에서 아래
  - relative : 원래 있어야하는 자리에서 이동
    - top, right, bottom, left 사용 가능
  - absolute : 가장 가까운 상자 안에서 이동
    - static 속성을 가지고 있지 않은 조상 기준
    - 없다면 body 기준
  - fixed : 상자에서 벗어나 페이지 안에서 이동
  - sticky : 스크롤링 해도 해당 자리에 붙어 있음

<br></br>

- CSS 상대 단위
  - em : 상위 요소 기준의 배수
    - ex )
      - font-size: 1.5em;
      - 글자 크기를 상위 요소 크기의 1.5배로 지정하겠다.
  - rem : html 요소기준의 배수
    - 문서의 최상위 요소
    - html 요소 크기의 기본 값은 웹브라우저 설정에서 정한 크기
    - 보통 16px

<br></br>

- margin 과 padding
  - magin : 오브젝트와 화면과 여백
  - padding : 오브젝트내의 내부 여백
  - 값 설정 시 [위-오른쪽-아래-왼쪽] 순서
