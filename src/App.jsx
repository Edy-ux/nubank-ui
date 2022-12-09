
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
    <section className="flex  bg-cover bg-fixed justify-between items-center  w-auto h-screen p-10 ">
     
        <h1 className="text-white text-5xl font-semibold w-96 mb-2">Cartão de crédito com anuidade zero. Conta digital prática e sem custos.</h1>

        <div className="px-8 py-8 rounded-2xl bg-white w-96 ">
          <p className="text-3xl font-medium">Com o Nubank, a resposta vem em menos de 1 minuto</p>
          <form onSubmit={handleSubmit}>
            {inputs.map(input => (
              <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} label={input.placeholder}

              />
            ))}
            <div className="text-center">
              <button className="w-full bg-[#9d02d9] text-white text-[18px]  py-3 my-3 rounded-3xl ">Enviar</button>
            </div>
          </form>
        </div>
    
    </section>
  )
}

export default App
