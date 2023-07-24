function carouselx() {
  const carouselHTML = `
    <div class="mx-auto" id="gallery">
      <div class="relative w-full">
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-lg sm:h-64 xl:h-80 2xl:h-96">
          <!-- Item 1 -->
          <div id="carousel-item-1" class="hidden duration-700 ease-in-out">
            <img
              src="img/kkn.jpg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <!-- Item 2 -->
          <div id="carousel-item-2" class="hidden duration-700 ease-in-out">
            <img
              src="img/kkn1.jpg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <!-- Item 3 -->
          <div id="carousel-item-3" class="hidden duration-700 ease-in-out">
            <img
              src="img/kkn2.jpg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <!-- Item 4 -->
          <div id="carousel-item-4" class="hidden duration-700 ease-in-out">
            <img
              src="img/kkn3.jpg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        <!-- Slider indicators -->
        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            id="carousel-indicator-1"
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            id="carousel-indicator-2"
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
          ></button>
          <button
            id="carousel-indicator-3"
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
          ></button>
          <button
            id="carousel-indicator-4"
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
          ></button>
        </div>
        <!-- Slider controls -->
        <button
          id="data-carousel-prev"
          type="button"
          class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="hidden">Previous</span>
          </span>
        </button>
        <button
          id="data-carousel-next"
          type="button"
          class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="hidden">Next</span>
          </span>
        </button>
      </div>
    </div>
    `;

  document.getElementById("gallery").innerHTML = carouselHTML;
}
carouselx();

function carousely() {
  const items = [
    {
      position: 0,
      el: document.getElementById("carousel-item-1"),
    },
    {
      position: 1,
      el: document.getElementById("carousel-item-2"),
    },
    {
      position: 2,
      el: document.getElementById("carousel-item-3"),
    },
    {
      position: 3,
      el: document.getElementById("carousel-item-4"),
    },
  ];

  const options = {
    defaultPosition: 1,
    interval: 3000,

    indicators: {
      activeClasses: "bg-white dark:bg-gray-800",
      inactiveClasses:
        "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",
      items: [
        {
          position: 0,
          el: document.getElementById("carousel-indicator-1"),
        },
        {
          position: 1,
          el: document.getElementById("carousel-indicator-2"),
        },
        {
          position: 2,
          el: document.getElementById("carousel-indicator-3"),
        },
        {
          position: 3,
          el: document.getElementById("carousel-indicator-4"),
        },
      ],
    },

    // callback functions
    onNext: () => {
      console.log("next slider item is shown");
    },
    onPrev: () => {
      console.log("previous slider item is shown");
    },
    onChange: () => {
      console.log("new slider item has been shown");
    },
  };

  // Function to hide all carousel items
  const hideAllItems = () => {
    items.forEach((item) => {
      item.el.classList.add("hidden");
    });
  };

  // Function to show the specified carousel item
  const showItem = (position) => {
    hideAllItems();
    items[position].el.classList.remove("hidden");
  };

  // Function to handle the carousel rotation
  const rotateCarousel = () => {
    options.defaultPosition = (options.defaultPosition + 1) % items.length;
    showItem(options.defaultPosition);
    setTimeout(rotateCarousel, options.interval);
  };

  // Initial setup: Show the first carousel item and start rotation
  showItem(options.defaultPosition);
  setTimeout(rotateCarousel, options.interval);

  document.getElementById("gallery").innerHTML = carouselHTML;
}
carousely();
