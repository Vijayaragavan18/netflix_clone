function display() {

    const sec = document.querySelector(".sec");
    const Min = document.querySelector(".Min");
    const hour = document.querySelector(".Hour");
    const day = document.querySelector(".day");
    const Upcoming_date = new Date('April,17,2027,12:02:00');
    const CurrentDate = new Date();
    const date = Upcoming_date - CurrentDate;
    const s = Math.floor(date / 1000);
    const m = Math.floor(date / 1000 / 60);
    const h = Math.floor(date / 1000 / 60 / 60);
    const d = Math.floor(date / 1000 / 60 / 60 / 24);

    sec.innerHTML = zero(s);
    Min.innerHTML = zero(m);
    day.innerHTML = zero(d);
    hour.innerHTML = zero(h);
    function zero(num) {
        return num < 0 ? "00" : num;
    }
}
setInterval(display, 500);

// ! accordion


const acc = document.querySelectorAll(".faq_content");
acc.forEach((item, value) => {
    const head = item.querySelector(".acc_head");
    head.addEventListener("click", () => {
        item.classList.toggle("open");
        let head = item.querySelector(".dis");
        if (item.classList.contains("open")) {
            head.style.height = `${head.scrollHeight}px`;
            item.querySelector("i").classList.replace("fa-plus", "fa-minus");
        }
        else {
            head.style.height = '0px';
            item.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
        MyFun(value);
    })
});
function MyFun(values) {
    acc.forEach((ind, ind2) => {
        if (values != ind2) {
            ind.classList.remove("open");
            let s = ind.querySelector(".dis");
            s.style.height = "0px";
            ind.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
    })
}

// ? Countdown ///


