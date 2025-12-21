import { useState } from 'react'
import './UserForm.css'

const USER_TYPE_OPTIONS = [{
  label: 'regular',
  value: 'regular-user'
}, {
  label: 'power',
  value: 'power-user'
}]
const DEFAULT_TYPE = USER_TYPE_OPTIONS[0].value

function UserForm (props) {
  const { onAdd } = props
  const [username, setUsername] = useState('')
  const [fullName, setFullName] = useState('')
  const [type, setType] = useState(DEFAULT_TYPE)

  const resetForm = () => {
    setUsername('')
    setFullName('')
    setType(DEFAULT_TYPE)
  }

  const addUser = async () => {
    if (!username.trim() || !fullName.trim()) {
      return
    }
    await onAdd({
      username,
      fullName,
      type
    })
    resetForm()
  }

  return (
    <div className='user-form'>
      <div className='username'>
        <input type='text' placeholder='username' value={username} onChange={(evt) => setUsername(evt.target.value)} />
      </div>
      <div className='fullName'>
        <input type='text' placeholder='fullName' value={fullName} onChange={(evt) => setFullName(evt.target.value)} />
      </div>
      <div className='type'>
        <select value={type} onChange={(evt) => setType(evt.target.value)}>
          {
            USER_TYPE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))
          }
        </select>
      </div>
      <div className='add'>
        <input type='button' value='add' onClick={addUser} />
      </div>
    </div>
  )
}

export default UserForm
