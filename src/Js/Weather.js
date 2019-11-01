export class weather {
    constructor(city, countryCode){
        this.apikey = '27d9a8bd60c4eff141983e7d10e011c0'
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeather(){
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`  
        const response = await fetch(URI);
        const data = await response.json()
        // console.log(data);
        return data;
    }

    changeLocation(city, countryCode){
        this.city = city;
        this.countryCode = countryCode;
    }
    
};