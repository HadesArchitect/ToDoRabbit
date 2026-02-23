import type { Todo, TodoCreate } from '../types/todo';

const API_BASE = '/api';

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API Error: ${response.status} - ${errorText}`);
  }
  return response.json();
}

export async function fetchTodos(completed?: boolean): Promise<Todo[]> {
  const url = completed !== undefined 
    ? `${API_BASE}/todos?completed=${completed}`
    : `${API_BASE}/todos`;
  
  const response = await fetch(url);
  return handleResponse<Todo[]>(response);
}

export async function createTodo(data: TodoCreate): Promise<Todo> {
  const response = await fetch(`${API_BASE}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return handleResponse<Todo>(response);
}

export async function updateTodo(id: number, data: Partial<Todo>): Promise<Todo> {
  const response = await fetch(`${API_BASE}/todos/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return handleResponse<Todo>(response);
}

export async function deleteTodo(id: number): Promise<void> {
  const response = await fetch(`${API_BASE}/todos/${id}`, {
    method: 'DELETE',
  });
  
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API Error: ${response.status} - ${errorText}`);
  }
}
