# JavaScript Back, Front 개발

1. JavaScript 는 HTML 문서를 보조하는 목적으로 탄생했다.
2. 2009년 NodeJS 가 탄생되면서 JavaScript 는 BackEnd, FrontEnd 개발자를 위한 새로운 도구가 된다.
3. 2023년 8월 현재 18, 20 버전이 사용되고 있으며, 여러가지 부수적인 개발도구가 만들어지고 있다.

## NodeJS는 Back-End 개발도구

1. 라이언달(Ryan Dahl)이 개발한 JS Runtime 이었다
2. 구글에서 크롬에 탑재한 JS 엔진(V8)을 사용할수 있게 되면서, 실행속도가 엄청나게 빨라지고,
   보급이 폭발적으로 늘어났다
3. NodeJS 라는 이름에서 `Node.JS` 라는 이름으로 어느순간 변화되어 불리우고 있다.
4. 2018년쯤 Ryan Dahl 이 NodeJS의 10가지 단점을 스스로 발표한다
   비동기, 보안 등과 관련문제 그리고 npm 에 의존되는 패키지 관리 등을 문제로 삼는다.
5. 2019년쯤 Ryan Dahl `Deno(데노, 디노)` 프로젝트를 발표한다. 아직은 Deno 프로젝트는 실무에서 별로 사용되지 않지만,
   NodeJS 생태계만큼 발전할 가능성을 가지고 있다.

## JavaScript Front-End

1. AngularJS, ReactJS, VeuJS 등이 연달아 발표되면서 JS를 사용한 Front-End 개발환경이 형성된다.
2. Angular, React, Veu 라는 단축이름으로 불리우고, Svelt 등의 새로운 도구가 탄생하고 있다.
3. package.json 에 다음 설정

```json
{
  "name": "react-000-hello",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": ["last 1 chrome version"]
  },
  "author": "",
  "license": "ISC"
}
```

4. dependency 설정

```bash
npm install react
npm install react-dom
npm install react-scripts
```

5. project 구성
1. `public` 폴더 생성, `index.html` 파일 생성 하고 `div#rooy` tag 생성

```html
<body>
  <div id="root"></div>
</body>
```

2. `src` 폴더생성. `App.js` 파일 생성

```js
const App = () => {
  return (
    <div>
      <button>클릭하세요</button>
    </div>
  );
};
export default App;
```

3. `src/index.js` 파일 생성하고

```js
import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
