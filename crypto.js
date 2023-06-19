const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msgSpan = document.querySelector(".container.msg");
const coinList = document.querySelector(".ajax-section .container .coins")

form.addEventListener("submit", ()=> {
    getCoinDataFromApi();
});

const getCoinDataFromApi = () => {
    alert("Get Coin Data!!");
}