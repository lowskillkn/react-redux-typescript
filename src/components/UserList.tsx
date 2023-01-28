import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const UserList: React.FC = () => {
  const { users, loading, error } = useTypedSelector((state) => state.user)
  const { fetchUsers } = useActions()

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return <h1 style={{ textAlign: 'center' }}>Идет загрузка Users...</h1>
  }

  if (error) {
    return <h1 style={{ textAlign: 'center' }}>{error}</h1>
  }

  return (
    <div style={{ margin: '0px 0px 20px 0px' }}>
      <h1 style={{ textAlign: 'center' }}>Users</h1>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}

export default UserList
