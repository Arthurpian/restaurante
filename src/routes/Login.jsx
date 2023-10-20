import { useRef } from 'react';
import Pedido from './Pedido';
import '../estilos/Login.css'
import Inserir from './Inserir'

import dia_mexico from '../assets/Dia_mortos.jpg'

function Login() {
 
  const user = useRef();
  const password = useRef();

  const getUser = sessionStorage.getItem('userData');

  const getSenha = sessionStorage.getItem('senhaData');


  const handleSubmit = () => {
    if (user.current.value === 'admin' && password.current.value === '12345') {
      let token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);
      sessionStorage.setItem('userData', 'admin');
      sessionStorage.setItem('senhaData', token);
    } else {
      alert('usuário e senha inválidos !!!');
    }
  };



  return (
    <section>
    
      {getUser && getSenha ? (
        <Pedido />
      ) : (
      
        <div className="login">
          <form className='form' onSubmit={handleSubmit}>
            <h1 className='heading'>Login</h1>
            <div className="dados">
              <p className='Login_login'>
                USUÁRIO: <input type="text" ref={user} />
              </p>
              <br />
              <p className='Login_login'> 
              SENHA: <input type="password" ref={password} />
              </p>
            </div>
            <br />
            <div className="button_login">
              <input className='Login_button' type="submit" value="Login" />

            </div>
          </form>
        </div>
      )}
      <div className="mexico">
            <div className="img_conteudo">
                <img src={dia_mexico} alt='dia_mexico'></img>
            </div>
            <div className="conteudo">
                <h1 className='titulo_texto'>Venha Celebrar o Dia dos Mortos em Nosso Restaurante Mexicano!</h1>
                <p>É com grande alegria que convidamos você a se juntar a nós em uma celebração única e cultural: o Dia dos Mortos, ou Día de los Muertos, uma das festas mais icônicas do México!<br></br>
                    O Dia dos Mortos é uma tradição que tem raízes profundas na cultura mexicana, honrando os entes queridos que já partiram para o além. Embora possa parecer uma celebração sombria, é, na verdade, uma festa colorida, cheia de vida e alegria. É um momento para celebrar e lembrar aqueles que se foram, com amor, respeito e saudade.<br></br>
                    No nosso restaurante mexicano, estaremos honrando essa tradição da maneira mais autêntica possível. Decoraremos nosso espaço com altares coloridos, oferendas, flores, e as famosas calacas (caveiras decoradas).</p>
            </div>
        </div>
      <Inserir />
    </section>
    
  );
}

export default Login;
