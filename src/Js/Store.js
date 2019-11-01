export class Store {
    constructor(){
        this.city;
        this.countryCode;
        this.defaultCity = 'Roma';
        this.defaultCoutry = 'it';
        
    }

    getLocationData(){

        if(localStorage.getItem('city') === null || localStorage.getItem('city') === 'undefined'){
            this.city = this.defaultCity;
        } else{
            this.city = localStorage.getItem('city');
        }

        if(localStorage.getItem('countryCode') === null || localStorage.getItem('countryCode') === 'undefined'){
            this.countryCode = this.defaultCoutry
        } else {
            this.countryCode = localStorage.getItem('countryCode');
        }
        
        return {
            city: this.city,
            countryCode: this.countryCode
        }
    }


    setLocationData(city, countryCode){
        localStorage.setItem('city', city);
        localStorage.setItem('countryCode', countryCode);
    }
}