<template>
    <div class="weather-container">
      <div class="weather-welcome">
        <h1>Welcome to RSNWeather!</h1>
        <p style="font-style: italic;">How to use?</p>
        <p>Just enter the city to find out its weather!</p>
        <div class="input-btn">
          <input type="text" v-model="city" placeholder="Enter city" @keyup.enter="getWeather" />
          <button @click="getWeather"><img src="../assets/search.png" alt="Search"></button>
        </div>
      </div>
      
      <div v-if="weather" >
        <h2>Weather in {{ weather.name }}</h2>
        <div class="weather-details">
          <div class="weather-name">
            <p>Temperature:</p>
            <p>Weather:</p>
            <p>Humidity:</p>
            <p>Min Temp:</p>
            <p>Max Temp:</p>
            <p>Wind:</p>
          </div>
          <div class="weather-api">
            <p>{{ (weather.main.temp - 273.15).toFixed(2) }} °C</p>
            <p>{{ weather.weather[0].description }}</p>
            <p>{{ weather.main.humidity }}%</p>
            <p>{{ (weather.main.temp_min - 273.15).toFixed(2) }} °C</p>
            <p>{{ (weather.main.temp_max - 273.15).toFixed(2) }} °C</p>
            <p>{{ weather.wind.speed }} m/s</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        city: '',
        weather: null,
        apiKey: import.meta.env.VITE_API_KEY,
      };
    },
    methods: {
      async getWeather() {
        if (this.city) {
          try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);
            this.weather = response.data;
            this.city = '';
          } catch (error) {
            console.error("Error fetching weather data:", error);
          }
        }
      },
    },
  };
  </script>
  
  <style scoped>
    .weather-container {
      display: flex;
      justify-content: space-between;
      gap: 5vw;
      flex-wrap: wrap;
    }
  
    .weather-welcome {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
  
    input {
      padding: 0.65vw;  
      border: none;
      border-bottom: 2px solid black;
      outline: none;
    }
  
    button {
      padding: 0.65vw;
      border: none;
      border-radius: 0.5vw;
      cursor: pointer;
    }
  
    .weather-details {
      display: flex;
      justify-content: space-between;
      padding: 0 5vw;
      gap: 3vw;
    }
  
    .weather-name {
      text-align: start;
      font-weight: bold;
    }
  
    .weather-api {
      text-align: end;
    }
  
    .input-btn {
      display: flex;
      justify-content: center;
      gap: 0.5vw;
    }
  
    img {
      width: 1vw;
      cursor: pointer;
    }
  
    @media (max-width: 600px) {
      img {
        width: 5vw;
      }
      
      button {
        padding: 2vw;
        border-radius: 1vw;
      }
  
      .weather-container {
        justify-content: center;
        gap: 15vw;
      }
    }
  </style>
  