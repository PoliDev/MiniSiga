import type { NextPage } from 'next'
import index from './index.module.scss'

const Home: NextPage = () => {
  return (
  <div className={index.divContainer}>
    <form action="">
      <label >Login / CPF: </label>
      <input type="text" id="cpf" name="cpff"></input>

      <label >Senha: </label>
      <input type="text" id="password" name="passwordd"></input>
      <input className={index.buttonSubmit} type="submit" value="Entrar"/>
    </form>
  </div>

  )
}

export default Home
