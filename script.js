let divRef = document.getElementById("color-display");
let buttonAqua = document.getElementById("aqua");
let buttonTeal = document.getElementById("teal");
let buttonPink = document.getElementById("pink");
let buttonPurple = document.getElementById("purple");
let buttonColorless = document.getElementById("colorless");

buttonAqua.onclick = function(){
    divRef.style.backgroundColor = "aqua";
    divRef.innerHTML = "aqua";
}

buttonTeal.onclick = function(){
    divRef.style.backgroundColor = "teal";
    divRef.innerHTML = "teal";
}

buttonPink.onclick = function(){
    divRef.style.backgroundColor = "pink";
    divRef.innerHTML = "pink";
}

buttonPurple.onclick = function(){
    divRef.style.backgroundColor = "purple";
    divRef.innerHTML = "purple";
}

buttonColorless.onclick = function(){
    divRef.style.backgroundColor = "white";
    divRef.innerHTML = "colorless";
}