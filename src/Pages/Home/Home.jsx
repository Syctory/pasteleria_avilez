import React from 'react'
import './Home.css'
import logo from '../../Assets/products/Logo.jpeg'
import introImg_1 from '../../Assets/products/1.jpeg'
import introImg_2 from '../../Assets/products/2.jpeg'
import introImg_3 from '../../Assets/products/3.jpeg'
import introImg_4 from '../../Assets/products/4.jpeg'
import introImg_5 from '../../Assets/products/5.jpeg'
import introImg_6 from '../../Assets/products/6.jpeg'
import introImg_7 from '../../Assets/products/7.jpeg'
import introImg_8 from '../../Assets/products/8.jpeg'
import introImg_9 from '../../Assets/products/9.jpeg'
import introImg_10 from '../../Assets/products/10.jpeg'
import BestSellers from '../../Components/BestSellers/BestSellers'

export default function Home({ addFunc, ProductList, cart }) {

  return (
    <>
      <main className='home'>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">

            <div className="carousel-item active">
              <img 
                src={introImg_1} 
                className="intro-img" 
                alt="Pastel"
              />
            </div>

            <div className="carousel-item">
              <img 
                src={logo} 
                className="intro-img" 
                alt="Pastelería Avilez"
              />
            </div>

            <div className="carousel-item">
              <img 
                src={introImg_2} 
                className="intro-img" 
                alt="Pastel"
              />
            </div>
            <div className="carousel-item">
              <img 
                src={introImg_3} 
                className="intro-img" 
                alt="Pastel"
              />
            </div>
            <div className="carousel-item">
              <img 
                src={introImg_4} 
                className="intro-img" 
                alt="Pastel"
              />
            </div>
            <div className="carousel-item">
              <img 
                src={introImg_5} 
                className="intro-img" 
                alt="Pastel"
              />
            </div>
            <div className="carousel-item">
              <img 
                src={introImg_6} 
                className="intro-img" 
                alt="Pastel"
              />
            </div>
            <div className="carousel-item">
              <img 
                src={introImg_7} 
                className="intro-img" 
                alt="Pastel"
              />
            </div>
            <div className="carousel-item">
              <img 
                src={introImg_8} 
                className="intro-img" 
                alt="Pastel"
              />
            </div>
            <div className="carousel-item">
              <img 
                src={introImg_9} 
                className="intro-img" 
                alt="Pastel"
              />
            </div>
          </div>

          <button 
            className="carousel-control-prev" 
            type="button" 
            data-bs-target="#carouselExampleControls" 
            data-bs-slide="prev"
          >
            <span 
              className="carousel-control-prev-icon" 
              aria-hidden="true"
            ></span>

            <span className="visually-hidden">
              Previous
            </span>
          </button>

          <button 
            className="carousel-control-next" 
            type="button" 
            data-bs-target="#carouselExampleControls" 
            data-bs-slide="next"
          >
            <span 
              className="carousel-control-next-icon" 
              aria-hidden="true"
            ></span>

            <span className="visually-hidden">
              Next
            </span>
          </button>

        </div>

        <section className='about-us'>
          <div className='max-width-about'>
            <div>
              <h1>En Pastelería Avilez, el corazón es nuestro ingrediente principal</h1>
              <h2>Sobre Nosotros</h2>
              <p className='home-text'>Nacimos con una pasión clara: transformar cada celebración y momento cotidiano en una experiencia dulce e inolvidable.
                                       En un mercado lleno de opciones, nuestra meta no es solo ofrecer repostería, sino convertirmos en tu pastelería de confianza,
                                       esa que entra a tu hogar a través del sabor auténtico y el trabajo bien hecho.</p>
              <p className='home-text'>Para nosotros, hornear es un acto de entrega. Ponemos la dedicación, el tiempo y el corazón en cada receta, porque sabemos que detrás de cada pedido hay una historia, una sonrisa o un abrazo por compartir.</p>
            </div>
            <img className='intro-img' src={introImg_1} alt="cake shop" />
          </div>
        </section>
        <section className="values-section">
          <div className="accordion" id="accordionExample">

            {/* Encabezado azul marino */}
            <div className="accordion-intro">
              <div className="max-width-about">
                <h2>
                  Creemos firmemente que un gran pastel no se logra solo con harina y azúcar,
                  sino con los principios que guían nuestra cocina día con día:
                </h2>
              </div>
            </div>

            {/* Acordeón */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Calidad
                </button>
              </h2>

              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                Seleccionamos ingredientes frescos y de primera línea para
                garantizar que cada bocado conserve el sabor artesanal que nos distingue.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Honestidad y Responsabilidad
                </button>
              </h2>

              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                Trabajamos con transparencia en nuestros procesos, 
                respetando las recetas tradicionales y cuidando cada 
                detalle de higiene y elaboración.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Compromiso con nuestra gente
                </button>
              </h2>

              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                Tu satisfacción y el bienestar de nuestro equipo son el
                motor que nos impulsa. Nos comprometemos a entregarte 
                siempre lo mejor, a tiempo y con la calidez que mereces.
                </div>
              </div>
            </div>

          </div>
        </section>
        <section className='best-sellers-home'>
          <BestSellers addFunc={addFunc} ProductList={ProductList} cart={cart} />
        </section>
        <section className='history'>
          <div className="max-width-history">
            <div>
              <h2>Gracias por elegirnos y ser parte de nuestra historia ✨</h2>
              <p className='home-text'>Saber que nos abres las puertas de tu hogar y nos permites estar presentes en tus momentos más dulces es nuestro mayor orgullo.
                                       Tu preferencia no solo impulsa nuestro trabajo, sino que respalda nuestra promesa de ofrecerte siempre productos elaborados con calidad, honestidad y la responsabilidad de darte lo mejor.
                                      ¡Gracias por confiar en Pastelería Avilez! Seguimos horneando cada día para ti con el mismo amor de siempre. ❤️</p>
            </div>
            <img className='history-img' src={introImg_10} alt="decorating a cake" />
          </div>
        </section>
      </main>
    </>
  )
}
