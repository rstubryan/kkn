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
        <p class="mb-3 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          odit dignissimos explicabo inventore perspiciatis quis quibusdam
          ipsum vel? Earum dolorem dicta vitae aperiam animi vero velit itaque
          quas quaerat vel.
        </p>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div class="col-span-2">
            <p class="mb-3 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur incidunt repellat fugiat vitae, numquam nisi quam
              fuga harum unde quaerat quae, veniam, ullam deserunt autem cum
              minima laborum voluptatem dolore?
            </p>
            <p class="mb-3 text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Mollitia, quia? Fugit dolores vero quis quasi. Earum magnam,
              nemo temporibus aspernatur ab sapiente quae reiciendis eaque
              quas nihil, omnis quasi reprehenderit.
            </p>
          </div>
          <p class="mb-3 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            asperiores error nulla odit assumenda cum deserunt, nesciunt
            accusantium reprehenderit et velit dolores ipsa fugiat sequi
            numquam tenetur quae doloremque blanditiis.
          </p>
        </div>
        <p class="mb-3 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          quasi velit laborum adipisci consequatur molestiae. Quae culpa iste
          tenetur unde ratione nesciunt labore, cupiditate dolor temporibus
          sequi corrupti rem. Excepturi!
        </p>
      </div>
    </div>
  </section>
    `;
  }
  
  abt();