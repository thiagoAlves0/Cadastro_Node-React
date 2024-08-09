import "./style.css";
import Trash from "../../assets/16qg.svg";

function Home() {
  const users = [
    {
      id: "auwi119qia",
      name: "thiago",
      age: 24,
      email: "thiago.com",
    },
    {
      id: "auwi1990719qia",
      name: "joao",
      age: 13,
      email: "joao.com",
    },
  ];

  return (
    <div className="container">
      <form>
        <h1>Cadastro de usuários</h1>
        <input name="nome" type="text" />
        <input name="idade" type="number" />
        <input name="email" type="email" />
        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id}>
          <div>
            <p>Nome: {user.name}</p>
            <p>Idade: {user.age}</p>
            <p>Imail: {user.email}</p>
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
