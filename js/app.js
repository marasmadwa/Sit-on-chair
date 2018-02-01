
document.addEventListener("DOMContentLoaded", function () {


    var sliderLi = document.querySelectorAll(".slider li");
    var arrBtnL = document.querySelector(".arrBtnL");
    var arrBtnR = document.querySelector(".arrBtnR");
    var counter = 0;

    sliderLi[counter].classList.add("visible");

    arrBtnR.addEventListener('click', function () {
        sliderLi[counter].classList.remove("visible");
        counter++;
        if (counter > sliderLi.length - 1) {
            counter = sliderLi.length - 1
        }
        sliderLi[counter].classList.add("visible");

    });

    arrBtnL.addEventListener('click', function () {
        sliderLi[counter].classList.remove("visible");
        counter--;
        if (counter < 0) {
            counter = 0;
        }

        sliderLi[counter].classList.add("visible");

    });

});