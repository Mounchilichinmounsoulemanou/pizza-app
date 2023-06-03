import { createHtmlElement } from "./domAPI.js";

export const display_pizza = (pizzas) => {
    var app = document.getElementById("app");
    
    app.innerHTML = '';
   
   

    // productItems.forEach(productItem => {
    //     productItem.onclick = ()=>{
    //     }
    // });

    pizzas.forEach(pizza => {

       const pizzaProduct = `
        <div class="product-item relative" data-id="${pizza._id}">
                        <img src="${pizza.image}" width="150" alt="${pizza.name}">
                        <div class="product-details">
                            <div class="product-name">${pizza.name}</div>
                            <div class="add-to-cart absolute">
                                <i class="bi bi-zoom-in"></i> Détails
                            </div>
                            <div class="product-price">
                                <span class="sold-price">${pizza.soldPrice}</span>
                                <span class="regular-price"><del>${pizza.price}</del></span>
                            </div>
                        </div>
                    </div>
        `
        app.innerHTML += pizzaProduct;

    });
    
    
}

export const display_modal = (pizza) => {
    const options = [];
    pizza.options.forEach(option => {
        options.push(
            createHtmlElement('li',{eltClass: 'flex gap-15'}, [
                createHtmlElement('div', {eltClass: 'option-name'}, [option.name]),
                createHtmlElement('div', {eltClass: 'divider flex-1'}),
                createHtmlElement('div', {eltClass: 'option-price'}, [option.additonnalPrice.toFixed(2)]),
            ])
        )
    })

    const overlay = createHtmlElement('div', {eltClass: 'overlay fixed'})
    const closeIcon = createHtmlElement('i', {eltClass: 'bi bi-x-lg absolute'})

    const content = createHtmlElement('div', {eltClass: 'modal-container'}, [
        overlay,
        createHtmlElement('div', {eltClass: 'modal fixed box relative'}, [
            createHtmlElement('div', {eltClass: 'modal-header'}, [
                closeIcon,
            ]),
            createHtmlElement('div', {eltClass: 'modal-content flex gap-10'}, [
                createHtmlElement('div', {eltClass: 'modal-image flex-2 b', styles: {backgroundImage: `url('${pizza.image}')`}}),
                createHtmlElement('div', {eltClass: 'modal-description flex-3 b p-10'}, [
                    createHtmlElement('h2', {}, [pizza.name]),
                    createHtmlElement('p', {}, [pizza.description]),
                    createHtmlElement('h3', {}, ['Options']),
                    createHtmlElement('ul',{eltClass: 'options'}, options),
                    createHtmlElement('button', {eltClass: 'flex-1'}, ['Payer']),
                ]),
                
            ]),
        ]),
    ])

    return {content, overlay, closeIcon};
    // console.log(modal);
//     <div class="modal-container none">
//         <div class="overlay fixed"></div>
//         <div class="modal fixed box relative">
//           <div class="modal-header ">
//             <i class="bi bi-x-lg absolute"></i>
//           </div>
//           <div class="modal-content flex gap-10">
//             <div class="modal-image flex-2 b" style="background-image: url('/assets/images/pizza/4-fromages.jpg')" >
//             </div>
//             <div class="modal-description flex-3 b p-10">
//                 <h2>4 Fromages</h2>
//                 <p>
//                 Sauce tomate à l'origan ou crème fraîche légère, mozzarella, fromage de chèvre, emmental et Fourme d'Ambert AOP
//                 </p>
//                 <h3>Options</h3>
//                 <ul class="options">
//                     <li class="flex gap-15">
//                         <div class="option-name">Sauce</div>
//                         <div class="divider flex-1"></div>
//                         <div class="option-price">12.99 €</div>
//                     </li>
//                     <li class="flex gap-15">
//                         <div class="option-name">Sauce</div>
//                         <div class="divider flex-1"></div>
//                         <div class="option-price">12.99 €</div>
//                     </li>
//                     <li class="flex gap-15">
//                         <div class="option-name">Sauce</div>
//                         <div class="divider flex-1"></div>
//                         <div class="option-price">12.99 €</div>
//                     </li>
//                     <li class="flex gap-15">
//                         <div class="option-name">Sauce</div>
//                         <div class="divider flex-1"></div>
//                         <div class="option-price">12.99 €</div>
//                     </li>
//                     <li class="flex gap-15">
//                         <div class="option-name">Sauce</div>
//                         <div class="divider flex-1"></div>
//                         <div class="option-price">12.99 €</div>
//                     </li>
//                     <li class="flex gap-15">
//                         <div class="option-name">Sauce</div>
//                         <div class="divider flex-1"></div>
//                         <div class="option-price">12.99 €</div>
//                     </li>
//                     <li class="flex gap-15">
//                         <div class="option-name">Sauce</div>
//                         <div class="divider flex-1"></div>
//                         <div class="option-price">12.99 €</div>
//                     </li>
//                     <li class="flex gap-15">
//                         <div class="option-name">Sauce</div>
//                         <div class="divider flex-1"></div>
//                         <div class="option-price">12.99 €</div>
//                     </li>
//                     <li class="flex gap-15">
//                         <div class="option-name">Sauce</div>
//                         <div class="divider flex-1"></div>
//                         <div class="option-price">12.99 €</div>
//                     </li>
//                     <li class="flex gap-15">
//                         <div class="option-name">Sauce</div>
//                         <div class="divider flex-1"></div>
//                         <div class="option-price">12.99 €</div>
//                     </li>
//                 </ul>
//                 <button class="flex-1">
//                   Payer
//                 </button>
//             </div>
//           </div>
//         </div>
// </div>
}