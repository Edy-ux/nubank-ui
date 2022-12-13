
import { useState } from 'react'
import './input.css'
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
      errorMessage: "Nome deve ter entre 3-20 caracteres, não deve incluir numéros ou qualquer caracter especial!",
      placeholder: "Digite seu nome",
      pattern: '^[A-Za-z ]{4,30}$',
      // required: true,
    },

    {
      id: 2,
      name: "email",
      type: "email",
      errorMessage: "Por favor, insira um e-mail válido!",
      placeholder: "Digite seu email  ",
      required: true,

    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Date",
      required: true,

    },
    {
      id: 4,
      name: "password",
      type: "password",
      errorMessage: "Sua senha deve conter pelo menos 8 caracteres, uma letra maiúscula, uma minúscula, um número e um caracter especial '#@%^_'",
      placeholder: "Senha",
      pattern: '^([A-Z][a-z])(?=.*?[0-9])(?=.*?[#?!@$_%^&*-]).{8,}$',
      required: true,


    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      errorMessage: "Senhas não correspondem",
      placeholder: "Confirme a senha",
      pattern: values.password,
      required: true,

    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cadastrado com sucesso!')
    console.log('values: ', values)
  }
  const onChange = (e) => {
    const { name, value } = e.target
    setValues((prevValue) => Object.assign({}, prevValue, { [name]: value }))
  }


  return (
    <div className="bg-body bg-no-repeat w-screen bg-cover h-screen">
      <div className="flex justify-between items-center md:items-start lg:items-center flex-col lg:flex-row p-16  m-auto">
        <blockquote>
          <h1 className="text-white font-semibold w-96 mb-2 text-3xl md:text-5xl ">Cartão de crédito com anuidade zero. Conta digital prática e sem custos.</h1>
        </blockquote>
        <div className="px-8 py-8  rounded-2xl bg-white w-96">
          <p className="text-3xl font-medium">Com o Nubank, a resposta vem em menos de 1 minuto</p>
          <form onSubmit={handleSubmit}>
            {inputs.map((input, i)=> (
              <FormInput key={input.id} {...input} value={values[i]} onChange={onChange}
              />
            ))}
            
              <button  className="w-full cursor bg-[#9d02d9] text-white text-[18px]  py-3 my-3 rounded-3xl text-semibold ">Cadastrar</button>
            
          </form>
        </div>

      </div>
    </div>
  )
}

export default App
