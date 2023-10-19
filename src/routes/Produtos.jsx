import {} from 'react';
import { Link } from 'react-router-dom';
import { ListaProdutos } from '../components/ListaProdutos';
import { GrFormEdit as Editar } from 'react-icons/gr';
import { RiDeleteBin2Fill as Excluir } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import '../estilos/produtos.css'

function Produtos() {
  const navigate = useNavigate();

  const handleLogout = async ()=>{
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('senhaData');
    alert("SAINDO DA SESSÃO");
    navigate('/');

  }
  return (
    <section className='conteiner_produtos'>
      <h1 className='titulo_produtos'>LISTA DE PRODUTOS</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th className='categoria'>ID</th>
              <th className='categoria'>NOME</th>
              <th className='categoria'>DESCRIÇÃO</th>
              <th className='categoria'>PREÇO</th>
              <th className='categoria'>EDITAR / EXCLUIR</th>
            </tr>
          </thead>
          <tbody className='lista_produtos'>
           
            {ListaProdutos.map((item, indice) => (
              <tr key={indice}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td >{item.desc}</td>
                <td >{item.valor}</td>
                <td className='editar'>
                  {' '}
                  
                  <Link to={`/editar/produtos/${item.id}`}>
                    <Editar />
                  </Link>{' '}
                  <Link to={`/excluir/produtos/${item.id}`}>
                    <Excluir />
                    {/*espaço entre os links '' */}
                  </Link>{' '}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="logout">
        <button className='logout_button' onClick={handleLogout}>Logout</button>
      </div>
    </section>

  );
}
export default Produtos;
