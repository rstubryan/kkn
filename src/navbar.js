function navi() {
  const navbarHTML = `
  <div id="dropdown">
    <nav class="border-gray-200 bg-[#10482A] drop-shadow-xl sticky">
        <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
        >
        <a href="index.html" class="flex items-center">
            <img src="img/logo.png" class="h-8 mr-3" alt="KKN Logo" />
            <div class="md:text-2xl text-lg">
            <span
                class="self-center font-semibold whitespace-nowrap text-white hover:text-[#F4D9A6]"
                >KKN Desa Wangunsari</span
            >
            </div>
        </a>
        <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-[#F4D9A6] focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
        >
            <span class="sr-only">Open main menu</span>
            <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
            >
            <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
            />
            </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul
            class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 text-white"
            >
            <li>
                <a
                href="#dropdown"
                class="block py-2 pl-3 pr-4 text-[#10482A] bg-[#F4D9A6] rounded md:bg-transparent md:text-[#F4D9A6] hover:text-white md:p-0"
                aria-current="page"
                >Home</a
                >
            </li>
            <li>
                <a
                href="#about"
                class="block py-2 pl-3 pr-4 text-white rounded bg-[#10482A] md:hover:bg-transparent md:border-0 md:hover:text-[#F4D9A6] md:p-0"
                >About</a
                >
            </li>
            </li>
            <li>
                <a
                href="#struktur"
                class="block py-2 pl-3 pr-4 text-white rounded bg-[#10482A] md:hover:bg-transparent md:border-0 md:hover:text-[#F4D9A6] md:p-0"
                >Struktur</a
                >
            </li>
            <li>
                <a
                href="#post"
                class="block py-2 pl-3 pr-4 text-white rounded bg-[#10482A] md:hover:bg-transparent md:border-0 md:hover:text-[#F4D9A6] md:p-0"
                >Post</a
                >
            </li>
            <li>
                <a
                href="#dokumentasi"
                class="block py-2 pl-3 pr-4 text-white rounded bg-[#10482A] md:hover:bg-transparent md:border-0 md:hover:text-[#F4D9A6] md:p-0"
                >Dokumentasi</a
                >
            </li>
            </ul>
        </div>
        </div>
    </nav>
   </div>
`;

  document.getElementById("dropdown").innerHTML = navbarHTML;
}
navi();

function nav() {
  // Function to toggle the visibility of the dropdown menu
  function toggleDropdown() {
    const hamburger = document.getElementById("navbar-default");
    hamburger.classList.toggle("hidden");
  }

  // Get the hamburger button element
  const hamburgerButton = document.querySelector(
    '[data-collapse-toggle="navbar-default"]'
  );

  // Add click event listener to the hamburger button
  hamburgerButton.addEventListener("click", toggleDropdown);

  // nav(); // Commented out to avoid calling the function twice
}
nav();
