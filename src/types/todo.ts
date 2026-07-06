export type Priority = 'low' | 'medium' | 'high';
export type FilterTab = 'all' | 'pending' | 'completed';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  priority: Priority;
  dueDate: string | null;
  createdAt: string;
}

export interface TodoState {
  todos: Todo[];
  searchTerm: string;
  activeFilter: FilterTab;
  isModalOpen: boolean;
}

export type TodoAction =
  | { type: 'ADD_TODO'; payload: Omit<Todo, 'id' | 'createdAt'> }
  | { type: 'COMPLETE_TODO'; payload: string }
  | { type: 'DELETE_TODO'; payload: string }
  | { type: 'SET_SEARCH'; payload: string }
  | { type: 'SET_FILTER'; payload: FilterTab }
  | { type: 'OPEN_MODAL' }
  | { type: 'CLOSE_MODAL' };
