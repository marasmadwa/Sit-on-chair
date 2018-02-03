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

    //--------------------choice part variables--------------
    var choicePart = document.querySelector('.choice_part');
    var h3 = choicePart.firstElementChild;
    var form = h3.nextElementSibling;
    var image = document.querySelector('.image_part');
    //-------------------right panel variables----------------
    var panelLeft = document.querySelector('.panel_left');

    //----------firstDropDownList-----------------------------
    var firstDropDownList = form.firstElementChild;
    var firstListPanel = firstDropDownList.lastElementChild;//!
    var firstListArrow = firstListPanel.previousElementSibling;//!
    var clair = firstListPanel.firstElementChild;
    var margarita = clair.nextElementSibling;
    var selena = margarita.nextElementSibling;

    var clicks = 0;
    firstListArrow.addEventListener('click', function () {
        clicks++;
        if (clicks % 2 !== 0) {
            firstListPanel.style.display = "block";
        } else
            firstListPanel.style.display = "none";
        image.addEventListener('mouseover', function () {
            firstListPanel.style.display = "none";
        });
    });

    clair.addEventListener('click', function () {
        panelLeft.innerHTML = panelLeft.innerHTML + clair.innerHTML + "<br>";
        if (panelLeft.innerHTML === true){
            panelLeft = panelLeft.innerHTML - clair.innerHTML;
        }
    });
    margarita.addEventListener('click', function () {
        panelLeft.innerHTML = panelLeft.innerHTML + margarita.innerHTML + "<br>";
    });
    selena.addEventListener('click', function () {
        panelLeft.innerHTML = panelLeft.innerHTML + selena.innerHTML + "<br>";
    });


    //----------secondDropDownList-------------------------------
    var secondDropDownList = firstDropDownList.nextElementSibling;
    var secondListPanel = secondDropDownList.lastElementChild;
    var secondListArrow = secondListPanel.previousElementSibling;

    clicks = 0;
    secondListArrow.addEventListener('click', function () {
        clicks++;
        if (clicks % 2 !== 0) {
            secondListPanel.style.display = "block";
        } else
            secondListPanel.style.display = "none";
        image.addEventListener('mouseover', function () {
            secondListPanel.style.display = "none";
        })
    });

    //----------thirdDropDownList--------------------------------
    var thirdDropDownList = secondDropDownList.nextElementSibling;
    var thirdListPanel = thirdDropDownList.lastElementChild;
    var thirdListArrow = thirdListPanel.previousElementSibling;

    clicks = 0;
    thirdListArrow.addEventListener('click', function () {
        clicks++;
        if (clicks % 2 !== 0) {
            thirdListPanel.style.display = "block";
        } else
            thirdListPanel.style.display = "none";
        image.addEventListener('mouseover', function () {
            thirdListPanel.style.display = "none";
        })
    });

});