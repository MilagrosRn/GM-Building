import { changeView } from './router-module.js';

const init = () => {
    changeView(window.location.hash);
    window.addEventListener('hashchange', () => {
        changeView(window.location.hash)
    });
};

window.addEventListener('load', init);


/*class Router {
    constructor(){
        window.addEventListener('hashchange',e  =>
            this.onRouteChange(e));
    }

    onRouteChange(event){
        const hashLocation = window.location.hash.substring(1)
        console.log(hashLocation);    
        console.log(event);
        }
}
new Router();*/