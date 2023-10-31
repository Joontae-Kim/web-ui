customElements.define('ui-full-background', class extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.style = `
            position: absolute;
            top: 0px;
            left: 0px;
            height: 100%;
            width: 100%;
        `
      
        document.documentElement.style = 'height: 100%;'
        document.body.style = `
            height: 100%;
            width: 100%;
            margin: 0px;
        `

        this.shadowRoot.innerHTML = `
            <slot></slot>
        `
    }
})