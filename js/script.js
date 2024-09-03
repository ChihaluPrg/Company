let nav = document.querySelector("#navArea");
let btn = document.querySelector(".togglebtn");
let news = document.querySelector(".news");
let news2 = document.querySelector(".news-item-list");

btn.onclick = () => {
    nav.classList.toggle("open")
}

news2.onclick = () => {
    news.classList.toggle("news-click")
}

