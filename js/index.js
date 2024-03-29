let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;
const rotateFactor = 1 / 8;

setInterval(function hideShapesOnMobile() {
  const shapes = document.querySelectorAll(".shape");

  for (let i = 0; i < shapes.length; ++i) {
    if (isMobileDevice()) {
      shapes[i].style.display = "none";
    } else {
      shapes[i].style.display = "block";
    }
  }
}, 1000);

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
  }
}

function rotateBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  for (let i = 0; i < shapes.length; ++i) {
    shapes[i].style.transform += `rotate(${event.clientX * rotateFactor}deg)`;
  }
}

function isMobileDevice() {
  return (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  );
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_jxe403y",
      "template_1zqzve5",
      event.target,
      "XPF-vqRbYXh0P65_p"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarly unavailable. Please contact me durectly on leo.durand87@gmail.com"
      );
    });
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}
