import { assessorRoutesModule } from './routes/assessor/asessor-routes.js'

const changeView = (hashUrl) => {
    window.location.hash = hashUrl;
    const seccion = document.getElementById('seccion');
    seccion.innerHTML = '';
    assessorRoutesModule(hashUrl);
}


export { changeView };