import '../css/componentes.css';
// import webpacklogo from '../assets/img/webpack-logo.png'

//export palabra reservada para traer las funciones de otro lugar 
export const saludar = (nombre ) => {
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}, Bienvenido! configuracion del webpack start`;

    document.body.append(h1);

    //img
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append(img);


}

