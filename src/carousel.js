function car() {
  const cars = document.getElementById("carousel");
  cars.innerHTML = ` 
    <!-- Carousel -->
    <section id="carousel">
      <div
        id="default-carousel"
        class="relative w-full mx-auto"
        data-carousel="slide"
      >
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden md:h-[700px]">
          <!-- Items -->
          ${generateCarouselItems(30)} 
        </div>
        <!-- Slider indicators -->
        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          ${generateSlideIndicators(30)} 
        </div>
        <!-- Slider controls -->
        <button
          type="button"
          class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <!-- Previous button content -->
        </button>
        <button
          type="button"
          class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <!-- Next button content -->
        </button>
      </div>
    </section>
  `;
}

function generateCarouselItems(count) {
  let itemsHTML = "";
  for (let i = 1; i <= count; i++) {
    itemsHTML += `
      <!-- Item ${i} -->
      <div class="hidden duration-300 ease-in-out" data-carousel-item>
        <img
          src="img/${i}.jpg"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
    `;
  }
  return itemsHTML;
}

function generateSlideIndicators(count) {
  let indicatorsHTML = "";
  for (let i = 0; i < count; i++) {
    indicatorsHTML += `
      <button
        type="button"
        class="w-3 h-3 rounded-full hidden md:block"
        aria-current="${i === 0 ? "true" : "false"}"
        aria-label="Slide ${i + 1}"
        data-carousel-slide-to="${i}"
      ></button>
    `;
  }
  return indicatorsHTML;
}

car();

const carousel = document.querySelector("[data-carousel]");
const carouselItems = document.querySelectorAll("[data-carousel-item]");
const prevButton = document.querySelector("[data-carousel-prev]");
const nextButton = document.querySelector("[data-carousel-next]");
const slideIndicators = document.querySelectorAll("[data-carousel-slide-to]");

let currentIndex = 0;

// Function to show the current slide
function showSlide(index) {
  carouselItems.forEach((item) => item.classList.add("hidden"));
  carouselItems[index].classList.remove("hidden");

  slideIndicators.forEach((indicator) =>
    indicator.setAttribute("aria-current", "false")
  );
  slideIndicators[index].setAttribute("aria-current", "true");
}

// Function to go to the previous slide
function prevSlide() {
  currentIndex =
    (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showSlide(currentIndex);
}

// Function to go to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showSlide(currentIndex);
}

// Add click event listeners to previous and next buttons
prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

// Add click event listeners to slide indicators
slideIndicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

// Initialize the carousel by showing the first slide
showSlide(currentIndex);
