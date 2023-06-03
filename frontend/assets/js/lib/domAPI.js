export const createHtmlElement = (eltName, params={ eltClass:'', eltId:'', styles:{}}, eltChildren=[]) =>{
    // params => { eltClass:'', eltId:''}
    const element = document.createElement(eltName);
    params.eltClass ? element.className = params.eltClass : null;
    params.eltId ? element.id = params.eltId : null;

    if(params?.styles && Object.keys(params?.styles).length){
        Object.keys(params.styles).forEach(key => {
            element.style[key] = params.styles[key];
        });
    }
    eltChildren.forEach(child => {

        if(typeof child !== 'object'){
            element.innerText = child;
        }else{
            element.appendChild(child);
        }
    })
    return element;
}