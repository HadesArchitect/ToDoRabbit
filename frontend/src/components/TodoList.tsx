import type { Todo } from '../types/todo';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

interface TodoListProps {
  todos: Todo[];
  loading: boolean;
  error: string | null;
  onToggle: (id: number, completed: boolean) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
}

export default function TodoList({ todos, loading, error, onToggle, onDelete }: TodoListProps) {
  if (loading) {
    return (
      <div className={styles.state}>
        <p className={styles.stateText}>Loading todos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.state}>
        <p className={styles.errorText}>Error: {error}</p>
      </div>
    );
  }

  if (todos.length === 0) {
    return (
      <div className={styles.state}>
        <p className={styles.emptyText}>No todos yet. Add one above to get started!</p>
      </div>
    );
  }

  return (
    <div className={styles.list}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
