import axios from 'axios';
import { weatherKey } from 'constants/TOKENS';

const baseUrlWeather = 'https://api.openweathermap.org/data/2.5/onecall';

export const weekApi = {
  async getWeekWeather (lat: string, lon: string) {
    return (await axios.get(`${baseUrlWeather}?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly,alerts&appid=${weatherKey}`))
  }
};

export const pastApi = {
  async getPastWeather (lat: string, lon: string, time: number) {
    return (await axios.get(`${baseUrlWeather}/timemachine?lat=${lat}&lon=${lon}&dt=${time}&units=metric&exclude=current,minutely,hourly,alerts&appid=${weatherKey}`))
  }
}
