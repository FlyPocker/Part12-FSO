import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import Todo from './Todo'

test('renders todo text and incomplete status', () => {
  const todo = {
    text: 'Learn Docker multi-stage builds',
    done: false
  }

  render(
    <Todo 
      todo={todo} 
      deleteTodo={() => {}} 
      completeTodo={() => {}} 
    />
  )

  expect(screen.getByText('Learn Docker multi-stage builds')).toBeDefined()
  expect(screen.getByText('This todo is not done')).toBeDefined()
})