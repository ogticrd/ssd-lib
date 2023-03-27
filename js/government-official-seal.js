class GovernmentOfficialSeal extends HTMLElement {

  static get observedAttributes() {
    return ['class'];
  }

  constructor() {
    super();
    const template = document.createElement("template");
    template.innerHTML = /*html*/ `
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">    
    <style>
    .official-header {
      font-family: 'Poppins', sans-serif;
      font-size: 14px;
      padding: 3px 20px;
      background-color: white;
      font-size: 12px;
      border-bottom: 1px solid #ccc;
      text-align: left !important;
    }
    .official-header.dark{
      background-color: #003876;
      color: white;
    }
    
    .container {
      width: 100%;
      padding-right: 15px;
      margin-right: auto;
      margin-left: auto;
      text-align: left !important;
    }
    @media (min-width: 576px) {
      .container {
        max-width: 540px;
      }
    }
    @media (min-width: 768px) {
      .container {
        max-width: 720px;
      }
    }
    @media (min-width: 992px) {
      .container {
        max-width: 960px;
      }
    }
    @media (min-width: 1200px) {
      .container {
        max-width: 1330px;
      }
    }
      .row, .row > div {
        display: flex;
        align-items: center;
        gap: 8px;
        height:20px;
      }
      .row  p {
        margin: 0;
      }
      .flag {
        height: 12px;
      }
      .official-header.dark .action{
        color: #0087FF;
      }
      .action {
        color: #003670;
        text-decoration: underline;
        cursor: pointer;
        display: flex;
        align-items: center;
        font-weight: 600;
      }
      
      .action .chevron {
        width: 20px;
      }
      
      .proves {
        display: none;
      }
      .proves .icon {
        background: #003670;
        padding: 10px;
        width: 18px;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-size: 12px;
        line-height: 18px;
        margin-top: 12px;
      }
      .official-header.dark .proves .icon {
        background: #0087FF;
      }
      .official-header.dark .proves .subtitle {
        color: white;
      }
      .proves .icon img{
        width: 18px;
        height: 18px;
      }
      
      .proves > div {
        display: flex;
        align-items: start;
        padding: 8px;
        gap: 16px;
        width: 40%;
      }
      
      .proves .subtitle {
        color: #003670;
        font-weight: 600;
      }
      #toggle {
        display: none;
      }
      #toggle:checked + .proves {
        display: flex;
        align-items: start;
      }
      #toggle:checked + .chevron{
        display: none;
      }
      
      @media (max-width: 800px) {
        .proves{
          flex-direction: column;
          align-items: center;
        }
        
        .proves > div{
          width: 100%;
        }
        
      }
      @media (max-width: 700px) {
       
        .row p{
          display: inline;
          margin: 0;
          margin-top: 2px;
        }
        .row .action{
          display: block;
        }
        .row .action span{
          display: none;
        }
      }
      @media (max-width: 460px) {
        .official-header > .row.container > div > p {
          font-size: 2.4vw;
          white-space: nowrap;
        }
      }
    </style>

    <div class="official-header">
     <div class="row container">
       <div>
         <img class="flag" src="https://raw.githubusercontent.com/opticrd/official-header/master/assets/icons/dominican-flag.svg" alt="Dominican flag">
         <p>Esta es una web oficial del Gobierno de la República Dominicana</p>
        </div>
         
        <label for="toggle" class="action">
         <span>Así es como puedes saberlo</span> 
          <svg xmlns="http://www.w3.org/2000/svg" class="chevron" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 9l-7 7-7-7" />
          </svg>
        </label>
    
     </div>
     <input type="checkbox" name="toggle" id="toggle">
        <label for="toggle" class="proves container">
      <div>
          <span class="icon">
            <img src="https://raw.githubusercontent.com/opticrd/official-header/master/assets/icons/cupula.svg" alt="cupula">
          </span>
          <div>
            <p class="subtitle">Los sitios web oficiales utilizan .gob.do .gov.do ó .mil.do</p>
            <p>Un sitio .gob.do, .gov.do ó .mil.do significa que pertenece a una organización oficial del Estado dominicano.</p>
          </div>
      </div>
      
      <div>
          <span class="icon">
            <img src="https://raw.githubusercontent.com/opticrd/official-header/master/assets/icons/lock.svg" alt="cupula">
          </span>
          <div>
            <p class="subtitle">Los sitios web oficiales .gob.do .gov.do ó .mil.do seguros usan HTTPS</p>
            <p>Un candado (🔒) o https:// ignifica que estas conectado a un sitio seguro dentro de .gob.do ó .gov.do. Comparte información confidencial sólo en los sitios seguros de .gob.do ó gov.do.</p>
          </div>
      </div>
    </label>
     
    </div>  `;
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if(this.hasAttribute("class")){
      if(this.getAttribute("class") == "dark"){
        this.shadowRoot.querySelector("style").textContent +=`
        .official-header{
          background-color: #003876;
          color: white;
        }
    
        .official-header .action{
            color: #0087FF;
        }
    
        .official-header .proves .icon {
          background: #0087FF;
        }
        .official-header .proves .subtitle {
          color: white;
        }
      `
      }
    }
  }
}

window.customElements.define("official-seal", GovernmentOfficialSeal);