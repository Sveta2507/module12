// promise - всегда 2 колбэка
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = Math.random() * (10 - 1) + 1;
    console.log(num);
    if (num > 3) {
      resolve("promise выполнен успешно");
    } else {
      reject("promise вернул ошибку");
    }
  }, 0); // задает асинхронность
});
console.dir(promise);
promise
  .then((result) => {
    // oбрабатывает resolve
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(console.log("обработка в любом случае")); // сatch oбрабатывает reject
// finally рабоатает независимо от результата
