function strktr() {
  const strktrs = document.getElementById("struktur");
  strktrs.innerHTML = ` 
    <!-- Struktur -->
    <section id="struktur">
      <div class="container mx-auto">
        <h2
          class="mb-2.5 mt-12 md:text-3xl text-xl font-medium leading-tight text-center text-white bg-[#10482A] rounded-full w-48 md:w-[300px] mx-auto"
        >
          Struktur KKN
        </h2>
      </div>
      <div class="container mx-auto">
        <div class="mb-4 md:border-b">
          <div class="bg-[#10482A] rounded-3xl">
            <ul
              class="flex flex-wrap -mb-px text-sm font-medium text-center"
              id="myTab"
              data-tabs-toggle="#myTabContent"
              role="tablist"
            >
              <li class="mr-[480px]"></li>
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 rounded-t-lg"
                  id="profile-tab"
                  data-tabs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  BPH
                </button>
              </li>
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-[#10482A]"
                  id="dashboard-tab"
                  data-tabs-target="#dashboard"
                  type="button"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                >
                  Humas
                </button>
              </li>
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-[#10482A]"
                  id="settings-tab"
                  data-tabs-target="#settings"
                  type="button"
                  role="tab"
                  aria-controls="settings"
                  aria-selected="false"
                >
                  Logistik
                </button>
              </li>
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-[#10482A]"
                  id="contacts-tab"
                  data-tabs-target="#contacts"
                  type="button"
                  role="tab"
                  aria-controls="contacts"
                  aria-selected="false"
                >
                  Infokom
                </button>
              </li>
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-[#10482A]"
                  id="contacts1-tab"
                  data-tabs-target="#contacts1"
                  type="button"
                  role="tab"
                  aria-controls="contacts1"
                  aria-selected="false"
                >
                  Acara
                </button>
              </li>
              <li class="mr-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-[#10482A]"
                  id="contacts2-tab"
                  data-tabs-target="#contacts2"
                  type="button"
                  role="tab"
                  aria-controls="contacts2"
                  aria-selected="false"
                >
                  Konsumsi
                </button>
              </li>
              <li role="presentation">
                <button
                  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-[#10482A]"
                  id="contacts3-tab"
                  data-tabs-target="#contacts3"
                  type="button"
                  role="tab"
                  aria-controls="contacts3"
                  aria-selected="false"
                >
                  DPL
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div id="myTabContent">
          <div
            class="hidden p-4 rounded-lg"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div class="container mx-auto flex flex-wrap justify-center mt-4">
              <!-- Card 1 -->
              <div
                class="md:w-64 md:h-[500px] w-32 h-[320px] border rounded-lg shadow-2xl mr-4 mb-4"
              >
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="img/sktr/Tegar Pratama (KETUA).png"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5
                      class="mb-2 text-center text-sm font-bold tracking-tight text-black"
                    >
                      Tegar Pratama
                    </h5>
                  </a>
                  <p class="mb-3 text-center text-xs text-black">
                    Ketua Pelaksana
                  </p>
                </div>
              </div>

              <!-- Card 2 -->
              <div
                class="md:w-64 md:h-[500px] w-32 h-[320px] border rounded-lg shadow-2xl mr-4 mb-4"
              >
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="img/sktr/Putriana Febryani (BENDAHARA).png"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5
                      class="mb-2 text-center text-sm font-bold tracking-tight text-black"
                    >
                      Putriana Febryani
                    </h5>
                  </a>
                  <p class="mb-3 text-center text-xs text-black">Bendahara</p>
                </div>
              </div>

              <!-- Card 3 -->
              <div
                class="md:w-64 md:h-[500px] w-32 h-[320px] border rounded-lg shadow-2xl mr-4 mb-4"
              >
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="img/sktr/Yulva Cintakandida (SEKRETARIS).png"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5
                      class="mb-2 text-center text-sm font-bold tracking-tight text-black"
                    >
                      Yulva Cintakandida
                    </h5>
                  </a>
                  <p class="mb-3 text-center text-xs text-black">
                    Sekretaris 1
                  </p>
                </div>
              </div>

              <!-- Card 4 -->
              <div
                class="md:w-64 md:h-[500px] w-32 h-[320px] border rounded-lg shadow-2xl mr-4 mb-4"
              >
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="img/sktr/Ai Dina Agustin (SEKRETARIS).png"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5
                      class="mb-2 text-center text-sm font-bold tracking-tight text-black"
                    >
                      Ai Dina Agustin
                    </h5>
                  </a>
                  <p class="mb-3 text-center text-xs text-black">
                    Sekretaris 2
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="hidden p-4 rounded-lg"
            id="dashboard"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
            <div class="container mx-auto flex flex-wrap justify-center mt-4">
              <!-- Card 1 -->
              <div
                class="md:w-64 md:h-[500px] w-32 h-[320px] border rounded-lg shadow-2xl mr-4 mb-4"
              >
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="img/sktr/Siti Rahmawati (DIVISI HUMAS).png"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5
                      class="mb-2 text-center text-sm font-bold tracking-tight text-black"
                    >
                      Siti Rahmawati
                    </h5>
                  </a>
                  <p class="mb-3 text-center text-xs text-black">
                    Divisi Humas
                  </p>
                </div>
              </div>

              <!-- Card 2 -->
              <div
                class="md:w-64 md:h-[500px] w-32 h-[320px] border rounded-lg shadow-2xl mr-4 mb-4"
              >
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="img/sktr/Arya Rexa (DIVISI HUMAS).png"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5
                      class="mb-2 text-center text-sm font-bold tracking-tight text-black"
                    >
                      Arya Rexa
                    </h5>
                  </a>
                  <p class="mb-3 text-center text-xs text-black">
                    Divisi Humas
                  </p>
                </div>
              </div>

              <!-- Card 3 -->
              <div
                class="md:w-64 md:h-[500px] w-32 h-[320px] border rounded-lg shadow-2xl mr-4 mb-4"
              >
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="img/sktr/Aprian Dani Rahmatullah (DIVISI HUMAS).png"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5
                      class="mb-2 text-center text-sm font-bold tracking-tight text-black"
                    >
                      Aprian Dani Rahmatullah
                    </h5>
                  </a>
                  <p class="mb-3 text-center text-xs text-black">
                    Divisi Humas
                  </p>
                </div>
              </div>

              <!-- Card 4 -->
              <div
                class="md:w-64 md:h-[500px] w-32 h-[320px] border rounded-lg shadow-2xl mr-4 mb-4"
              >
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="img/sktr/Raka Adrieal Maheza (DIVISI HUMAS).png"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5
                      class="mb-2 text-center text-sm font-bold tracking-tight text-black"
                    >
                      Raka Adrieal Maheza
                    </h5>
                  </a>
                  <p class="mb-3 text-center text-xs text-black">
                    Divisi Humas
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="hidden p-4 rounded-lg"
            id="settings"
            role="tabpanel"
            aria-labelledby="settings-tab"
          >
            <div class="container mx-auto flex flex-wrap justify-center mt-4">
              <!-- Card 1 -->
              <div
                class="md:w-64 md:h-[500px] w-32 h-[320px] border rounded-lg shadow-2xl mr-4 mb-4"
              >
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="img/sktr/Moch. Raditya Pratama (DIVISI LOGISTIK).png"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5
                      class="mb-2 text-center text-sm font-bold tracking-tight text-black"
                    >
                      Raditya Pratama
                    </h5>
                  </a>
                  <p class="mb-3 text-center text-xs text-black">
                    Divisi Logistik
                  </p>
                </div>
              </div>

              <!-- Card 2 -->
              <div
                class="md:w-64 md:h-[500px] w-32 h-[320px] border rounded-lg shadow-2xl mr-4 mb-4"
              >
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="img/sktr/Akbar Ilham Perhan (DIVISI LOGISTIK).png"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5
                      class="mb-2 text-center text-sm font-bold tracking-tight text-black"
                    >
                      Akbar Ilham Perhan
                    </h5>
                  </a>
                  <p class="mb-3 text-center text-xs text-black">
                    Divisi Logistik
                  </p>
                </div>
              </div>

              <!-- Card 3 -->
              <div
                class="md:w-64 md:h-[500px] w-32 h-[320px] border rounded-lg shadow-2xl mr-4 mb-4"
              >
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="img/sktr/Rivaldi Tresna Oktriadi (DIVISI LOGISTIK).png"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5
                      class="mb-2 text-center text-sm font-bold tracking-tight text-black"
                    >
                      Rivaldi Tresna Oktriadi
                    </h5>
                  </a>
                  <p class="mb-3 text-center text-xs text-black">
                    Divisi Logistik
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="hidden p-4 rounded-lg"
            id="contacts"
            role="tabpanel"
            aria-labelledby="contacts-tab"
          >
            <div class="container mx-auto flex flex-wrap justify-center mt-4">
              <!-- Card 1 -->
              <div
                class="md:w-64 md:h-[500px] w-32 h-[320px] border rounded-lg shadow-2xl mr-4 mb-4"
              >
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="img/sktr/Rifky Wahyudi (DIVISI INFOKOM).png"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5
                      class="mb-2 text-center text-sm font-bold tracking-tight text-black"
                    >
                      Rifky Wahyudi
                    </h5>
                  </a>
                  <p class="mb-3 text-center text-xs text-black">
                    Divisi Infokom
                  </p>
                </div>
              </div>

              <!-- Card 2 -->
              <div
                class="md:w-64 md:h-[500px] w-32 h-[320px] border rounded-lg shadow-2xl mr-4 mb-4"
              >
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="img/sktr/Restu Bumi Ryan Ramdhan (DIVISI INFOKOM).png"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5
                      class="mb-2 text-center text-sm font-bold tracking-tight text-black"
                    >
                      Restu Bumi Ryan Ramadhan
                    </h5>
                  </a>
                  <p class="mb-3 text-center text-xs text-black">
                    Divisi Infokom
                  </p>
                </div>
              </div>

              <!-- Card 3 -->
              <div
                class="md:w-64 md:h-[500px] w-32 h-[320px] border rounded-lg shadow-2xl mr-4 mb-4"
              >
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="img/sktr/Sarah Puspitasari (DIVISI INFOKOM).png"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5
                      class="mb-2 text-center text-sm font-bold tracking-tight text-black"
                    >
                      Sarah Puspitasari
                    </h5>
                  </a>
                  <p class="mb-3 text-center text-xs text-black">
                    Divisi Infokom
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="hidden p-4 rounded-lg"
            id="contacts1"
            role="tabpanel"
            aria-labelledby="contacts1-tab"
          >
            <div class="container mx-auto flex flex-wrap justify-center mt-4">
              <!-- Card 1 -->
              <div
                class="md:w-64 md:h-[500px] w-32 h-[320px] border rounded-lg shadow-2xl mr-4 mb-4"
              >
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="img/sktr/Alief Wahyu Nugraha (DIVISI ACARA).png"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5
                      class="mb-2 text-center text-sm font-bold tracking-tight text-black"
                    >
                      Alief Wahyu Nugraha
                    </h5>
                  </a>
                  <p class="mb-3 text-center text-xs text-black">
                    Divisi Acara
                  </p>
                </div>
              </div>

              <!-- Card 2 -->
              <div
                class="md:w-64 md:h-[500px] w-32 h-[320px] border rounded-lg shadow-2xl mr-4 mb-4"
              >
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="img/sktr/Siti Nadhiya Ulhaq (DIVISI ACARA).png"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5
                      class="mb-2 text-center text-sm font-bold tracking-tight text-black"
                    >
                      Siti Nadhiya Ulhaq
                    </h5>
                  </a>
                  <p class="mb-3 text-center text-xs text-black">
                    Divisi Acara
                  </p>
                </div>
              </div>

              <!-- Card 3 -->
              <div
                class="md:w-64 md:h-[500px] w-32 h-[320px] border rounded-lg shadow-2xl mr-4 mb-4"
              >
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="img/sktr/Nabila Fitria (DIVISI ACARA).png"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5
                      class="mb-2 text-center text-sm font-bold tracking-tight text-black"
                    >
                      Nabila Fitria
                    </h5>
                  </a>
                  <p class="mb-3 text-center text-xs text-black">
                    Divisi Acara
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="hidden p-4 rounded-lg"
            id="contacts2"
            role="tabpanel"
            aria-labelledby="contacts2-tab"
          >
            <div class="container mx-auto flex flex-wrap justify-center mt-4">
              <!-- Card 1 -->
              <div
                class="md:w-64 md:h-[500px] w-32 h-[320px] border rounded-lg shadow-2xl mr-4 mb-4"
              >
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="img/sktr/Leni Fajria (DIVISI KONSUMSI).png"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5
                      class="mb-2 text-center text-sm font-bold tracking-tight text-black"
                    >
                      Leni Fajria
                    </h5>
                  </a>
                  <p class="mb-3 text-center text-xs text-black">
                    Divisi Konsumsi
                  </p>
                </div>
              </div>

              <!-- Card 2 -->
              <div
                class="md:w-64 md:h-[500px] w-32 h-[320px] border rounded-lg shadow-2xl mr-4 mb-4"
              >
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="img/sktr/Fitriyani Sri Wahyuni (DIVISI KONSUMSI).png"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5
                      class="mb-2 text-center text-sm font-bold tracking-tight text-black"
                    >
                      Fitryani Sri Wahyuni
                    </h5>
                  </a>
                  <p class="mb-3 text-center text-xs text-black">
                    Divisi Konsumsi
                  </p>
                </div>
              </div>

              <!-- Card 3 -->
              <div
                class="md:w-64 md:h-[500px] w-32 h-[320px] border rounded-lg shadow-2xl mr-4 mb-4"
              >
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="img/sktr/Arigi Bukhoeri (DIVISI KONSUMSI).png"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5
                      class="mb-2 text-center text-sm font-bold tracking-tight text-black"
                    >
                      Arigi Bukhoeri
                    </h5>
                  </a>
                  <p class="mb-3 text-center text-xs text-black">
                    Divisi Konsumsi
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="hidden p-4 rounded-lg"
            id="contacts3"
            role="tabpanel"
            aria-labelledby="contacts3-tab"
          >
            <div class="container mx-auto flex flex-wrap justify-center mt-4">
              <!-- Card 1 -->
              <div
                class="md:w-64 md:h-[500px] w-32 h-[350px] border rounded-lg shadow-2xl mr-4 mb-4"
              >
                <a href="#">
                  <img
                    class="rounded-t-lg"
                    src="img/sktr/Firman Mutaqin (DOSEN PEMBIMBING LAPANGAN).png"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5
                      class="mb-2 text-center text-sm font-bold tracking-tight text-black"
                    >
                      Firman Mutaqin S.Ds, M.Ds
                    </h5>
                  </a>
                  <p class="mb-3 text-center text-xs text-black">
                    Ketua Pelaksana
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      `;
}

strktr();
