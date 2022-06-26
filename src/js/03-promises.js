import Notiflix from 'notiflix';

let firstDelay = document.getElementsByName("delay")[0];
let step = document.getElementsByName("step")[0];
let amount = document.getElementsByName("amount")[0];
let button = document.querySelector("button");

button.addEventListener("click", e => {
  e.preventDefault();
  let delay = firstDelay.valueAsNumber;
  for (let position = 1; position <= amount.valueAsNumber; position++) {
    createPromise(position, delay)
      .then(({position, delay}) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({position, delay}) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay = delay + step.valueAsNumber;
  }
})


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);
  });
}