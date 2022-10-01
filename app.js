let weather = {  
    "apiKey": "e2c1d873e17655abe9c9bdf6946db59d",  
    fetchWeather: function (city) {  
      fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid="+ this.apiKey)  
      .then((response)=>response.json())  
      .then((data)=>this.displayWeather(data));  
    },  
