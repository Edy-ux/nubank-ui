
import { useState } from 'react'
import './App.css'
import FormInput from './FormInput'

function App() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
   
    confirmPassword: ''
  })
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      errorMessage: "Nome deve ter entre 3-16 caracteres, e não deve incluir qualquer caracter especial!",
      placeholder: "Nome",
      pattern: 'john',
      required: true

    },

    {
      id: 3,
      name: "email",
      type: "email",
      errorMessage: "Por favor, introduza o seu e-mail",
      placeholder: "Email",
    
      required: true

    },
    {
      id: 4,
      name: "birthday",
      type: "date",
      placeholder: "Date",
      required: true

    },
    {
      id: 5,
      name: "password",
      type: "password",
      errorMessage: "Por favor, insira sua senha",
      placeholder: "Senha",
      required: true

    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      errorMessage: "Senhas não correspondem",
      placeholder: "Confirme a senha",
      required: true

    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const onChange = (e) => {
    const { name, value } = e.target
    setValues((prevValue) => Object.assign({}, prevValue, { [name]: value }))
  }
  console.log(values);
  return (
    <div className="flex justify-center flex-col items-center h-screen" >
      <div className="border border-gray-200 px-20 py-4 rounded">
        <h1 className="text-3xl  text-center font-bold mb-2">Inscrever-se</h1>
        <form onSubmit={handleSubmit}>
          {inputs.map(input => (
            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} label={input.placeholder} />
          ))}
          <div className="text-center">
            <button className="w-full bg-purple-900 text-white text-[18px] font-semibold py-3 mt-1 rounded">Enviar</button>
          </div>

        </form>
      </div>

    </div>
  )
}

export default App