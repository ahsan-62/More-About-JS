function checkAge() {
  const age = document.getElementById("age").value;
  const p = document.getElementById("err");

  try {
    const ageValue = parseFloat(age);
    if (ageValue < 18) {
      throw "Age is less than 18";
    } else if (isNaN(ageValue)) {
      throw "Age is not a number";
    }

    p.innerHTML = "";
  } catch (err) {
    console.log("ERR:", err);

    p.innerHTML = "Error:" + err;
  } finally {
    console.log("Everything is fine");
  }
  console.log(11111);
}
