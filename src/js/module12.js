// // promise - всегда 2 колбэка
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const num = Math.random() * (10 - 1) + 1;
//     console.log(num);
//     if (num > 3) {
//       resolve("promise выполнен успешно");
//     } else {
//       reject("promise вернул ошибку");
//     }
//   }, 0); // задает асинхронность
// });
// console.dir(promise);
// promise
//   .then((result) => {
//     // oбрабатывает resolve
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(console.log("обработка в любом случае")); // сatch oбрабатывает reject
// // finally рабоатает независимо от результата

const { template } = require("handlebars");

// запросы
// fetch - 2 параметра, 1 обязательный

// const url = "https://pixabay.com/api/";
// const apiKey = "18083964-743e1c4dbd8df155933fdd882";
// const query = "yellow+flowers&image_type=photo&pretty=true";
// const fullUrl = `${url}?key=${apiKey}&q=${query}`;
// console.log(fullUrl);
// fetch(
//   "https://pixabay.com/api/?key=18083964-743e1c4dbd8df155933fdd882&q=yellow+flowers&image_type=photo&pretty=true",
// )
//   .then((res) => {
//     res.json();
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   }); // возвращает promise
// // console.log(fetch(fullUrl));

const pixabay = document.querySelector(".pixabay");
// fetch(
//   "https://pixabay.com/api/?key=18083964-743e1c4dbd8df155933fdd882&q=yellow+flowers&image_type=photo&pretty=true",
// )
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data.hits);
//     for (let obj of data.hits) {
//       // console.log(obj.userImageURL);
//       const li = document.createElement("li");
//       const img = document.createElement("img");
//       img.setAttribute("src", obj.previewURL);
//       img.setAttribute("data-source", obj.largeImageURL);
//       li.appendChild(img);
//       li.appendChild(img);
//       pixabay.appendChild(li);
//     }
//   });

// pixabay.addEventListener("click", (e) => {
//   console.log(e.target);
// });

import countryTemplate from "../template/country-item.hbs";
fetch("https://restcountries.eu/rest/v2/all")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let item = countryTemplate(data);
    pixabay.insertAdjacentHTML("afterbegin", item);
  });
