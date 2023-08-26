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
      <p class="mb-3 text-lg text-white md:text-xl text-center font-bold">Desa <span class="text-[#F4D9A6]">Wangunsari</span></p>
      <p class="text-white md:text-base text-xs py-2 px-4"><span class="font-extrabold text-[#F4D9A6]">Wangunsari</span> adalah desa di kecamatan Cisolok, Sukabumi, Jawa Barat, Indonesia. Desa ini merupakan hasil pemekaran wilayah desa Cisolok sesuai dengan Peraturan Daerah Kabupaten Sukabumi Nomor 16 Tahun 2012.</p>
      <p class="mb-3 text-right text-white md:text-base text-xs py-2 px-4">Desa <span class="font-extrabold text-[#F4D9A6]">Wangunsari</span> memiliki luas 3,70 km² dengan jumlah penduduk mencapai 1.113 jiwa (2012). Desa <span class="font-extrabold text-[#F4D9A6]">Wangunsari</span> memiliki destinasi pariwisata diantaranya Geyser Cisolok dan Curug Cierang.</p>
      </div>
    </div>
  </section>
    `;
}

abt();
