class MiMensaje extends HTMLElement{
    constructor(){
        super();
        this.addEventListener('click', function(e){
            alert('Click mensaje');
        })
        console.log('constructor: Cuando el elemento es creado');
    }

    //propiedad para escuchar solo los atributos definidos en el earreglo usando
    //attributeChangedCallback
    static get observedAttributes(){
        return ['msj'];
    }

    //callback cuando se inserta el elemento en el dom
    connectedCallback(){
        console.log('connectedCallback: Cuando el elemento es insertado en el documento');
    }

    disconnectedCallback(){
        alert('disconnected: Cuando el elemento es eliminado del documento')
    }

    adoptedCallback(){
        alert('adoptedCallback: Cuando el elemento es adoptado por otro documento')
    }

    //Cuando un atributo es modificado, solo llamado en atributos observados definidos en 
    //la propiedad observedAttributes
    attributeChangedCallback(attrName, oldVal, newVal){
        console.log('attributeChangedCallback: Cuando cambia un atributo');
        if(attrName === 'msj'){
            this.pintarMensaje(newVal);
        }
    }

    //Pinta el mensaje que se declara en el atibuto 'msj'
    pintarMensaje(msj){
        this.innerHTML = msj + ' ';
    }

    //Acceso a los atributos del DOM
    //propiedad 'msj' sincronizada con el atributo 'msj'
    get msj(){
        return this.getAttribute('msj');
    }

    set msj(val){
        this.setAttribute('msj', val);
    }
}

customElements.define('mi-mensaje', MiMensaje);

let miMensaje = document.createElement('mi-mensaje');
miMensaje.msj = 'Otro mensaje';
document.body.appendChild(miMensaje);

//Tambien puedes crear un elemento con el operado 'new'
let tercerMensaje = new MiMensaje();
tercerMensaje.msj = 'TercerMensaje';
document.body.appendChild(tercerMensaje);