import User from './User'

function PowerUserList ({ users }) {
  return (
    <div>
      <h2>Power Users</h2>
      {users.map(u => (
        <User key={u.id} item={u} />
      ))}
    </div>
  )
}

export default PowerUserList
