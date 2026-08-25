function showWeather(city, temperature) {
  console.log(`Сейчас в городе ${city} температура ${temperature} градусов по Цельсию.`)
}
showWeather("Черкесск",30)

const LIGHT_SPEED =  299792458

const compareSpeed = (speed) => {
  if (speed > LIGHT_SPEED) {
    console.log("Сверхсветовая скорость")
  } else if (speed < LIGHT_SPEED){
    console.log("Субсветовая скорость")
  } else if (speed === LIGHT_SPEED){
    console.log("Скорость света");
  }
};

  compareSpeed(2997924589);
  compareSpeed(29979245);
  compareSpeed(299792458);
  

const product = "Гардош Хычын";
const price = 100;

const buyProduct = (budget) => {
  if (budget >= price) {
    console.log(`${product} приобретен Спасибо за покупку!`)
  } else {
    const difference = price - budget;
    console.log(`Вам не хватает ${difference}, пополните баланс`)
  }
};

  buyProduct(100);
  buyProduct(80);
