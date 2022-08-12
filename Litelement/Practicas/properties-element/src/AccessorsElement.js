import { LitElement, html } from 'lit-element';

export class AccessorsElement  extends LitElement {
  static get properties() {
    return {
        prop: { type: Number }
    };
  }

  set prop(value){
    let oldVal = this._prop;
    this._prop = Math.floor(value);
    this.requestUpdate('prop', oldVal);
  }

  get prop(){
    return this._prop;
  }

  constructor() {
    super();
    this._prop = 0;
  }

  render() {
    return html`
      <p>Prop: ${this.prop}</p>
      <button @click="${() => { this.prop = Math.random()*10}}">Change prop</button>
    `;
  }
}