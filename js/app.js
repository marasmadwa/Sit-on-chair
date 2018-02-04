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
    var panelRight = document.querySelector('.panel_right');

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
        var clairPrice = 200;
        panelLeft.innerHTML = panelLeft.innerHTML + clair.innerHTML + "<br>";
        panelRight.innerHTML = panelRight.innerHTML + clairPrice + " zł" + "<br>";
    });

    margarita.addEventListener('click', function () {
        var margaritaPrice = 210;
        panelLeft.innerHTML = panelLeft.innerHTML + margarita.innerHTML + "<br>";
        panelRight.innerHTML = panelRight.innerHTML + margaritaPrice + " zł" + "<br>";
    });
    selena.addEventListener('click', function () {
        var selenaPrice = 230;
        panelLeft.innerHTML = panelLeft.innerHTML + selena.innerHTML + "<br>";
        panelRight.innerHTML = panelRight.innerHTML + selenaPrice + " zł" + "<br>";
    });


    //----------secondDropDownList-------------------------------
    var secondDropDownList = firstDropDownList.nextElementSibling;
    var secondListPanel = secondDropDownList.lastElementChild;
    var secondListArrow = secondListPanel.previousElementSibling;
    var red = secondListPanel.firstElementChild;
    var black = red.nextElementSibling;
    var orange = black.nextElementSibling;

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
    red.addEventListener('click', function () {
        panelLeft.innerHTML = panelLeft.innerHTML + red.innerHTML + "<br>";
        panelRight.innerHTML = panelRight.innerHTML + 10 + " zł" + "<br>";
    });
    black.addEventListener('click', function () {
        panelLeft.innerHTML = panelLeft.innerHTML + black.innerHTML + "<br>";
        panelRight.innerHTML = panelRight.innerHTML + 20 + " zł" + "<br>";
    });
    orange.addEventListener('click', function () {
        panelLeft.innerHTML = panelLeft.innerHTML + orange.innerHTML + "<br>";
        panelRight.innerHTML = panelRight.innerHTML + 30 + " zł" + "<br>";
    });

    //----------thirdDropDownList--------------------------------
    var thirdDropDownList = secondDropDownList.nextElementSibling;
    var thirdListPanel = thirdDropDownList.lastElementChild;
    var thirdListArrow = thirdListPanel.previousElementSibling;
    var textile = thirdListPanel.firstElementChild;
    var leather = thirdListPanel.lastElementChild;

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
    textile.addEventListener('click', function () {
        panelLeft.innerHTML = panelLeft.innerHTML + textile.innerHTML + "<br>";
        panelRight.innerHTML = panelRight.innerHTML + 0 + " zł" + "<br>";
    });
    leather.addEventListener('click', function () {
        panelLeft.innerHTML = panelLeft.innerHTML + leather.innerHTML + "<br>";
        panelRight.innerHTML = panelRight.innerHTML + 0 + " zł" + "<br>";
    });

    //-----------------checkbox----------------------------------------------
    var checkbox = document.querySelector('#transport');
    var checkboxText = checkbox.nextElementSibling;

    clicks = 0;
    checkbox.addEventListener('click', function () {
        panelLeft.innerHTML = panelLeft.innerHTML + checkboxText.innerHTML + '<br>';
        console.log(checkbox.dataset.transportPrice);
        if (this.checked === true ){
            clicks++;
            panelRight.innerHTML = panelRight.innerHTML + this.dataset.transportPrice + " zł" +  '<br>';
        // }else if(this.checked === false){ //Nie mam pojęcia co zrobić gdy odznaczę checkboxa, jego wartość zniknęłą z listy. Jak to rozwiązać ?
        //
         }
    });

    //-------------------summary----------------------------------------
    var sumDiv = document.querySelector('.sum');




});