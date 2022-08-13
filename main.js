const submitButton = document.getElementById("submit");
const ratingButtons = document.getElementsByClassName("rating-button");
const ratingCard = document.getElementById("rating");
const thanksCard = document.getElementById("thanks");
const ratingSpan = document.getElementById("chosen-rating");
var rating = null;

submitButton.disabled = true
for (let i = 0; i < ratingButtons.length; i++){
    ratingButtons[i].onclick = () => {
        submitButton.disabled = false
        rating=ratingButtons[i].innerHTML
    }
}

submitButton.onclick = () => {
    if (rating != null) {
        ratingCard.style.display = "none"
        thanksCard.style.display = "inline"
        ratingSpan.innerHTML = rating
    }
}