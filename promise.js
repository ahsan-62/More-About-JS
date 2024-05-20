const getData = new Promise((resolve, reject) => {
  //   resolve(5000);

  const ahsan = Math.random() * 10;
  console.log(ahsan);
  if (ahsan > 5) {
    resolve(5000);
  } else {
    reject("no data found");
  }
});

// console.log(getData);

getData
  .then((data) => console.log(data + 2))
  .catch((err) => console.log("ERR:", err));
