import React, { useEffect, useRef,useState } from 'react';
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import './App.css';

function App() {
  type SaladState = {
    cesar: boolean;
    tropical: boolean;
    suculenta: boolean;
  };
  
  const [showDescription, setShowDescription] = useState<SaladState>({
    cesar: false,
    tropical: false,
    suculenta: false,
  });
  
  const toggleDescription = (salad: keyof SaladState) => {
    setShowDescription((prevState) => ({
      ...prevState,
      [salad]: !prevState[salad],
    }));
  };

  // Custom hook for scroll-triggered animations
  const useScrollAnimation = (animationClass: string) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 } // Trigger when 10% of element is visible
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);

    return {
      ref,
      className: isVisible ? `${animationClass}` : 'opacity-0'
    };
  };

  return (
    <div className="bg-green-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <header
        {...useScrollAnimation('animate-fade-in-down')}
        className="bg-gradient-to-r from-green-500 to-green-600 text-white py-[19rem]"
        style={{
          backgroundImage: "url('./fondoMonstera.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
  <div className="container mx-auto px-4 text-center">
    <h1 className="text-5xl md:text-7xl font-bold uppercase mb-4 animate-fade-in-down">
      La Monstera
    </h1>
    <p className="text-xl md:text-2xl italic animate-fade-in-up">
      Ensaladas frescas y saludables con amor
    </p>
  </div>
</header>


      {/* Vision & Mission Section */}
      <section 
  {...useScrollAnimation('animate-fade-in-left')}
  className="py-20 ml-8"
>
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8 animate-fade-in-left">
        <div>
          <h2 className="text-9xl font-bold text-green-600 mb-4">Nuestra Visión</h2>
          
          <p className="text-lg leading-relaxed font-semibold text-green-900 text-right">
            Ser la opción preferida para quienes buscan una alimentación saludable, sostenible y deliciosa. Nuestro compromiso no solo es ofrecer productos frescos, sino también hacerlo de manera responsable con el medio ambiente.
          </p>
          <p className="text-lg leading-relaxed font-semibold text-green-900 text-right">
            Queremos crear un impacto positivo, ayudando a nuestros clientes a tomar decisiones alimenticias más conscientes que beneficien tanto su salud como al entorno. A través de la innovación, buscamos transformar la manera en que las personas perciben la comida saludable.
          </p>
          <p className="text-lg leading-relaxed font-semibold text-green-900 text-right">
            Aspiramos a ser más que una opción alimenticia; queremos ser una fuente de inspiración para llevar un estilo de vida equilibrado y sostenible.
          </p>
        </div>
      </div>

      <div className="flex justify-center animate-fade-in-bottom relative">
  
  <div>
    <img
      src="./vision.png"
      alt="Visión de la empresa"
      className="rounded-lg shadow-lg max-w-full"
    />
  </div>
</div>

    </div>
  </div>
</section>


<section 
        {...useScrollAnimation('animate-fade-in-left')}
        className="py-20 mr-8"
      >
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      <div className="flex justify-center animate-fade-in-bottom">
        <div>
          <img
            src="./mision.png"
            alt="Misión de la empresa"
            className="rounded-lg shadow-lg max-w-full"
          />
        </div>
      </div>
      <div className="space-y-8 animate-fade-in-left">
        <div>
          <h2 className="text-9xl font-bold text-green-600 mb-4">Nuestra Misión</h2>
          

          <p className="text-lg leading-relaxed font-semibold text-green-900">
            Ofrecer ensaladas frescas hechas con ingredientes de calidad y un toque único de creatividad. Cada plato es una obra de arte que refleja nuestro compromiso con la frescura, el sabor y el bienestar.
          </p>
          <p className="text-lg leading-relaxed font-semibold text-green-900">
            Nos dedicamos a crear experiencias únicas para nuestros clientes, brindándoles una variedad de opciones que no solo satisfacen su paladar, sino también su deseo de cuidar su salud de manera deliciosa.
          </p>
          <p className="text-lg leading-relaxed font-semibold text-green-900">
            Queremos ser el puente entre la conveniencia y la salud, ofreciendo opciones rápidas, accesibles y nutritivas que se adapten a las necesidades de todos, siempre con un enfoque en la calidad de los ingredientes.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Menu Section */}
<section className="bg-gradient-to-b from-yellow-50 to-green-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-green-700 text-center mb-12">
            MENU
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ensalada César */}
            <div className="group bg-white rounded-xl shadow-xl p-6 transform hover:-translate-y-2 transition-all duration-300">
            <div className="overflow-hidden rounded-lg mb-4 flex justify-center items-center">
              <img
                src="./cesar.jpg"
                alt="Ensalada César"
                className="w-70 h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>

              <h3 className="text-2xl font-bold text-green-600 mb-2">Ensalada César</h3>
              <p className="text-gray-700 text-lg mb-4">Ch: $65 | Gd: $115</p>
              <button
                className="w-full py-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transform hover:scale-105 transition-all duration-300"
                onClick={() => toggleDescription("cesar")}
              >
                {showDescription.cesar ? "Ocultar" : "Saber más"}
              </button>
              {showDescription.cesar && (
                <div className="mt-4 p-4 bg-green-50 rounded-lg animate-fade-in">
                  <p className="text-gray-700">
                    Ingredientes: Mix de lechugas, pollo a la plancha, aderezo cesar, panela, crotones, jitomate cherry, queso seco.
                    <br />
                    Extras: Pollo (+$20), Complementos (+$5 c/u)
                  </p>
                </div>
              )}
            </div>

            {/* Ensalada Frescura Tropical */}
            <div className="group bg-white rounded-xl shadow-xl p-6 transform hover:-translate-y-2 transition-all duration-300">
            <div className="overflow-hidden rounded-lg mb-4 flex justify-center items-center">
                <img
                  src="./mango.jpg"
                  alt="Frescura Tropical"
                  className="w-64 h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">Frescura Tropical</h3>
              <p className="text-gray-700 text-lg mb-4">Ch: $65 | Gd: $115</p>
              <button
                className="w-full py-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transform hover:scale-105 transition-all duration-300"
                onClick={() => toggleDescription("tropical")}
              >
                {showDescription.tropical ? "Ocultar" : "Saber más"}
              </button>
              {showDescription.tropical && (
                <div className="mt-4 p-4 bg-green-50 rounded-lg animate-fade-in">
                  <p className="text-gray-700">
                    Ingredientes: Mix de lechugas, pasta, mango, pollo a la plancha, vinagreta de miel, almendras.
                    <br />
                    Extras: Pollo (+$20), Complementos (+$5 c/u)
                  </p>
                </div>
              )}
            </div>

            {/* Ensalada Suculenta */}
            <div className="group bg-white rounded-xl shadow-xl p-6 transform hover:-translate-y-2 transition-all duration-300">
            <div className="overflow-hidden rounded-lg mb-4 flex justify-center items-center">
                <img
                  src="./manzana.jpg"
                  alt="Ensalada Suculenta"
                  className="w-64 h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">Ensalada Suculenta</h3>
              <p className="text-gray-700 text-lg mb-4">Ch: $65 | Gd: $115</p>
              <button
                className="w-full py-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transform hover:scale-105 transition-all duration-300"
                onClick={() => toggleDescription("suculenta")}
              >
                {showDescription.suculenta ? "Ocultar" : "Saber más"}
              </button>
              {showDescription.suculenta && (
                <div className="mt-4 p-4 bg-green-50 rounded-lg animate-fade-in">
                  <p className="text-gray-700">
                    Ingredientes: Mix de lechugas, Nuez, manzana, uva, vinagreta haliana, arándano deshidratado y panela.
                    <br />
                    Extras: Pollo (+$20), Complementos (+$5 c/u)
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 py-10">
  <div className="container mx-auto px-4">
    {/* Complementos */}
    <div className="text-left bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-7xl font-bold text-green-600 mb-4">
        Complementos
      </h3>
      <ul className="list-none space-y-4">
        <li className="text-lg text-gray-800 flex items-center gap-2 hover:bg-green-100 p-2 rounded-lg transition-all duration-300">
          <span>🍴</span> Aderezo César
        </li>
        <li className="text-lg text-gray-800 flex items-center gap-2 hover:bg-green-100 p-2 rounded-lg transition-all duration-300">
          <span>🥗</span> Aderezo Ranch
        </li>
        <li className="text-lg text-gray-800 flex items-center gap-2 hover:bg-green-100 p-2 rounded-lg transition-all duration-300">
          <span>🍯</span> Vinagreta de miel
        </li>
        <li className="text-lg text-gray-800 flex items-center gap-2 hover:bg-green-100 p-2 rounded-lg transition-all duration-300">
          <span>🍝</span> Vinagreta italiana
        </li>
        <li className="text-lg text-gray-800 flex items-center gap-2 hover:bg-green-100 p-2 rounded-lg transition-all duration-300">
          <span>🍇</span> Arándano deshidratado
        </li>
        <li className="text-lg text-gray-800 flex items-center gap-2 hover:bg-green-100 p-2 rounded-lg transition-all duration-300">
          <span>🌰</span> Almendra
        </li>
        <li className="text-lg text-gray-800 flex items-center gap-2 hover:bg-green-100 p-2 rounded-lg transition-all duration-300">
          <span>🌰</span> Nuez
        </li>
        <li className="text-lg text-gray-800 flex items-center gap-2 hover:bg-green-100 p-2 rounded-lg transition-all duration-300">
          <span>🍝</span> Pasta
        </li>
        <li className="text-lg text-gray-800 flex items-center gap-2 hover:bg-green-100 p-2 rounded-lg transition-all duration-300">
          <span>🍗</span> Proteína: Ch (100 g) | Gd (150 g). Extra: (100 g)
        </li>
      </ul>
      <p className="mt-6 text-gray-700 italic text-lg">
        Extras: Pollo (+$20), Complementos adicionales (+$5 c/u)
      </p>
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-12">Contáctanos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <MapPin className="w-8 h-8 text-green-500 mx-auto mb-4" />
              <p className="text-lg font-semibold">Entrega a domicilio</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Clock className="w-8 h-8 text-green-500 mx-auto mb-4" />
              <p className="text-lg font-semibold">Lunes a Jueves</p>
              <p>8:00 am a 12:00 p.m</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Phone className="w-8 h-8 text-green-500 mx-auto mb-4" />
              <p className="text-lg font-semibold">+52 3421091680</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Mail className="w-8 h-8 text-green-500 mx-auto mb-4" />
              <p className="text-lg font-semibold">rogelioaldair14@gmail.com</p>
            </div>
          </div>

          <div className="mt-12 space-x-6">
            <a
              href="https://www.facebook.com/share/152eqhvnKk/"
              className="inline-block px-6 py-3 bg-white rounded-lg shadow-md text-green-600 font-semibold hover:text-green-700 hover:shadow-lg transition-all duration-300"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/ensaladas_la_monstera/"
              className="inline-block px-6 py-3 bg-white rounded-lg shadow-md text-green-600 font-semibold hover:text-green-700 hover:shadow-lg transition-all duration-300"
            >
              Instagram
            </a>
            <a
              href="#"
              className="inline-block px-6 py-3 bg-white rounded-lg shadow-md text-green-600 font-semibold hover:text-green-700 hover:shadow-lg transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-600 to-green-700 text-white py-3">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">© 2025 La Monstera. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;