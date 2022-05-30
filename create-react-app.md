# create-react-app

- React App 개발 환경 구성해주는 boilerplate

1. public/index.html
2. src/index.js
3. react, react-dom, react-scripts 및 dependency library 설치
4. react-scripts를 사용하여 package.json에 npm command 정의함

## NPM

Node Package Manager

```
npm run <script-name>
```

- minifying CSS, JavaScript uglifying, 프로젝트 빌드와 같은 작업을 자동화함...

```json
{
  "name": "example",
  "scripts": {
    "test": "Echo 'hello world~'",
    "start": "npm run lite",
    "lite": "lite-server"
  }
}
```

## React-scripts

### npm run start

### -> react-scripts/scripts/start.js

```js
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const {
  choosePort,
  createCompiler,
  prepareProxy, prepareUrls,
} = require('react-dev-utils/WebpackDevServerUtils);
const openBrowser = require('react-dev-utils/openBrowser);
```

1. webpack으로 src/index.js를 entry로 하는 source들을 bundling(묶어버리기~)
2. webpack-dev-server와 react-dev-utils를 사용하여 browser에 띄움
3. webpack-dev-server의 <b>hot</b> 옵션으로 코드

### npm run test

### -> react-scripts/scripts/test.js

```js
const jest= require('jest');
const execSync = require('child_process').execSync;
let argv = process.argv.slice(2);
...
jest.run(argv);
```

> jest : javascript test framework...

### npm run build

### -> react-scripts/scripts/build.js

1. bundling
2. build/ 디렉토리에 bundling한 결과를 저장함

### npm run eject

### -> webpack, babel, eslint 를 eject...
