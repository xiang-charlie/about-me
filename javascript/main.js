
// days of the week greeting

let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let d = new Date();
let day = weekdays[d.getDay()];

let greeting;

let paragraph = document.getElementById('greeting-paragraph');

if(day == "Monday"){
    greeting = "Oh, it's Monday? (Gross)"
}
else if(day == "Tuesday"){
    greeting = "It's Taco Tuesday!"
}
else if(day == "Wednesday"){
    greeting = "It is Wednesday my dudes"
}
else if(day == "Thursday"){
    greeting = "Happy Thursday!"
}
else if(day == "Friday"){
    greeting = "TGIF!!"
}
else if(day == "Saturday"){
    greeting = "It's Saturday! It's the weekend!"
}
else{
    greeting = "Sunday brunch time"
}

console.log(greeting);

paragraph.textContent = greeting;



// getting a little crazy

let wiggleKitty = document.getElementById("getting-crazy");
let dancingKitty = document.getElementById("dancing-kitty");
let raveKitty = document.getElementById("rave-kitty");
let shimmyKitty = document.getElementById("shimmy-kitty");
let soloKitty = document.getElementById("solo-kitty");
let djKitty = document.getElementById("dj-kitty");
let clubKitties = document.getElementById("club-kitties");

function getting_crazy(){
  wiggleKitty.style.opacity = "1.0";
  dancingKitty.style.opacity = "1.0";
  raveKitty.style.opacity = "1.0";
  shimmyKitty.style.opacity = "1.0";
  soloKitty.style.opacity = "1.0";
  djKitty.style.opacity = "1.0";
  clubKitties.style.opacity = "1.0";
}

function no_more_crazy(){
  wiggleKitty.style.opacity = "0";
  dancingKitty.style.opacity = "0";
  raveKitty.style.opacity = "0";
  shimmyKitty.style.opacity = "0";
  soloKitty.style.opacity = "0";
  djKitty.style.opacity = "0";
  clubKitties.style.opacity = "0";
}

wiggleKitty.addEventListener("mouseover", getting_crazy);
soloKitty.addEventListener("mouseover", getting_crazy);
dancingKitty.addEventListener("mouseover", getting_crazy);
raveKitty.addEventListener("mouseover", getting_crazy);
shimmyKitty.addEventListener("mouseover", getting_crazy);
djKitty.addEventListener("mouseover", getting_crazy);
clubKitties.addEventListener("mouseover", getting_crazy);

wiggleKitty.addEventListener("mouseout", no_more_crazy);
soloKitty.addEventListener("mouseout", no_more_crazy);
dancingKitty.addEventListener("mouseout", no_more_crazy);
raveKitty.addEventListener("mouseout", no_more_crazy);
shimmyKitty.addEventListener("mouseout", no_more_crazy);
djKitty.addEventListener("mouseout", no_more_crazy);
clubKitties.addEventListener("mouseout", no_more_crazy);