import {} from 'react'
import '../estilos/Erro.css'
import Nav from "../components/Nav"

function Error (){
  return(
    <>
    <Nav />
    <section className='conteudo_erro'>
    <h1 className='erro'>404</h1>
    <h1 className='sub-erro'>Página não encontrada.</h1>
    </section>
    </>
  )
}
export default Error