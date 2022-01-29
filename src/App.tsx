import { useCallback, useRef, useState } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

export type Todos = {
  id: number,
  text: string,
  checked: boolean
};
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todos[]>([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ]);
  const nextId = useRef(4);
  const onInsert = useCallback((text: string) => {
    const newTodos = [
      ...todos,
      {
        id: nextId.current,
        text,
        checked: false
      }];
    setTodos(newTodos);
    nextId.current += 1;
  },[todos]);
  const onRemove = useCallback((id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  },[todos]);
  const onToggle = useCallback((id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? {...todo, checked: !todo.checked} : todo)
    );
  },[todos])
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
}

export default App;
