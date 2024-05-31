
//Cards slide

const container = document.getElementById('cardContainer');
  const cardsContainer = document.querySelector('.card-container');
  const dotsContainer = document.getElementById('pagination');

  const cards = Array.from(document.querySelectorAll('.card'));

  let currentIndex = 0;
  const numVisibleCards = 3;

  function updatePagination() {
    dotsContainer.innerHTML = '';
    const numOfDots = Math.ceil(cards.length / numVisibleCards);
    for (let i = 0; i < numOfDots; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === currentIndex) {
        dot.classList.add('active');
      }
      dot.addEventListener('click', () => {
        goToSlide(i);
      });
      dotsContainer.appendChild(dot);
    }
  }

  function goToSlide(index) {
    if (index < 0 || index >= cards.length) return;

    currentIndex = index
    const offset = -currentIndex * (50 / numVisibleCards);
    cardsContainer.style.transform = `translateX(${offset}%)`;

    updatePagination();
  }

  function nextSlide() {
    const nextIndex = currentIndex + 1;
    if (nextIndex < cards.length) {
      goToSlide(nextIndex);
    }
  }

  function prevSlide() {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      goToSlide(prevIndex);
    }
  }

  updatePagination();


//cards
function addToCart(productId) {
  alert("Added product " + productId + " to cart!");
}

function addToFavorites(productId) {
  alert("Added product " + productId + " to favorites!");
}

 // Form validation using JavaScript

 document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");
  var message = document.getElementById("message");
  var valid = true;

  // Validate name
  if (name.value.trim() == "") {
      name.nextElementSibling.innerText = "Please enter your name.";
      valid = false;
  } else {
      name.nextElementSibling.innerText = "";
  }

  // Validate email
  if (email.value.trim() == "") {
      email.nextElementSibling.innerText = "Please enter your email address.";
      valid = false;
  } else {
      email.nextElementSibling.innerText = "";
  }

  // Validate phone
  if (phone.value.trim() == "") {
      phone.nextElementSibling.innerText = "Please enter your phone number.";
      valid = false;
  } else {
      phone.nextElementSibling.innerText = "";
  }

  // Validate message
  if (message.value.trim() == "") {
      message.nextElementSibling.innerText = "Please enter a message.";
      valid = false;
  } else {
      message.nextElementSibling.innerText = "";
  }

  if (valid) {
      alert("Thank you! Your message has been submitted successfully.");
      document.getElementById("contactForm").reset();
  }
});





  
