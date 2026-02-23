import { useState } from 'react';
import type { Todo } from '../types/todo';
import styles from './TodoItem.module.css';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number, completed: boolean) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isToggling, setIsToggling] = useState(false);

  const handleToggle = async () => {
    setIsToggling(true);
    try {
      await onToggle(todo.id, !todo.completed);
    } finally {
      setIsToggling(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      setIsDeleting(true);
      try {
        await onDelete(todo.id);
      } catch (error) {
        setIsDeleting(false);
        throw error;
      }
    }
  };

  return (
    <div className={`${styles.todoItem} ${todo.completed ? styles.completed : ''}`}>
      <div className={styles.content}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          disabled={isToggling || isDeleting}
          className={styles.checkbox}
        />
        <div className={styles.text}>
          <h3 className={styles.title}>{todo.title}</h3>
          {todo.description && (
            <p className={styles.description}>{todo.description}</p>
          )}
        </div>
      </div>
      <button
        onClick={handleDelete}
        disabled={isDeleting || isToggling}
        className={styles.deleteButton}
        aria-label="Delete todo"
      >
        {isDeleting ? '...' : '×'}
      </button>
    </div>
  );
}
