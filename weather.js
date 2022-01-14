class Weather {
    constructor(city) {
        this.city = city
        this.key = '8a7651ab756f948007ca9692674c5c5f'
    }
    // fetch funktsioon
    async getWeather(){
        const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        const responceData = await responce.json()
        return responceData
    }
    changeCity(city){
        this.city = city
    }
}