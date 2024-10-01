function navbar() {
  var x = document.getElementById("navbarID");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

var modal = document.getElementById("myModal");

// Get the button that opens the modal

// When the user clicks the button, open the modal
window.onload = function () {
  if (window.location.search === "?msg=0") {
    modal.children[0].children[0].innerHTML = "Sikeres regisztráció!";
    modal.style.display = "block";
    setTimeout(() => {
      modal.style.display = "none";
      window.location.replace(window.location.href.split("?")[0]);
    }, 3000);
  } else if (window.location.search === "?msg=1") {
    modal.children[0].children[0].innerHTML =
      "A megadott email cím nem megfelelő vagy már regisztrálva van!";
    modal.style.display = "block";
    setTimeout(() => {
      modal.style.display = "none";
      window.location.replace(window.location.href.split("?")[0]);
    }, 3000);
  }
  setInterval(()=>{
    plusSlides(1)
  },4000)
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
function validate() {
  var input = document.getElementById("input").value;
  let validemail = validateEmail(input);
  document.getElementById("myBtn").disabled = !validemail;
  document
    .getElementById("myBtn")
    .classList.toggle("buttony-disabled", !validemail);
}

function back() {
  history.back();
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  dots[slideIndex+3 - 1].className += " active";
  dots[slideIndex+6 - 1].className += " active";
}
