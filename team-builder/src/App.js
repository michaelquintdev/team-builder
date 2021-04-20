import './App.css';
import React, { useState } from 'react'

const members = [
  { name: 'Captain Jack Sparrow', nickname: 'The Lad' },
  { name: 'Johnny From Georgia', nickname: 'That one guy who had a fiddle at a point in time'},
  { name: 'Tom', nickname: 'Ender of worlds, reaver of souls. Fear Tom. He ends only who which he hears. Oh no, hes coming. Hel-'},
]

const initialValues = {
  name: '',
  nickname: '',
}

export default function App() {
  const [name, setName] = useState(members);
  const [formValues, setFormValues] = useState(initialValues);

  const change = event => {
    const { name, value } = event.target;
    setFormValues({...formValues, [name]: value});
  }

  const submit = event => {
    event.preventDefault()
    const newFriend = {
      name: formValues.name.trim(),
      nickname: formValues.nickname.trim(),
    }
    setName([...name, newFriend])

    setFormValues(initialValues)
  }

  return (
    <div className = 'Container'>
      <h1>AYO THIS IS A FORM hehehhe</h1>
      {name.map((member, idx) => {
        return (
          <div key={idx}>
            Name: {member.name} <br></br> Nickname: {member.nickname}
          </div>
        )
      })}
      <form onSubmit ={submit}>
        <input 
          type='text'
          onChange = {change}
          value = {formValues.name}
          name = 'name'
          placeholder = 'Add a name'
        />
        <input 
          type='text'
          onChange = {change}
          value = {formValues.nickname}
          name = 'nickname'
          placeholder = 'Add a nickname'
        />
        <button>Submit</button>
      </form>
    </div>
  );
}


