// src/context/TaskContext.js
import { createContext, useContext } from 'react';
import useTasks from '../hooks/useTasks';

// Create the context
const TaskContext = createContext();

// Create a provider component to wrap the app
export function TaskProvider({ children }) {
  const taskData = useTasks();  // Get the task data (state, functions) from the custom hook

  return (
    <TaskContext.Provider value={taskData}>
      {children}
    </TaskContext.Provider>
  );
}

// Custom hook to use the task context
export function useTaskContext() {
  return useContext(TaskContext);  // Access the context from any component
}
