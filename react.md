## React

the view layer of an MVC application (Model View Controller)

1. javascript library, not a framework.
2. open source project created by Facebook.
3. you can create components.

### render () Method

- react component 가 구현하는 method
- 데이터를 입력받아서 화면에 표시할 데이터를 반환하는 역할
- component로 전달된 데이터는 render() 안에서 this.props로 접근 가능

- ReactDOM.redner(App 컴포넌트, root라는 ID의 요소)

### React 구조

> 1. index.js
> 2. App.js
> 3. index.html

1. index.js
- 파일 경로 : src/index.js
- html template, js components 조합하여 rendering 및 표시

2. App.js
- 파일 경로 : src/App.js
- component 정의, 화면에 표시될 내용 정의...

3. index.html
- 파일 경로 : public/index.html
- html template, index.js에 의해 가져와짐... 
