import { useState } from 'react';
import { ListaProdutos } from '../components/ListaProdutos';
import { useNavigate } from 'react-router-dom';
import '../estilos/Inserir.css'

function Inserir() {
  const navigate = useNavigate();

  let novoId = ListaProdutos[ListaProdutos.length - 1].id + 1;

  const [produto, setProduto] = useState({
    id: novoId,
    nome: '',
    desc: '',
    valor: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    ListaProdutos.push(produto);
    navigate('/produtos');
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  return (
    <section>
      <h1 className='titulo_insirir'>Cadastro de Produtos</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend className='titulo_insirir'>PRODUTO</legend>
          <p>
            <label className="sub_insirir" htmlFor="idNome"> Nome do Produto:</label>
            <input
              type="text"
              name="nome"
              id="idNome"
           
              value={produto.nome}
              onChange={handleChange}
            />
          </p>
          <p>
            <label className="sub_insirir" htmlFor="idDesc">Descrição Produto:</label>
            <input
              type="text"
              name="desc"
              id="idDesc"
              
              value={produto.desc}
              onChange={handleChange}
            />
          </p>
          <p>
            <label className="sub_insirir" htmlFor="idValor"> Valor do Produto:</label>
            <input
              type="text"
              name="valor"
              id="idValor"
              
              value={produto.valor}
              onChange={handleChange}
            />
          </p>
          <p className='button_insirir_first'>
            <button  className="button_insirir" type="submit">
              CADASTRAR
            </button>
          </p>
        </fieldset>
      </form>
    </section>
  );
}
export default Inserir;
