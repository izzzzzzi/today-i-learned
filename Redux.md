# Redux

1. Javascript 상태 관리 라이브러리
2. Redux 본질은 Node.js 모듈

## Redux 기본 개념

1. Single source of truth

- 하나뿐인 데이터 저장소 store

2. State is read-only

- Action이라는 객체를 통해서만 상태 변경 가능...

3. Changes are made with pure functions

- Store, Action, Reducer

## 사용 개념

1. Store = 이 안에 필요한 state 담고, component에서 state가 필요할 때마다 접근함
2. Action store 에 운반할 data, object 형식임...

Action 객체가 dispatch() 메소드를 전달함

dispatch 액션을 통해 reduer를 호출함

reducer는 새로운 store를 생성함

store ( state -> next state, + action + reducer ) ==> component update

store.getState() 현재 store에 있는 상태를 출력함..
store.dispatch(e) store에 등록한 reducer에 액션 객체를 전달함..
store.subscribe(e) 작업이 store에 전달될 때마다 호출됨..
replaceReducer(next reducer) store에서 사용하는 reducer를 바꿈

## Redux - Ducks 패턴

1. 사용 이유

- 기존 actions, reducers, saga 로 나뉘어 파일 관리함
- 하나의 기능을 수정하면 기능과 관련된 여러 개의 파일을 수정해야하는 불편함..!
- 구조 중심이 아니라, 기능 중심으로 파일 관리함.

2. 기본 구조

- action type, action 생성자 함수, saga, reucer를 하나의 파일에서 관리
- Ducks 패턴은 modules라는 폴더 내에 저장해 놓는 관습이 있음

3. 지켜야 할 규칙
1. reducer = export default
1. action 함수 = export
1. action 타입 정의 = reducer/ACTION_TYPE 형태 \* 서로 다른 reducer의 Action 이름 중첩 방지
