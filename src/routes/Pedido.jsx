import { useNavigate } from 'react-router-dom';

function Pedido() {
    const navigate = useNavigate();

    const handleLogout = async ()=>{
      sessionStorage.removeItem('userData');
      sessionStorage.removeItem('senhaData');
      alert("SAINDO DA SESSÃO");
      navigate('/');
  
    }
    return(
        <>
        <div className="logout">
            <button className='logout_button' onClick={handleLogout}>Logout</button>
        </div>
        </>
    )
}

export default Pedido