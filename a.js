// async function checkPromise() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("완료!"), 1000);
//   });

//   let result = await promise;
//   console.log(result);
// }

// checkPromise();

async function checkPromise() {
  try {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("완료!"), 1000);
    });

    let result = await promise;

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

checkPromise();
