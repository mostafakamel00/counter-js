let count = 0;

const value = document.querySelector("#value"),
  btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const myClass = e.currentTarget.classList;
    // console.log(myClass);

    //changes number count
    if (myClass.contains("previous")) {
      count--;
    } else if (myClass.contains("next")) {
      count++;
    } else {
      count = 0;
    }
    //changes number count

    //changes color of number
    if (count > 0) {
      value.style.color = "#0a58ca";
    } else if (count < 0) {
      value.style.color = "#dc3545";
    } else {
      value.style.color = "#212529";
    }
    //changes color of number

    value.textContent = count;
  });
});
