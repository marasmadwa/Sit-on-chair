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
    var firstListPanel = firstDropDownList.lastElementChild;
    var firstListArrow = firstListPanel.previousElementSibling;
    var clair = firstListPanel.firstElementChild;
    var margarita = clair.nextElementSibling;
    var selena = margarita.nextElementSibling;
    var color = document.querySelector('.color');
    var pattern = document.querySelector('.pattern');
    var transport = document.querySelector('.transport');
    var title = document.querySelector('#title');
    var titleValue = document.querySelector('.title-value');
    var colorValue = document.querySelector('.color-value');
    var patternValue = document.querySelector('.pattern-value');
    var transportValue = document.querySelector('.transport-value');
    var chairColorList = document.querySelector('#chair-color-list');
    var chairTypeList = document.querySelector('#chair-type-list');
    var chairMaterialList = document.querySelector('#chair-material-list');
    var checkbox = document.querySelector('#transport');


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
        sumPriceOfObjects(clairPrice);
        title.innerHTML = clair.innerHTML + "<br>";
        titleValue.innerHTML = clairPrice + " zł" + "<br>";

        setBackDisabledListElementToEnabled('#chair-type-list');
        clair.classList.add('disabled');

    });

    margarita.addEventListener('click', function () {
        var margaritaPrice = 210;
        sumPriceOfObjects(margaritaPrice);
        title.innerHTML = margarita.innerHTML + "<br>";
        titleValue.innerHTML = margaritaPrice + " zł" + "<br>";

        setBackDisabledListElementToEnabled('#chair-type-list');
        margarita.classList.add('disabled');
    });
    selena.addEventListener('click', function () {
        var selenaPrice = 230;
        sumPriceOfObjects(selenaPrice);
        title.innerHTML = selena.innerHTML + "<br>";
        titleValue.innerHTML = selenaPrice + " zł" + "<br>";

        setBackDisabledListElementToEnabled('#chair-type-list');
        selena.classList.add('disabled');
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
        var redPrice = 10;
        sumPriceOfObjects(redPrice);
        color.innerHTML = red.innerHTML + "<br>";
        colorValue.innerHTML = redPrice + " zł" + "<br>";

        setBackDisabledListElementToEnabled('#chair-color-list');
        red.classList.add('disabled');
    });
    black.addEventListener('click', function () {
        var blackPrice = 20;
        sumPriceOfObjects(blackPrice);
        color.innerHTML = black.innerHTML + "<br>";
        colorValue.innerHTML = blackPrice + " zł" + "<br>";

        setBackDisabledListElementToEnabled('#chair-color-list');
        black.classList.add('disabled');
    });
    orange.addEventListener('click', function () {
        var orangePrice = 30;
        sumPriceOfObjects(orangePrice);
        color.innerHTML = orange.innerHTML + "<br>";
        colorValue.innerHTML = orangePrice + " zł" + "<br>";

        setBackDisabledListElementToEnabled('#chair-color-list');
        orange.classList.add('disabled');
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
        var textilePrice = 50;
        sumPriceOfObjects(textilePrice);
        pattern.innerHTML = textile.innerHTML + "<br>";
        patternValue.innerHTML = textilePrice + " zł" + "<br>";

        setBackDisabledListElementToEnabled('#chair-material-list');
        textile.classList.add('disabled');
    });
    leather.addEventListener('click', function () {
        var leatherPrice = 260;
        sumPriceOfObjects(leatherPrice);
        pattern.innerHTML = leather.innerHTML + "<br>";
        patternValue.innerHTML = leatherPrice + " zł" + "<br>";

        setBackDisabledListElementToEnabled('#chair-material-list');
        leather.classList.add('disabled');
    });

    //-----------------checkbox----------------------------------------------
checkbox.addEventListener('click', function () {
    var transportPrice = 200;

    if (checkbox.checked === true) {
        transport.innerHTML = "Transport";
        transportValue.innerHTML = transportPrice.toString();
        sumPriceOfObjects(transportPrice);
    }else if(checkbox.checked !== true) {
        transport.innerHTML = "";
        transportValue.innerHTML = '';
        updatePriceForTransport()
    }
});



    //---------------------set elements to enabled----------------------------------
    function setBackDisabledListElementToEnabled(listName) {
        var list = document.querySelector(listName);
        var items = list.getElementsByTagName('li');

        for (var i = 0; i < items.length; i++) {
            console.log(items[i]);
            if (items[i].classList.contains('disabled')) {
                updatePriceOfObjects(items[i]);
                items[i].classList.remove('disabled');
            }
        }
    }
    var sumDiv = document.querySelector('.sum');

    function sumPriceOfObjects(objectPrice) {
        var sumDivIntegerValue = parseInt(sumDiv.innerText);
        var objectPriceIntegerValue = parseInt(objectPrice);
        var integerSumOfPrices = sumDivIntegerValue + objectPriceIntegerValue;
        var stringSumOfPrices = integerSumOfPrices.toString();
        sumDiv.innerHTML = stringSumOfPrices + " zł";
    }

    function updatePriceForTransport() {
        var sumDivIntegerValue = parseInt(sumDiv.innerText);
        var integerSumOfPrices = sumDivIntegerValue - 200;
        var stringSumOfPrices = integerSumOfPrices.toString();
        sumDiv.innerHTML = stringSumOfPrices + " zł";
    }
    function updatePriceOfObjects(element) {
        var sumDivIntegerValue = parseInt(sumDiv.innerText);
        var priceToRemove = 0;
        if(element.innerHTML === 'Clair'){
            priceToRemove = 200;
        }else if(element.innerHTML ==='Margarita'){
            priceToRemove = 210;
        }else if (element.innerHTML ==='Selena'){
            priceToRemove = 230;
        } else if (element.innerHTML ==='Czerwony'){
            priceToRemove = 10;
        } else if (element.innerHTML ==='Czarny'){
            priceToRemove = 20;
        } else if (element.innerHTML ==='Pomarańczowy'){
            priceToRemove = 30;
        }else if (element.innerHTML ==='Tkanina'){
            priceToRemove = 50;
        }else if (element.innerHTML ==='Skóra'){
            priceToRemove = 260;
        }

        var integerSumOfPrices = sumDivIntegerValue - priceToRemove;
        var stringSumOfPrices = integerSumOfPrices.toString();
        sumDiv.innerHTML = stringSumOfPrices + " zł";
    }



});