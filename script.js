const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

yesButton.addEventListener("click", function () {
    alert("I knew you'd wanna be mine <3333");

    window.location.href = "yesValentine.html";
});
noButton.addEventListener("click", function () {
    alert("Are you sure :(")

    let currentWidth = parseInt(yesButton.style.width, 10);
    if (isNaN(currentWidth)) {
        currentWidth = 250;
    }
    yesButton.style.width = (currentWidth+200) + "px";
    yesButton.style.height = (currentWidth+20) + "px";

    yesButton.style.transition = "width 0.3s, height 0.3s"
});