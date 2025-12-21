import User from './User'

function RegularUserList ({ users }) {
  return (
    <div>
      <h2>Regular Users</h2>
      {users.map(u => (
        <User key={u.id} item={u} />
      ))}
    </div>
  )
}

export default RegularUserList
