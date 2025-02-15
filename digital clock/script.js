// for hour hand 
// for one complete rotation 360deg=12h
// 60 min =30deg
// 1 min=1/2*n
// 30n+n/2

// for minute hand
// 360 deg =60min
// 1min =6 deg
// n min=n*6

// for sec hand
// 360 deg =1 min
// 6 deg
// n sec =6n

let hour_hand = document.querySelector(".hour_hand")
let min_hand = document.querySelector(".min_hand")
let sec_hand = document.querySelector(".sec_hand")
let dh = document.querySelector(".dh")
let dm = document.querySelector(".dm")
let ds = document.querySelector(".ds")
setInterval(() => {
    let time = new Date();
    let hour = time.getHours() % 12;
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let hrotation = 30 * hour + min / 2;
    let mrotation = min * 6;
    let srotation = sec * 6;
    dh.innerHTML = hour;
    dm.innerHTML = min;
    ds.innerHTML = sec;
    hour_hand.style.transform = `rotate(${hrotation}deg)`
    min_hand.style.transform = `rotate(${mrotation}deg)`
    sec_hand.style.transform = `rotate(${srotation}deg)`

});
