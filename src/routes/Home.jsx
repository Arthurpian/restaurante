import { } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

import slide_image_1 from '../assets/comida01.jpg'
import slide_image_2 from '../assets/comida02.jpg'
import slide_image_3 from '../assets/comida03.jpg'
import slide_image_4 from '../assets/comida04.jpg'
import slide_image_5 from '../assets/comida05.jpg'
import slide_image_6 from '../assets/comida06.jpg'

import mexico from '../assets/mexico.jpg'


import '../estilos/Home.css'

function Home (){
    return(
     <>
     <div className="container">
        <h1 className="heading">
            Pratos
        </h1>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        >
           
           <SwiperSlide>
                <div className="slide-content">
                    <img src={slide_image_1} alt="imagem_1" />
                    <h1 className='titulo'>Mole poblano</h1>
                    <h3 className='descri'>O mole é um prato típico muito saboroso e picante</h3>
                    <h4 className='valor'>R$129,30</h4>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="slide-content">
                    <img src = {slide_image_2} alt='imagem_2'/>
                    <h1 className='titulo'>chili com carne</h1>
                    <h3 className='descri'>Um tipo de guisado picante</h3>
                    <h4 className='valor'>R$129,30</h4>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="slide-content">
                    <img src = {slide_image_3} alt='imagem_3'/>
                    <h1 className='titulo'>machaca e chilorio</h1>
                    <h3 className='descri'>Usados como recheio de burritos</h3>
                    <h4 className='valor'>R$129,30</h4>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="slide-content">
                    <img src = {slide_image_4} alt='imagem_4'/>
                    <h1 className='titulo'>Quesadilla</h1>
                    <h3 className='descri'>Tortilla grelhada com muito, muito queijo e bem recheada</h3>
                    <h4 className='valor'>R$129,30</h4>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="slide-content">
                    <img src = {slide_image_5} alt='imagem_5'/>
                    <h1 className='titulo'>tortilla</h1>
                    <h3 className='descri'>são pães parecidos com panquecas</h3>
                    <h4 className='valor'>R$129,30</h4>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="slide-content">
                <img src = {slide_image_6} alt='imagem_6'/>
                <h1 className='titulo'>jericalla</h1>
                    <h3 className='descri'>Um pudim de leite super cremoso</h3>
                    <h4 className='valor'>R$129,30</h4>
                </div>
            </SwiperSlide>
        </Swiper>

        <div className="mexico">
            <div className="img_conteudo">
                <img src={mexico} alt='mexico'></img>
            </div>
            <div className="conteudo">
                <h1 className='titulo_texto'>Mexico</h1>
                <p>O México é amplamente conhecido como o país da comida picante e, mais do que isso, é frequentemente considerado a capital mundial da culinária picante. A paixão dos mexicanos por sabores intensos e temperos ardentes é uma parte fundamental de sua cultura gastronômica e desempenha um papel significativo em sua identidade culinária. <br></br>
                    A culinária mexicana é uma celebração de ingredientes frescos e coloridos, que são habilmente combinados com uma ampla variedade de pimentas e especiarias para criar pratos que explodem com sabor e calor. A pimenta é um elemento essencial na maioria dos pratos mexicanos, desde os molhos como o famoso molho de pimenta conhecido como "salsa" até os pratos tradicionais como os tamales, tacos, enchiladas, e guacamole. Pimentas como jalapeños, serranos, habaneros e muitas outras são usadas para dar aquele toque picante que torna a comida mexicana tão inconfundível.<br></br>
                    A riqueza da comida picante no México não se limita apenas à intensidade do calor, mas também à complexidade dos sabores. Os cozinheiros mexicanos são mestres em equilibrar o picante com outros sabores, como o doce, o ácido e o salgado, resultando em pratos que são uma verdadeira explosão de sensações na boca. O uso de ingredientes regionais e técnicas tradicionais aprimorou a arte de criar refeições picantes e deliciosas.<br></br>
                    Além disso, a comida picante no México não é apenas sobre o calor, mas também sobre a diversidade. Cada região do país tem suas próprias variações de pratos picantes, muitos dos quais refletem a herança cultural única de suas comunidades. Por exemplo, a região de Yucatán é famosa por seu uso de achiote e pimenta habanero em pratos como o cochinita pibil, enquanto a comida do norte do México se destaca pelo uso de carne grelhada temperada com molhos de pimenta. A diversidade de pratos picantes no México é verdadeiramente impressionante.<br></br>
                    Para quem visita o México, experimentar a variedade de comidas picantes é uma experiência inesquecível. Não importa se você é um amante ávido de comida picante ou apenas alguém que gosta de dar um toque de emoção ao paladar, o México oferece uma ampla gama de opções para satisfazer todos os gostos. Portanto, não é de surpreender que o México seja reverenciado como a cidade da comida picante, um lugar onde o calor e o sabor se encontram de maneira extraordinária, proporcionando uma verdadeira festa para os sentidos.</p>
            </div>
        </div>
     </div>
     </>
)}

export default Home

