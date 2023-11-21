const winkelmandje = ["Bananen", "Whiskey", "Chips", "Bonen", "Aardappelen"];


var aantalProductenElement = document.getElementById("aantalProducten");
aantalProductenElement.innerText = "Er zitten " + winkelmandje.length + " producten in uw winkelmand.";


var vierdeProductElement = document.getElementById("vierdeProduct");
vierdeProductElement.innerText = winkelmandje[3] + " staat op de vierde plek in uw winkelmand.";


winkelmandje[1] = "Bier";


function addProduct() {
    var nieuwProduct = prompt("Voer een nieuw product in:");
    winkelmandje.push(nieuwProduct);
    document.getElementById("opdracht5").innerHTML = winkelmandje;

}


var productenInfoElement = document.getElementById("productenInfo");
if (winkelmandje.length > 1) {
    productenInfoElement.innerText = "Uw producten zijn: " + winkelmandje.join(", ");
} else {
    productenInfoElement.innerText = "U heeft niet genoeg producten om te tonen.";
}


var dropCheckElement = document.getElementById("winkelmandFout");
if (winkelmandje[4] === "Drop") {
    dropCheckElement.innerText = "U heeft geen drop.";
} else {
    dropCheckElement.innerText = "U heeft wel drop!";
}


winkelmandje = winkelmandje.join(" ");
document.getElementById("alleProducten").innerText = "Uw producten zijn: " + winkelmandje;


var oudeWinkelmandElement = document.getElementById("productToegevoegd");
oudeWinkelmandElement.innerText = "Oude winkelmand: " + winkelmandje;
winkelmandje.splice(0, 2);
var nieuweWinkelmand = winkelmandje.join(", ");
oudeWinkelmandElement.innerText += "\nNieuwe winkelmand: " + nieuweWinkelmand;


winkelmandje.sort();
document.getElementById("winkelmandFout").innerText = "Gesorteerde producten: " + winkelmandje;