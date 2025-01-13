class ProductoCarta extends HTMLElement {
    constructor(){
        super();
      /*Creamos el shadow root*/
      const shadow =this.attachShadow({mode: 'open'});
      /*Creamos el contenedor del componente*/
      const article = document.createElement('article');
      article.setAttribute('class', 'producto');
      /*Creamos el contenido del componente*/
      const img= document.createElement('img');
      img.src= this.getAttribute('img-src');
      img.alt= this.getAttribute('alt');
      const h5= document.createElement('h5');
      h5.textContent= this.getAttribute('nombre');
      const precio= document.createElement('p');
      precio.setAttribute('class', 'precio');
      precio.textContent= this.getAttribute('precio');
      const link = document.createElement('a');
      link.setAttribute('class', 'VerMas-btn');
      link.textContent= 'Ver más';

      //Adjuntamos los elementos al contenedor//
      article.appendChild(img);
      article.appendChild(h5);
      article.appendChild(precio);
      article.appendChild(link);
      //Añadimos el style al shadow DOM//
      const style = document.createElement('style');
      style.textContent = `
      .producto{
        background-color: white;
        border-radius: 5px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        padding: 10px;
        text-align: center;
        flex: 1;
      }
      .producto img{
        width: 100%;
        max-height: 200px;
        border-radius: 5px;
        object-fit: cover;
      }
      .producto h5{
        font-size: 1.1rem;
        margin:10px 0;
      }
      .producto .precio{
        font-size: 1rem;
        color: rgb(28, 28, 29);
        padding: 10px;
      }
      .VerMas-btn{
        background-color: rgb(144, 193, 231);
        color: white;
        font-weight: bold;
        border-radius: 5px;
        padding: auto;
        border: solid rgb(143, 194, 214);
        cursor: pointer;
        padding: 0% 10%;
        margin: 10px;
        text-decoration: none;


      }


      .VerMas-btn:hover{
        background-color: rgb(100, 149, 177);
      }
      `;
      shadow.appendChild(style);
      shadow.appendChild(article);
    }
   
    
}
 //Registro del nuevo web-component//
customElements.define('producto-carta', ProductoCarta);