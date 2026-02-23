import { useState, FormEvent } from 'react';
import type { TodoCreate } from '../types/todo';
import styles from './AddTodoForm.module.css';

interface AddTodoFormProps {
  onAdd: (data: TodoCreate) => Promise<void>;
}

export default function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      return;
    }

    setIsSubmitting(true);
    try {
      await onAdd({
        title: title.trim(),
        description: description.trim() || undefined,
      });
      setTitle('');
      setDescription('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.field}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What needs to be done?"
          disabled={isSubmitting}
          className={styles.input}
          required
        />
      </div>
      <div className={styles.field}>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description (optional)"
          disabled={isSubmitting}
          className={styles.textarea}
          rows={3}
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting || !title.trim()}
        className={styles.submitButton}
      >
        {isSubmitting ? 'Adding...' : 'Add Todo'}
      </button>
    </form>
  );
}
