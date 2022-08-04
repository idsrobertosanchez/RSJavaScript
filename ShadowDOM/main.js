class MiSaludo extends HTMLElement{
    constructor(){
        //Obtener la unica eqtiqueta 'template'
        const tpl = document.querySelector('template');
        //Clono su contenido y se crea una instancia del documento fragment
        const tplInst = tpl.content.cloneNode(true);

        super();//invoca el constructor de la clase
        //Se crea un shado dom para las instacias del documento fragment
        this.attachShadow({mode: 'open'});
        //Y se agrega el template dentro del shadow DOM usando el elemento raiz 'shadowRoot'
        this.shadowRoot.appendChild(tplInst);

    }
}

//Se registra el custom element para poder ser utilizado declarativamente en el HTML
//o imperativamente mediante JS
customElements.define('mi-saludo', MiSaludo);