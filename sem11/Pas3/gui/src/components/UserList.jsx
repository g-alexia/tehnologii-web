import { useEffect, useState } from 'react'
import RegularUserList from './RegularUserList'
import PowerUserList from './PowerUserList'
import './UserList.css'

const SERVER = 'http://localhost:8080'

function UserList () {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch(`${SERVER}/users`)
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  const regularUsers = users.filter(u => u.type === 'regular-user')
  const powerUsers = users.filter(u => u.type === 'power-user')

  return (
    <div className='user-list'>
      <RegularUserList users={regularUsers} />
      <PowerUserList users={powerUsers} />
    </div>
  )
}

export default UserList
