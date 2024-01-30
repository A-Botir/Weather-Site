// fetch("https://jsonplaceholder.typicode.com/comments")
// .then((resp) => {
//     return resp.json();
// }).then((data) => {
//     data.filter((item) => {
//         if(item.id%2 == 0){
//             const listItem = document.createElement("li");
//             listItem.textContent = item.email;
//             dataList.appendChild(listItem);
//         }
//     });
// })

function updateClock() {
  const clockElement = document.getElementById("clock");
  const currentTime = new Date();
  const currentDate = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const formattedTime = `${hours < 10 ? "0" : ""}${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes} - Thursday, ${day < 10 ? "0" : ""}${day}.${
    month < 10 ? "0" : ""
  }${month}.${year}`;

  clockElement.textContent = formattedTime;
}
setInterval(updateClock, 1000);
updateClock();

const inputValue = document.getElementById('search');

const weatherInfo = e => {
    const inputDate = e.target.value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=tashkent&appid=17763616bc668bf01ae1ce3f00fe6020&units=metric')
}