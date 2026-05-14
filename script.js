const submit = document.getElementById("submit");
const okay = document.getElementById("okay");
const popup = document.getElementById("popup");
const sfx = document.getElementById("sfx");

function openPopup(){
    popup.classList.add("animation");
    sfx.play();
}

function closePopup(){
    popup.classList.remove("animation");
}

submit.addEventListener("click", openPopup);

okay.addEventListener("click", closePopup);