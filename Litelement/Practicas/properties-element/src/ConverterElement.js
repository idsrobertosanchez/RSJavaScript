import { LitElement, html } from 'lit-element';

export class ConverterElement  extends LitElement {
  static get properties() {
    return {
        myProp: true, 
            converter: {
                toAttibute(value) {
                    console.log('myProp\'s toAttribute.');
                    console.log('Processing: ', value, typeof(value));
                    let retVal = String(value);
                    console.log('Returning: ', retVal, typeof(retVal));
                    return retVal;
                },

                fromAttribute(value){
                    console.log('myProp\'s fromAttribute.');
                    console.log('Processing: ', value, typeof(value));
                    let retVal = Number(value);
                    console.log('Returning: ', retVal, typeof(retVal));
                    return retVal;
                }
            },
        theProp: {
            reflect: true,
            converter(value) {
                console.log('theProp\'s converter.');
                    console.log('Processing: ', value, typeof(value));
                    let retVal = Number(value);
                    console.log('Returning: ', retVal, typeof(retVal));
                    return retVal;
            }
        }
    };
  }

  constructor() {
    super();
    this.myProp = 'myProp';
    this.theProp = 'theProp';
  }

  attributeChangedCallback(name, oldVal, newVal){
    super.attributeChangedCallback(name, oldVal, newVal);
  }

  render() {
    return html`
      <p>myProp: ${this.myProp} tipo: ${typeof(this.myProp)}</p>
      <p>myProp: ${this.theProp} tipo: ${typeof(this.theProp)}</p>

      <button @click="${this.changeProperties}">Change Properties</button>
      <button @click="${this.changeAttributes}">Change Attribute</button>
    `;
  }

  changeAttributes(){
    let randomString = Math.floor(Math.random()*100).toString();
    this.setAttribute('myprop', 'myprop '+randomString);
    this.setAttribute('theprop', 'theprop '+randomString);
    this.requestUpdate();
  }

  changeProperties(){
    let randomString = Math.floor(Math.random()*100).toString();
    this.myProp = 'myProp '+ randomString;
    this.theProp = 'theProp '+ randomString;
  }
}