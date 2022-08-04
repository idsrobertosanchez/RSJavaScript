class MiBotonExtendido extends HTMLButtonElement{
    constructor(){
        super();
        this.addEventListener('click', (e)=>{
            console.log('evento click: '+ this.innerHTML);
            alert('MiBotonExtendido');
        })
    }

    //Nombre del elemento a mostrar
    static get ceName() {
        return 'mi-boton-extendido';
    }

    //Busca el atributo 'is'
    get is() {
        return this.getAttribute('is');//variable que se obtiene en el html
    }

    //Buscar el atributo 'is'
    set is(value){
        this.setAttribute('is', value || this.ceName);//variable que se obtiene en el html
    }

}

//scustomElements.define('mi-boton-extendido', MiBotonExtendido, {extends: 'button'})
customElements.define(MiBotonExtendido.ceName, MiBotonExtendido, {extends: 'button'})


const miBotonExtendido2 = document.createElement('button', { is: MiBotonExtendido.ceName })

miBotonExtendido2.textContent = "Boton 2";
document.body.appendChild(miBotonExtendido2);

const miBotonExtendido3 = document.createElement('button', { is: MiBotonExtendido.ceName });
miBotonExtendido3.textContent = "Boton 3";
document.querySelector('#container').appendChild(miBotonExtendido3);