
document.addEventListener("DOMContentLoaded", function () {

//-------------------------slider-----------------------
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

    //---------------------application-----------------------

    var choicePart = document.querySelector('.choice_part');
    var h3 = choicePart.firstElementChild;
    var form = h3.nextElementSibling;

    //----------firstDropDownList variables-----------
    var firstDropDownList = form.firstElementChild;
    var firstListPanel = firstDropDownList.lastElementChild;//!
    var firstListArrow = firstListPanel.previousElementSibling;//!

    var clicks = 0;
    firstListArrow.addEventListener('click', function () {
        clicks++;
       if (clicks % 2 !== 0) {
           firstListPanel.style.display = "block";
       }else
           firstListPanel.style.display = "none";
       
    });



    var secondDropDownList = firstDropDownList.nextElementSibling;
    console.log(secondDropDownList);





});