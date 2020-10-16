
    
    /*sparar information i localStorage*/
    const saveInfo = (obj) => {
        localStorage.setItem('name', JSON.stringify(obj.name));
        localStorage.setItem('reviews', JSON.stringify(obj.reviews));
        localStorage.setItem('address', JSON.stringify(obj.address));
        console.log(localStorage.name, localStorage.reviews, localStorage.address)
    }
 
    /*Hämtar information från objektet*/
    export function getInfo(data) {
           let salonData = data;
            this.saveInfo(salonData);
        }