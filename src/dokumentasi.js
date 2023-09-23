function dkmnt() {
  const dkmnts = document.getElementById("dokumentasi");
  dkmnts.innerHTML = ` 
    <!-- Dokumentasi -->
    <section id="dokumentasi">
      <div class="container mx-auto">
        <h2
          class="mb-10 mt-12 md:text-3xl text-xl font-medium leading-tight text-center text-white bg-[#10482A] rounded-full w-72 mx-auto"
        >
          Dokumentasi
        </h2>
      </div>

      <div class="container mx-auto text-center items-center">
        <a href="https://www.instagram.com/kkn_desawangunsari/" target="_blank">
          <button
            type="button"
            class="text-white bg-[#10482A] hover:bg-[#10382A] focus:ring-4 focus:outline-none focus:ring-teal-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          >
            Instagram
            <svg
              class="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </a>
      </div>

      <div class="mt-2 mb-14 container mx-auto text-center items-center">
        <a href="https://drive.google.com/drive/folders/1pkgECrTVThe8Kfw5MfaRmBairbIriEwc" target="_blank">
          <button
            type="button"
            class="text-white bg-[#10482A] hover:bg-[#10382A] focus:ring-4 focus:outline-none focus:ring-teal-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          >
            Google Drive
            <svg
              class="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </a>
      </div>
    </section>
      `;
}

dkmnt();
