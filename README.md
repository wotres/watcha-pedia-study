# watcha-pedia-study
## summary
* .env 에서 REACT_APP_ 으로 변수 설정  
* menifest.json
  * 웹 앱의 정보를 JSON 파일로 제공
  * 웹 앱의 다운로드를 네이티브 앱과 유사한 형태로 제공할 수 있게 도와줌
* robots.txt
  * 웹사이트 크롤러가 엑세스 하거나 정보 수집을 해도 되는 페이지를 알려줌
* setupTests.ts
  * 각 테스트 파일에서 사용될 모듈을 import
  * Jest config 파일에서 사용
  * import 반복 줄임
* reportWebVitals
  * index.tsx 에서 호출시 reportWebVitals(console.log) 를 넣으면 앱의 퍼포먼스 시간들을 분석
* react-app-env.d.ts
  * /// <reference types="react-scripts" /> 
    * import 와 비슷한 선언
    * node_modules 의 react-scripts 를 불러와서 사용
    
* index.tsx
  * <React.StrictMode> 는 애플리케이션 내 잠재적인 문제를 알아내기 위한 도구
    * 개발중에만 적용
    * 사용되지않는 메서드 또는 잠재적인 위험을 식별하여 경고 => 두번 렌더링

## code
### css
```javascript
// props 로 속성받음
<MenuButton active={pathname === '/'}>영화</MenuButton>
const MenuButton = styled.button<{ active?: boolean }>`
    color: ${({ active }) => active ? 'rgb(53, 53, 53)' : 'rgb(126, 126, 126)'};
`;

// useRef 라는 Hook 함수를 통해 특정 Dom 선택
useRef

// Recoil: 상태 관리 툴
useRecoilState(loginModalOpenState)

// atom은 redux의 store와 같은 개념
// atom의 값이 바뀌면 구독하고있는 장소는 모두 새로운 값으로 리렌더링
import { atom } from 'recoil';

// react-transition-group: 
// => 리액트에서 컴포넌트가 DOM에 마운팅되고 언마운팅되는 상황에 애니메이션을 적용할 수 있도록 도와줌
<CSSTransition in={isOpen} timeout={300} classNames="modal" unmountOnExit>

// react-query
// => 서버의 값을 클라이언트에 가져오거나, 캐싱, 값 업데이트, 에러핸들링 등 비동기 과정을 더욱 편하게 하는데 사용
// => 서버/클라이언트 데이터 분리
useQuery<AxiosResponse<MovieDetail>, AxiosError>('latestMovie', latestApi);

```

```css
div {
  /* 중앙 정렬 */
  margin: 0 auto;
  /* 그림자 색상 / 위치 */
  /* rgba 와 동일 */
  box-shadow: rgb(0 0 0 / 8%) 0 1px 0 0;
  /* property name | duration | easing function | delay */
  transition: background-color 200ms ease 0s;
  /* <ul> or <ol> 하위에 숫자 또는 기호 표시 안되게 */
  list-style: none;
  /* flex-shrink 는 기본값이 1 / 자동으로 아이템 너비가 축소되지않도록 0 지정 */
  flex-shrink: 0;
  /* 글자 생략부호 표시 */
  text-overflow: ellipsis;
}

/* 
  :first-of-type 
  => first-child(첫번째 element 가 div 여야만 선택가능)와 유사하지만 
     해당 element 기준으로 선택
 */
div:not(:first-of-type) {
  margin: 0 0 0 24px;
}
/*
  특정 요소와 일치하는 값 선택
 */
div > span[class="primary"] {
  color: rgb(255, 47, 110);
}
```
