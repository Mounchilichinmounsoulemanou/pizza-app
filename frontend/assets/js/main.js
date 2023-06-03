import { createHtmlElement } from "./lib/domAPI.js";
import { getData } from "./lib/fetchApi.js";
import { display_modal, display_pizza } from "./lib/pizzasApi.js";


window.onload = async () =>{

    const apiUrl = "http://localhost:5555/api/pizzas.php";
    const pizzas = await getData(apiUrl);
    display_pizza(pizzas);

    const pizzaItems = document.querySelectorAll('.product-item');
    pizzaItems.forEach((pizzaItem) => {
        pizzaItem.onclick = () =>{
            const _id = pizzaItem.dataset.id;//dataset permet de recuperer l'attribut dont le nom commence par data-
            const pizza = pizzas.filter(pizza => pizza._id == _id)[0];
            
           const modal = display_modal(pizza)
            document.body.appendChild(modal.content);

            modal.closeIcon.onclick = ()=>{
                document.body.removeChild(modal.content);
            }
            modal.overlay.onclick = ()=>{
                document.body.removeChild(modal.content);
            }
            console.log(pizza);
        
        }
    })



    // console.log(
    //     createHtmlElement('div', 'product-item')
    // );

    
    // const response = await fetch(apiUrl);
    // const pizzas = await response.json();

}