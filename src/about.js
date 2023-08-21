function abt() {
  const abts = document.getElementById("about");
  abts.innerHTML = ` 
    <section id="about">
    <div class="container mx-auto">
      <h2
        class="mb-2.5 mt-12 md:text-3xl text-xl font-medium leading-tight text-center text-white bg-[#10482A] rounded-full w-44 mx-auto"
      >
        About
      </h2>
    </div>

    <div class="container mx-auto rounded-3xl bg-[#10482A] py-4 w-[1100px]">
      <div class="w-[1000px] container mx-auto">
      <p class="mb-3 text-lg text-white md:text-xl text-center">KKN di Desa Wangunsari</p>
      <p class="text-white">Desa Wangunsari merupakan</p>
      <p class="mb-3 text-right text-white">Desa Wangunsari merupakan</p>
      </div>
    </div>
  </section>
    `;
}

abt();
