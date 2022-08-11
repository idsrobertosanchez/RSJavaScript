import { html, css, LitElement } from 'lit';

export class StyleLitelement extends LitElement {
  
  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
    
    `;
  }
}
