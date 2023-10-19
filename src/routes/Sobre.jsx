import Logo from '../assets/Logo1.png';
import "../estilos/Sobre.css"
import restaurante from '../assets/restaurante.jpg'

function Sobre(){
    return(
        <>
          <div className="logo_sobre">
            <img src={Logo} alt="Logo"></img>
            <h1>La Morte</h1>
          </div>

          <div className="mexico">
            <div className="img_conteudo">
                <img src={restaurante} alt='mexico'></img>
            </div>
            <div className="conteudo">
                <h1 className='titulo_texto'>Quem Somos</h1>
                <p className='sobre_sub'> Há mais de uma década, o Restaurante La Morte tem se destacado na cena culinária local, proporcionando uma experiência única e autêntica da vibrante culinária mexicana. Inspirados pela rica tradição gastronômica do México e pelo fascinante Dia dos Mortos, nosso restaurante é o destino ideal para os amantes de pratos picantes e sabores intensos.<br></br>
                    Fundado há mais de 10 anos, o Restaurante La Morte surgiu da paixão por celebrar a herança culinária do México e honrar a tradição do Dia dos Mortos. Essa festa cultural única é uma homenagem aos entes queridos que já se foram, marcada por cores vibrantes, altares decorados e comidas incrivelmente saborosas. Inspirados por esse evento, decidimos criar um local que não apenas servisse pratos picantes, mas que também celebrasse a riqueza cultural do México.<br></br>
                    Nosso restaurante é renomado por ser o lugar onde os amantes de sabores ardentes encontram a satisfação perfeita. Oferecemos uma ampla variedade de pratos picantes, desde molhos de pimenta exclusivos até pratos tradicionais, como tamales, tacos, enchiladas e guacamole. Nossa paixão por ingredientes frescos, combinados com uma seleção de pimentas e especiarias, cria pratos que são verdadeiras explosões de sabor e calor.<br></br>
                </p>
            </div>
        </div>
        </>
    )
}

export default Sobre