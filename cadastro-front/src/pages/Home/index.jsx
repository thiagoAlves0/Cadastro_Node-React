import './style.css'
import Trash from '../../assets/16qg.svg'
import api from '../../services/api'
import { useEffect, useState } from 'react'

function Home() {
const [users, setUsers]  = useState([])

  async function getUsers(){
  const usersFromApi =  await api.get('/usuarios')

  setUsers(usersFromApi.data)
  }

  useEffect(() => {
    getUsers()
  }, [])


  return (
    <div className="container">
      <form>
        <h1>Cadastro de usuários</h1>
        <input placeholder="Nome" name="nome" type="text" />
        <input placeholder="Idade" name="idade" type="number" />
        <input placeholder="E-mail" name="email" type="email" />
        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>E-mail: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
