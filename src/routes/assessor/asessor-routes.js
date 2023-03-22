import viewsModule from "../../views/views-module.js";

const assessorRoutesModule = (uri) => {
    //ejemplo
    const node = document.createElement("p");
    const textnode = document.createTextNode("404 page ");
    node.appendChild(textnode);

    //
    switch (uri) {
        case '':
        case ' ':
        case '#':
        case '#/':
        case '#/home': return seccion.appendChild(viewsModule.views.home());
        default: return seccion.appendChild(node);  
    }
}


export { assessorRoutesModule }