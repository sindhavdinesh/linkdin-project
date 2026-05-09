# 21 Days Frontend Challenge – Day 9

**Guidance by GEERISHKUMAR GONDALIYA Sir** | Flow → Build → Real-World Project

A fully functional, beautifully designed weather application built with HTML, CSS, and JavaScript as part of the 21 Days Frontend Challenge. Fetches real-time weather data from OpenWeatherMap API and displays temperature, humidity, wind speed, and weather conditions for any city worldwide.

---

## 📋 Project Flow Planning

### Project Name: Weather App – Real-Time Weather Forecast

### Goal:
Users can search for any city and get real-time weather information including temperature, feels-like temperature, humidity, wind speed, weather description, and a dynamic weather icon. The last searched city is saved in localStorage for persistence across page reloads.

---

### Features:
- 🔍 **Search City** – Enter any city name to get current weather data
- 🌡️ **Real-Time Temperature** – Displays temperature in Celsius
- 💧 **Humidity & Wind** – Shows humidity percentage and wind speed (m/s)
- 🌦️ **Weather Description** – Text description with corresponding weather icon
- 🔥 **Feels Like Temperature** – Shows perceived temperature
- 💾 **LocalStorage Persistence** – Last searched city is saved and automatically loaded on page reload
- ⚡ **Enter Key Support** – Press Enter to search
- 🎨 **Beautiful Glassmorphism UI** – Modern, dark-themed design with blur effects
- 📱 **Fully Responsive** – Works seamlessly on desktop, tablet, and mobile devices
- ⚠️ **Error Handling** – User-friendly error messages for invalid cities, network issues, or API errors

---

### Step-by-Step Flow:

1. User types a city name in the input field
2. User clicks **Search** button or presses **Enter** key
3. JavaScript reads the city input value
4. **Loading indicator** appears while fetching data
5. Fetch request is sent to OpenWeatherMap API with the API key and city name
6. **If successful:**
   - API returns JSON data
   - Extract temperature, feels-like, humidity, wind speed, description, icon code, city name, country
   - Update UI with formatted weather information
   - Save searched city to localStorage
7. **If error occurs:**
   - Display appropriate error message (city not found, API key error, network issue)
   - Show friendly placeholder UI
8. Page reload → last searched city is retrieved from localStorage and weather is fetched automatically

---

### UI Plan:
- **Flow Card** – Shows planning details (industry standard)
- **Search Section** – Input field + Search button
- **Weather Display Card** – City name, date/time, temperature, weather icon + description
- **Details Row** – Feels like, Humidity, Wind speed cards
- **Footer** – Attribution and API credit
- **Error Container** – Dynamic error messages

---

### Logic Plan:

- **DOM Elements** – Reference input, button, weather container, error container using `getElementById`
- **Event Listeners** – Click on search button + Enter keypress on input
- **API Integration** – 
  - API Key: `f83daa9d6894dfe511eb7bdd5e781795`
  - URL: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
- **Async/Await Fetch** – Handle API requests with proper `try/catch` blocks
- **UI Rendering** – Dynamically update DOM with weather data
- **localStorage** – Save and retrieve last searched city
- **Helper Functions** – `fetchWeather()`, `updateWeatherUI()`, `showError()`, `setLoading()`, `getFormattedDateTime()`

---

### Edge Cases Handled:

✅ **Empty input** – Shows error "Please enter a city name"  
✅ **Invalid city name** – API returns 404 → Shows "City not found" message  
✅ **Special characters** – `encodeURIComponent()` prevents URL issues  
✅ **API key error** – Displays authentication error message  
✅ **Network offline** – Fetch rejection shows network error  
✅ **Rate limiting (429)** – Shows "Too many requests" message  
✅ **No last searched city** – Defaults to "London" on first load  
✅ **Very long city names** – CSS text wrapping handles gracefully  
✅ **Duplicate searches** – Loading state prevents confusion, new fetch replaces previous  

---

🌐 Live Demo:
https://yourusername.github.io/weather-app-day9

📁 Source Code:
https://github.com/yourusername/weather-app-day9

## ✨ Features Showcase

| Feature | Status |
|---------|--------|
| 🔍 Search any city worldwide | ✅ |
| 🌡️ Real-time temperature (°C) | ✅ |
| 🔥 Feels like temperature | ✅ |
| 💧 Humidity percentage | ✅ |
| 💨 Wind speed (m/s) | ✅ |
| 🌦️ Weather description + icon | ✅ |
| 📅 Current date & time display | ✅ |
| 💾 localStorage persistence | ✅ |
| ⚡ Enter key support | ✅ |
| ⏳ Loading indicator | ✅ |
| ❌ Friendly error messages | ✅ |
| 📱 Fully responsive design | ✅ |
| 🎨 Glassmorphism UI | ✅ |
| 🔁 Auto-load last searched city | ✅ |

---

## 🛠️ Technologies Used

- **HTML5** – Semantic structure
- **CSS3** – Flexbox, Grid, Glassmorphism effects, Media queries
- **JavaScript (ES6+)** – Async/Await, Fetch API, DOM manipulation, localStorage
- **OpenWeatherMap API** – Real-time weather data provider

---

## 📁 Project Structure
