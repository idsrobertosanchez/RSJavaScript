import { LitElement, html } from 'lit-element';

export class HasChangedElement  extends LitElement {
  static get properties() {
    return {
        myProp: { type: Number , 
            hasChanged(newVal, oldVal) {
                if(newVal > oldVal){
                    console.log(`${newVal} > ${oldVal} hasChanged: true.`);
                    return true;
                }else{
                    console.log(`${newVal} <= ${oldVal} hasChanged: false.`);
                    return false;
                }
            }
        }
    };
  }

  constructor() {
    super();
    this.myProp = 1;
  }

  render() {
    return html`
      <p>myProp: ${this.myProp}</p>
      <button @click="${this.getNewVal}">Get new value</button>
    `;
  }

  updated(){
    console.log('updated');
  }

  getNewVal(){
    let newVal = Math.floor(Math.random()*10);
    this.myProp = newVal;
  }
}