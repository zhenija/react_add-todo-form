import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/todo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <section className="TodoList">
    {todos.map((todo: Todo) => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </section>
);