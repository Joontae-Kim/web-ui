customElements.define('ui-center', class extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.style = `
            display: flex;
            align-items: center;
            justify-content: center;
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