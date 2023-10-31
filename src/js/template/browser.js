customElements.define('ui-browser', class extends HTMLElement {
    connectedCallback() {
      this.attachShadow({mode: 'open'});
      this.style = `width: 100%;height: 100%;`
      
      document.documentElement.style = 'height: 100%;'
      document.body.style = `
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        justify-content: center;
        margin: 0px;
      `

      this.shadowRoot.innerHTML = `
        <div class="display">
            <div class="browser">
                <div class="browser-header">
                    <div class="browser-tool">
                        <div class="browser-button"></div>
                        <div class="browser-button"></div>
                        <div class="browser-button"></div>
                    </div>
                    <div class="browser-address-bar"></div>
                    <div class="browser-tool">
                        <div class="browser-button"></div>
                        <div class="browser-button"></div>
                        <div class="browser-button"></div>
                    </div>
                </div>
                <div class="browser-body">
                    <slot></slot>
                </div>
            </div>
        </div>

        <style>
            .display {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                max-height: calc(100% - 8rem - 4rem - 12px);
                background-color: #e1e1e1;
                padding: 2rem;
                margin: 4rem 8rem;
                border-radius: 0.3rem;
                border: 6px solid #595959;
                flex-grow: 1;
                box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
            }

            .browser {
                height: 100%;
                width: 100%;
                background: white;
                border-radius: 0.15rem 0.3rem 0.3rem 0.15rem;
                box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
            }

            .browser-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 40px;
                width: 100%;
                background-color: #fdfdfd;
                border-bottom: 1px solid #d1d1d1;
                border-top-left-radius: 0.15rem;
                border-top-right-radius: 0.15rem;
            }

            .browser-body {
                display
                width: calc(100% - 1rem);
                height: calc(100% - 40.98px - 1rem);
                padding: 0.5rem;
                border-bottom-left-radius: 0.15rem;
                border-bottom-right-radius: 0.15rem;
            }

            .browser-tool,
            .browser-address-bar {
                margin: 5px;
                height: calc(100% - 10px);
            }

            .browser-tool {
                display: flex;
                align-items: center;
                flex-grow: 0;
            }

            .browser-address-bar {
                flex-grow: 1;
                margin-left: 10px;
                margin-right: 10px;
                background-color: #efefef;
                border-radius: 25px;
            }

            .browser-button {
                height: 20px;
                width: 20px;
                border-radius: 50%;
                background-color: #ededed;
                margin-left: 3px;
                margin-right: 3px;
            }
        </style>
      `;
    }
  });