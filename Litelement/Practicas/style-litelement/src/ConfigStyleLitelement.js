import { LitElement, html, css } from 'lit-element';

export class ConfigStyleLitelement  extends LitElement {
    static get styles() {
        return css`
          :host {
            color: var(--themeColor, yellowgreen);
          }
        `;
      }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
        <section>
            Lorem.....
        </section>
    `;
  }
}