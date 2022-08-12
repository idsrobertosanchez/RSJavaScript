import { html, LitElement } from 'lit';

export class LifecycleElement extends LitElement {
  constructor() {
    super();
    this.title = 'No title';
    this.icon = undefined;
  }

  static get properties() {
    return {
      title: { type: String },
      icon: { type: String },
    };
  }

  render() {
    console.log('Render');
    return html`
      <h1>Title is: ${this.title}</h1>
      <h3>Icon is: ${this.icon}</h3>
    `;
  }

  _enqueueUpdate() {
    console.log('_enqueueUpdate called');
    const result = super._enqueueUpdate();
    console.log(`_enqueueUpdate ${result}`);
    return result;
  }
}
