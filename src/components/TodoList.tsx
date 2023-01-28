import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const TodoList: React.FC = () => {
  const { todos, loading, error, limit, page } = useTypedSelector(
    (state) => state.todo
  )
  const { fetchTodos, setTodoPage } = useActions()
  const pages = [1, 2, 3, 4, 5]

  useEffect(() => {
    fetchTodos(page, limit)
  }, [page])

  if (loading) {
    return <h1 style={{ textAlign: 'center' }}>Идет загрузка Todos...</h1>
  }

  if (error) {
    return <h1 style={{ textAlign: 'center' }}>{error}</h1>
  }

  return (
    <div style={{ marginTop: '30px 0px' }}>
      <h1 style={{ textAlign: 'center' }}>Todos</h1>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            {todo.id} - {todo.title}
          </div>
        )
      })}
      <div style={{ display: 'flex', padding: '20px 10px' }}>
        {pages.map((p) => {
          return (
            <div
              onClick={() => setTodoPage(p)}
              style={{
                border: p === page ? '2px solid green' : '1px solid grey',
                padding: '5px',
                marginRight: '20px',
                cursor: 'pointer',
              }}
              key={p}
            >
              {p}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TodoList
