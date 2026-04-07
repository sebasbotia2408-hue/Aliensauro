const idiomaActual = document.getElementById('idioma');
const ListaIdioma = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');

const texto1= document.getElementById('texto1');
const parrafo1= document.getElementById('parrafo-info-1');
const parrafo2= document.getElementById('parrafo-info-2');
const tituloinfo = document.getElementById('titulo-info');
const titulo1 = document.getElementById('nombre-info-1');
const titulo2 = document.getElementById('nombre-info-2');
const titulo_final = document.getElementById('titulo_final');
const Telefono = document.getElementById('Telefono');
const boton1 = document.getElementById('boton-info-1');
const boton2 = document.getElementById('boton-info-2');
const boton3 = document.getElementById('boton-info-3');
const boton4 = document.getElementById('boton-info-4');
const waMensaje = document.getElementById('wa-mensaje');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');

idiomaActual.addEventListener('click',()=>{
    ListaIdioma.classList.toggle('toggle');
});

const opcionesArray = Array.from(idiomas);

opcionesArray.forEach((opcion) => {
    opcion.addEventListener('click', () => {
        const idioma = opcion.getElementsByTagName ('span') [0].textContent.toLowerCase();
        establecerIdioma(idioma);
    });
})

function establecerIdioma(idioma) {
    idiomaActual.getElementsByTagName('img')[0].src = `banderas/${idioma}.svg`;
    switch (idioma) {
        case 'latino':
            tituloinfo.textContent = 'Aliensauro';
            texto1.textContent = 'Hola Soy aliensauro, un diseñador web apasionado por crear experiencias digitales únicas y atractivas. Con una sólida formación en diseño gráfico y desarrollo web, me especializo en transformar ideas en sitios web funcionales y visualmente impactantes. Mi enfoque se centra en la creatividad, la usabilidad y la innovación, buscando siempre superar las expectativas de mis clientes. Ya sea que necesites un sitio web para tu negocio, estoy aquí para ayudarte a dar vida a tu empresa ofreciendote los dos siguientes planes:  ';
            titulo1.textContent = 'Plan presencia total';
            img1.style.display = 'block';
            img2.style.display = 'none';
            img3.style.display = 'block';
            img4.style.display = 'none';

            parrafo1.textContent = `
                Consigue tu plan ahora mismo desde solo 120.000 COP al mes o 1.350.000 COP al año dandole click al siguiente botón y disfruta de una página web de presencia
            `;
            titulo2.textContent = 'Plan expansión total';
            parrafo2.textContent = `   
                Consigue tu plan ahora mismo desde solo 250.000 COP al mes o 3.140.000 COP al año dandole click al siguiente botón y disfruta de una página web de expansion
            `;
            waMensaje.textContent = '¡Habla con nosotros en WhatsApp!';
            boton1.textContent = 'Contrata mes';
            boton2.textContent = 'Contrata año';
            boton3.textContent = 'Contrata mes';
            boton4.textContent = 'Contrata año';
            Telefono.textContent = 'Teléfono';
            titulo_final.textContent = '© Aliensauro | Diseño Web';
            break;

        case 'usa':
            tituloinfo.textContent = 'Aliensauro';
            texto1.textContent = 'Hello, I am Aliensauro, a passionate web designer dedicated to creating unique and engaging digital experiences. With a strong background in graphic design and web development, I specialize in transforming ideas into functional and visually impactful websites. My approach focuses on creativity, usability, and innovation, always striving to exceed my clients\' expectations. Whether you need a website for your business, I am here to help you bring your company to life by offering you the following two plans:';
            titulo1.textContent = 'Plan presence total';
            img1.style.display = 'none';
            img2.style.display = 'block';
            img3.style.display = 'none';
            img4.style.display = 'block';
            parrafo1.textContent = `
                Get your plan right now from only 120,000 COP per month or 1,350,000 COP per year by clicking the following button and enjoy a presence website
            `;
            titulo2.textContent = 'Plan expansion total';
            parrafo2.textContent = `
                Get your plan right now from only 250,000 COP per month or 3,140,000 COP per year by clicking the following button and enjoy an expansion website
            `;
            waMensaje.textContent = 'Chat with us on WhatsApp!';
            boton1.textContent = 'Hire Monthly';
            boton2.textContent = 'Hire   Yearly';
            boton3.textContent = 'Hire Monthly';
            boton4.textContent = 'Hire   Yearly';
            Telefono.textContent = 'Phone';
            titulo_final.textContent = '© Aliensauro | Web Design';

            break;

        default:
            tituloinfo.textContent = 'Aliensauro';
            texto1.textContent = 'Hola Soy aliensauro, un diseñador web apasionado por crear experiencias digitales únicas y atractivas. Con una sólida formación en diseño gráfico y desarrollo web, me especializo en transformar ideas en sitios web funcionales y visualmente impactantes. Mi enfoque se centra en la creatividad, la usabilidad y la innovación, buscando siempre superar las expectativas de mis clientes. Ya sea que necesites un sitio web para tu negocio, estoy aquí para ayudarte a dar vida a tu empresa.  ';
            titulo1.textContent = 'Plan presencia total';
            parrafo1.textContent = `
                Programador de la página y el juego
            `;
            titulo2.textContent = 'Plan expansión total';
            parrafo2.textContent = `   
                Diseño de imagenes y word
            `;
            Telefono.textContent = 'Teléfono';
            titulo_final.textContent = '© Aliensauro | Diseño Web';
            break;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    switch (navigator.language) {
        case 'es-ES':
            establecerIdioma('latino');
            break;
        case 'en-US':
            establecerIdioma('usa');
            break;
        default:
            establecerIdioma('latino');
            break;
    }
});
