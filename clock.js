const secondHand = document.querySelector('.sec-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');



const setDate = () => {
  const now = new Date();
 
  const sec = now.getSeconds();
  const secDegree = sec * 6 + 90;
  secondHand.style.transform = `rotate(${secDegree}deg)`;
  
  const min = now.getMinutes();
  const minDegree = min * 6 + 90;
  minuteHand.style.transform = `rotate(${minDegree}deg)`;
 
  let hour = now.getHours();

  const hourDegree = hour * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
  audio.currentTime = 0;
  audio.play();
};
setInterval(setDate, 1000);
