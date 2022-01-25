const menu = document.querySelector(".menu");
const main = document.getElementById("main");
const footer = document.getElementById("footer");
//let support_value = JSON.parse(data);
//let value = support_value[0].value;
let value = Math.floor(Math.random() * 1000 + 5000);
let section = document.querySelector("#section_1");
let section2 = document.querySelector("#section_2");
let section3 = document.querySelector("#section_3");
let h = section.clientHeight;
let h2 = section2.clientHeight;
let session = 0;
let once = 0;

function category(){
  if(once==1){
    return;
  }
  var textWrapper = document.querySelector('.ml3');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    setTimeout(() => {
      textWrapper.style.opacity = 1;
    }, 200);
    anime.timeline({loop: false})
    .add({
      targets: '.ml3 .letter',
      opacity: [0,1],
      easing: "easeInOutQuad",
      duration: 1250,
      delay: (el, i) => 150 * (i+1)
    });
  once++;
}

function loading() {
  document.body.style.animation = "fade 1.5s ease-in-out";
  setTimeout(() => {
    document.body.style.animation = "none";
  }, 1499);
}

function sticky() {
  menu.classList.add("sticky", window.scrollY >= 1);
  if (scrollY > h + h2) {
    menu.classList.remove("sticky");
  }
  if (scrollY > 2 * h - 100) {
    menu.classList.remove("sticky");
  }
  if (scrollY < 2 * (h + h2) - 100) {
    menu.classList.add("sticky");
  }
  if (scrollY > h + h2 - 100 && scroll < 3 * h2) {
    menu.classList.remove("sticky");
  }
  if (scrollY > 2 * h - 100 && scrollY < 3 * h - 100) {
    menu.classList.remove("sticky");
  }
  if (scroll < 3 * h2) {
    menu.classList.remove("sticky");
  }
  if (window.scrollY == 0) {
    menu.classList.remove("sticky");
  }
}

function count() {
  const counters = document.querySelectorAll(".text_amount");
  let speed = 25;

  if (session == 1) {
    return;
  }

  setTimeout(() => {
    counters.forEach((counter) => {
      const update_counter = () => {
        const count = +counter.innerText;
        const velo = Math.floor(value / speed);

        if (count < value) {
          speed += 3;
          counter.innerText = count + velo;
          setTimeout(update_counter, 1);
        } else {
          counter.innerText = value;
        }
      };

      update_counter();
    });
  }, 500);
  session++;
}

function controlKeydown(event){
  if (event.defaultPrevented) {
    return
  }
  switch (event.key) {
    case "w":
      p1.direction = 1
    break
    case "s":
      p1.direction = -1
    break
    case "Up":
    case "ArrowUp":
      p2.direction = 1
    break
    case "Down":
    case "ArrowDown":
      p2.direction = -1
    break
    case " ":
    case "Spacebar":
      app.paused = !app.paused
    break
    default:
      return
  }
  event.preventDefault();
}

window.onload = loading();
window.addEventListener("scroll", count);
window.addEventListener("scroll", sticky);
section3.addEventListener("mouseover", category);
window.addEventListener("keydown", function (event) {
  controlKeydown(event)
}, true)
