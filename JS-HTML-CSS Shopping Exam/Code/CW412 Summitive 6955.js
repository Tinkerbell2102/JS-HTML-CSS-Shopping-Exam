/*Modal Popup*/
var span = document.getElementsByClassName("close")[0];

var btn1 = document.getElementById("buy1");
var btn2 = document.getElementById("buy2");
var btn3 = document.getElementById("buy3");
var btn4 = document.getElementById("buy4");
var btn5 = document.getElementById("buy5");
var btn6 = document.getElementById("buy6");
var btn7 = document.getElementById("buy7");
var btn8 = document.getElementById("buy8");

btn1.onclick = function () {
    modal.style.display = "block";
    var Item = "BILLY J SPORT SUEDE LEATHER";
    var price = "R3800.00";
    var multi = document.getElementById("num").Value;
    document.getElementById("ItemName").innerHTML = Item;
    document.getElementById("price").innerHTML = price;
    document.getElementById("priceFinal").innerHTML = "Subtotal: R " + 3800 * multi;
}

btn2.onclick = function () {
    modal.style.display = "block";
    var Item = "BILLY SNUFF 2 TONE LEATHER";
    var price = "R4200.00";
    var multi = document.getElementById("num").Value;
    document.getElementById("ItemName").innerHTML = Item;
    document.getElementById("price").innerHTML = price;
    document.getElementById("priceFinal").innerHTML = "Subtotal: R " + 3800 * multi;

}
btn3.onclick = function () {
    modal.style.display = "block";
    var Item = "BJ CLASSIC LEATHER JACKET";
    var price = "R3000.00";
    var multi = document.getElementById("num").Value;
    document.getElementById("ItemName").innerHTML = Item;
    document.getElementById("price").innerHTML = price;
    document.getElementById("priceFinal").innerHTML = "Subtotal: R " + 3800 * multi;

}
btn4.onclick = function () {
    modal.style.display = "block";
    var Item = "BJ SPORT LEATHER JACKET";
    var price = "R3500.00";
    var multi = document.getElementById("num").Value;
    document.getElementById("ItemName").innerHTML = Item;
    document.getElementById("price").innerHTML = price;
    document.getElementById("priceFinal").innerHTML = "Subtotal: R " + 3800 * multi;

}
btn5.onclick = function () {
    modal.style.display = "block";
    var Item = "BLACK BJ LEATHER JACKET";
    var price = "R4000.00";
    var multi = document.getElementById("num").Value;
    document.getElementById("ItemName").innerHTML = Item;
    document.getElementById("price").innerHTML = price;
    document.getElementById("priceFinal").innerHTML = "Subtotal: R " + 3800 * multi;

}
btn6.onclick = function () {
    modal.style.display = "block";
    var Item = "CHOC LEATHER BAG";
    var price = "R3850.00";
    var multi = document.getElementById("num").Value;
    document.getElementById("ItemName").innerHTML = Item;
    document.getElementById("price").innerHTML = price;
    document.getElementById("priceFinal").innerHTML = "Subtotal: R " + 3800 * multi;

}
btn7.onclick = function () {
    modal.style.display = "block";
    var Item = "BROWN LEATHER BAG";
    var price = "2775.00";
    var multi = document.getElementById("num").Value;
    document.getElementById("ItemName").innerHTML = Item;
    document.getElementById("price").innerHTML = price;
    document.getElementById("priceFinal").innerHTML = "Subtotal: R " + 3800 * multi;

}
btn8.onclick = function () {
    modal.style.display = "block";
    var Item = "SA BIKER JACKET";
    var price = "R3950.00";
    var multi = document.getElementById("num").Value;
    document.getElementById("ItemName").innerHTML = Item;
    document.getElementById("price").innerHTML = price;
    document.getElementById("priceFinal").innerHTML = "Subtotal: R " + 3800 * multi;

}

// Get the modal
var modal = document.getElementById("myModal");
// When the user clicks on <span>, close the modal
span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
/*End of Modal Popup*/