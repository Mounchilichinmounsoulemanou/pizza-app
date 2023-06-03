export const getData = async (url) =>{

    try {
        const response = await fetch(url);
        const data = await response.json();
        if(data.isSuccess){
            return data.result;
        }
        
    } catch (error) {
        console.log(error);
    }

}