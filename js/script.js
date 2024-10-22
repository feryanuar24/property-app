// All: Navbar fixed when scroll
window.onscroll = () => {
  let navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
};

// All: Navbar toggle
const toggleNavbar = () => {
  let navbar = document.getElementById("nav-list");
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "block";
  }
};

// Fasilitas: Data
const fasilitasData = [
  {
    title: "Keamanan Terjamin",
    detail:
      "Keamanan adalah prioritas kami. Kami menyediakan CCTV di seluruh area perumahan untuk memastikan keamanan dan kenyamanan Anda. Selain itu, kami juga memiliki petugas keamanan yang berjaga 24 jam setiap hari untuk memberikan perlindungan ekstra bagi Anda dan keluarga.",
    img: "assets/images/keamanan.jpg",
  },
  {
    title: "Kolam Renang Luas",
    detail:
      "Nikmati kolam renang luas yang kami sediakan. Kolam renang kami dilengkapi dengan fasilitas yang memadai, seperti tempat duduk yang nyaman di sekitar kolam, pancuran air, dan area bermain untuk anak-anak. Anda dan keluarga dapat bersantai dan menikmati waktu berkualitas bersama di kolam renang kami yang bersih dan aman.",
    img: "assets/images/kolam-renang.jpg",
  },
  {
    title: "Pusat Kebugaran Modern",
    detail:
      "Anda dapat berolahraga di pusat kebugaran modern yang kami sediakan. Pusat kebugaran kami dilengkapi dengan alat-alat olahraga yang lengkap dan canggih, termasuk treadmill, sepeda statis, angkat beban, dan berbagai peralatan kardio lainnya Selain itu, kami juga menyediakan instruktur kebugaran yang berpengalaman untuk membantu Anda mencapai tujuan kebugaran Anda. Dengan suasana yang nyaman dan fasilitas yang memadai, pusat kebugaran kami adalah tempat yang sempurna untuk menjaga kesehatan dan kebugaran Anda.",
    img: "assets/images/pusat-kebugaran.jpg",
  },
  {
    title: "Restoran dan Cafe",
    detail:
      "Anda dapat menikmati makanan dan minuman di restoran dan cafe yang kami sediakan. Restoran dan cafe kami menyediakan berbagai macam makanan dan minuman, mulai dari hidangan lokal yang lezat hingga hidangan internasional yang menggugah selera. Kami juga menawarkan berbagai pilihan minuman, termasuk kopi, teh, jus segar, dan minuman beralkohol. Dengan suasana yang nyaman dan pelayanan yang ramah, restoran dan cafe kami adalah tempat yang sempurna untuk bersantai dan menikmati waktu bersama keluarga dan teman-teman.",
    img: "assets/images/resto.jpg",
  },
  {
    title: "Ruang Terbuka Hijau",
    detail:
      "Nikmati ruang terbuka hijau yang kami sediakan. Ruang terbuka hijau kami sangat luas dan nyaman untuk berjalan-jalan atau berolahraga. Anda dapat menikmati udara segar dan pemandangan yang indah di sekitar area perumahan. Ruang terbuka hijau ini juga dilengkapi dengan jalur jogging, area bermain anak, dan tempat duduk yang nyaman untuk bersantai. Ini adalah tempat yang sempurna untuk menghabiskan waktu bersama keluarga dan teman-teman, serta menikmati keindahan alam di lingkungan yang aman dan terawat.",
    img: "assets/images/ruang-terbuka.jpg",
  },
];

// Fasilitas: Container
const fasilitasList = document.getElementById("fasilitas-list");

// Fasilitas: Render Article
const renderFasilitasArticle = () => {
  fasilitasData.forEach((fasilitas, index) => {
    fasilitasList.innerHTML += `
        ${
          index % 2 === 0
            ? `<article class="fasilitas-item">`
            : `<article class="fasilitas-item flex-direction-row-reverse">`
        }
            <div>
              <h3 class="fasilitas-item-title">${fasilitas.title}</h3>
                <p class="fasilitas-item-desc">
                ${fasilitas.detail}
                </p>
            </div>
            <figure>
              <img
                src=${fasilitas.img}
                alt=${fasilitas.title}
                class="fasilitas-img"
              />
            </figure>
          </article>
          `;
  });
};

// Tipe Rumah: Data
const tipeRumahData = [
  {
    tipe: "Rumah Minimalis",
    detail:
      "Rumah minimalis adalah rumah yang memiliki desain sederhana dan tidak terlalu banyak ornamen. Rumah minimalis biasanya memiliki warna netral seperti putih, abu-abu, atau cokelat. Rumah minimalis cocok untuk Anda yang menyukai desain rumah yang simpel dan modern.",
    luas_bangunan: "100",
    luas_tanah: "150",
    kamar_mandi: "2",
    kamar_tidur: "3",
    img: "/assets/images/rumah-tipe-1.png",
    harga: "700",
    carport: "1",
    kanopi: "Free",
    pompa_air: "Free",
    toren_air: "Free",
  },
  {
    tipe: "Rumah Klasik",
    detail:
      "Rumah klasik memiliki desain yang elegan dan mewah dengan ornamen yang detail. Warna yang sering digunakan adalah warna-warna hangat seperti krem, cokelat, dan emas. Rumah klasik cocok untuk Anda yang menyukai desain rumah yang mewah dan elegan.",
    luas_bangunan: "200",
    luas_tanah: "300",
    kamar_mandi: "3",
    kamar_tidur: "4",
    img: "/assets/images/rumah-tipe-2.png",
    harga: "1000",
    carport: "2",
    kanopi: "Free",
    pompa_air: "Free",
    toren_air: "Free",
  },
  {
    tipe: "Rumah Konteporer",
    detail:
      "Rumah kontemporer memiliki desain yang mengikuti tren masa kini dengan perpaduan antara elemen modern dan tradisional. Warna yang digunakan biasanya adalah warna-warna netral dengan aksen warna cerah. Rumah kontemporer cocok untuk Anda yang menyukai desain rumah yang up-to-date.",
    luas_bangunan: "150",
    luas_tanah: "200",
    kamar_mandi: "2",
    kamar_tidur: "3",
    img: "/assets/images/rumah-tipe-3.png",
    harga: "800",
    carport: "2",
    kanopi: "Free",
    pompa_air: "Free",
    toren_air: "Free",
  },
  {
    tipe: "Rumah Skadinavia",
    detail:
      "Rumah skandinavia memiliki desain yang sederhana namun fungsional dengan penggunaan warna-warna terang seperti putih dan pastel. Rumah skandinavia cocok untuk Anda yang menyukai desain rumah yang minimalis namun tetap nyaman.",
    luas_bangunan: "120",
    luas_tanah: "180",
    kamar_mandi: "2",
    kamar_tidur: "3",
    img: "/assets/images/rumah-tipe-4.png",
    harga: "900",
    carport: "1",
    kanopi: "Free",
    pompa_air: "Free",
    toren_air: "Free",
  },
];

// Tipe Rumah: Container
const allTipeRumahContainer = document.getElementById(
  "all-tipe-rumah-container"
);

// Tipe Rumah: Render Article
const renderTipeRumahArticle = () => {
  tipeRumahData.forEach((tipeRumah, index) => {
    allTipeRumahContainer.innerHTML += `
        <article class="tipe-rumah-article" id="tipe-rumah-article">
          <div>
            <h3 class="tipe-rumah-article-title">${tipeRumah.tipe}</h3>
            <p>
              ${tipeRumah.detail}
            </p>
            <div class="tipe-rumah-container-group">
              <div class="tipe-rumah-container-item">
                <i class="fa-solid fa-building tipe-rumah-icon"></i>
                <div>
                  <h4>Luas Bangunan</h4>
                  <p>${tipeRumah.luas_bangunan} m<sup>2</sup></p>
                </div>
              </div>
              <div class="tipe-rumah-container-item">
                <i class="fa-solid fa-landmark tipe-rumah-icon"></i>
                <div>
                  <h4>Luas Tanah</h4>
                  <p>${tipeRumah.luas_tanah} m<sup>2</sup></p>
                </div>
              </div>
              <div class="tipe-rumah-container-item">
                <i class="fa-solid fa-restroom tipe-rumah-icon"></i>
                <div>
                  <h4>Kamar Mandi</h4>
                  <p>${tipeRumah.kamar_mandi}</p>
                </div>
              </div>
              <div class="tipe-rumah-container-item">
                <i class="fa-solid fa-bed tipe-rumah-icon"></i>
                <div>
                  <h4>Kamar Tidur</h4>
                  <p>${tipeRumah.kamar_tidur}</p>
                </div>
              </div>
            </div>
            <button class="btn-selengkapnya" onclick="detailRumah('${tipeRumah.tipe
              .toLowerCase()
              .replace(/\s+/g, "-")}')">Selengkapnya</button>
          </div>
          <figure>
          ${
            index % 2 === 0
              ? `<img
              src=${tipeRumah.img}
              alt=${tipeRumah.tipe}
              class="tipe-rumah-img ml"
            />`
              : `
            <img
              src=${tipeRumah.img}
              alt=${tipeRumah.tipe}
              class="tipe-rumah-img mr"
            />`
          }
          </figure>
        </article>
          `;
  });
};

// Detail Rumah: Redirect
const detailRumah = (tipe) => {
  window.location.href = `detail-rumah.html?tipe=${tipe}`;
};

// Detail Rumah: Get URL Parameter
const getParameterByName = (name) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
};

// Detail Rumah: Container
const detailRumahContainer = document.getElementById("detail-rumah-container");

// Detail Rumah: Render
const renderDetailRumah = () => {
  const tipe = getParameterByName("tipe");
  const selectedTipeRumah = tipeRumahData.find(
    (tipeRumah) => tipe === tipeRumah.tipe.toLowerCase().replace(/\s+/g, "-")
  );
  const unselectedTipeRumah = tipeRumahData.filter(
    (tipeRumah) => tipe !== tipeRumah.tipe.toLowerCase().replace(/\s+/g, "-")
  );

  detailRumahContainer.innerHTML = `
    <section class="banner">
        <h2>${selectedTipeRumah.tipe}</h2>
      </section>
      <section class="detail-rumah-main">
        <img
          src="assets/images/rumah-tipe-1.png"
          alt="${selectedTipeRumah.tipe}"
          class="detail-rumah-img"
        />
        <div class="detail-rumah-text-group">
          <h3 class="detail-rumah-title">${selectedTipeRumah.tipe}</h3>
          <p>
            ${selectedTipeRumah.detail}
          </p>
          <div class="detail-rumah-grid">
            <div class="detail-rumah-item">
              <i class="fa-solid fa-dollar-sign"></i>
              <p>Harga: ${selectedTipeRumah.harga} Juta-an</p>
            </div>
            <div class="detail-rumah-item">
              <i class="fa-solid fa-landmark"></i>
              <p>Luas Tanah: ${selectedTipeRumah.luas_tanah} m<sup>2</sup></p>
            </div>
            <div class="detail-rumah-item">
              <i class="fa-solid fa-building"></i>
              <p>Luas Bangunan: ${selectedTipeRumah.luas_bangunan} Lantai</p>
            </div>
            <div class="detail-rumah-item">
              <i class="fa-solid fa-shower"></i>
              <p>Kamar Mandi: ${selectedTipeRumah.kamar_mandi}</p>
            </div>
            <div class="detail-rumah-item">
              <i class="fa-solid fa-bed"></i>
              <p>Kamar Tidur: ${selectedTipeRumah.kamar_tidur}</p>
            </div>
            <div class="detail-rumah-item">
              <i class="fa-solid fa-warehouse"></i>
              <p>Garasi: ${selectedTipeRumah.carport}</p>
            </div>
            <div class="detail-rumah-item">
              <i class="fa-solid fa-umbrella-beach"></i>
              <p>Kanopi: ${selectedTipeRumah.kanopi}</p>
            </div>
            <div class="detail-rumah-item">
              <i class="fa-solid fa-water"></i>
              <p>Pompa Air: ${selectedTipeRumah.pompa_air}</p>
            </div>
            <div class="detail-rumah-item">
              <i class="fa-solid fa-tint"></i>
              <p>Toren Air: ${selectedTipeRumah.toren_air}</p>
            </div>
          </div>
        </div>
      </section>
      <section class="detail-rumah-kontak">
        <img src="assets/images/denah.jpg" alt="Denah Rumah" class="detail-rumah-denah">
        <div class="detail-rumah-kontak-text">
          <h2 class="detail-rumah-kontak-title">Kontak</h2>
          <p>Hubungi kami untuk selanjutnya</p>
          <div class="kontak-grid">
            <a class="kontak-item" href="https://api.whatsapp.com/send/?phone=083813479771&amp;text=Hello
            ">
              <i class="fa-solid fa-phone"></i>
              <p>0812-3456-7890</p>
            </a>
            <a class="kontak-item" href="mailto:feryanuar24@gmail.com">
              <i class="fa-solid fa-envelope"></i>
              <p>feryanuar24@gmail.com</p>
            </a>
        </div>
      </section>
      <section class="lainnya">
        <h2>Tipe Rumah Lainnya</h2>
        <div class="lainnya-grid" id="lainnya-grid">
        </div>
      </section>
  `;

  const lainnyaGrid = document.getElementById("lainnya-grid");

  unselectedTipeRumah.forEach((tipeRumah) => {
    lainnyaGrid.innerHTML += `
      <div class="lainnya-item">
            <img
              src="${tipeRumah.img}"
              alt="${tipeRumah.tipe}"
              class="lainnya-img"
            />
            <a href="detail-rumah.html?tipe=${tipeRumah.tipe
              .toLowerCase()
              .replace(/\s+/g, "-")}" class="link-to-lainnya">${
      tipeRumah.tipe
    }</a>
          </div>
    `;
  });
};

// Blog: Data
const blog = [
  {
    title: "Tips Memilih Tipe Rumah yang Tepat untuk Keluarga",
    date: "12 Agustus 2021",
    img: "/assets/images/rumah-tipe-1.png",
    content:
      "Memilih tipe rumah yang tepat untuk keluarga adalah keputusan penting yang memerlukan pertimbangan matang. Pertama, tentukan kebutuhan ruang berdasarkan jumlah anggota keluarga dan aktivitas sehari-hari. Rumah dengan banyak kamar tidur dan ruang keluarga yang luas mungkin lebih cocok untuk keluarga besar. Selain itu, perhatikan juga lokasi rumah yang strategis, dekat dengan fasilitas umum seperti sekolah, rumah sakit, dan pusat perbelanjaan. Jangan lupa untuk mempertimbangkan anggaran yang tersedia dan pastikan rumah yang dipilih sesuai dengan kemampuan finansial Anda. Dengan mempertimbangkan faktor-faktor ini, Anda dapat menemukan rumah yang ideal untuk keluarga Anda.",
  },
  {
    title: "5 Faktor yang Mempengaruhi Harga Rumah",
    date: "5 Agustus 2021",
    img: "/assets/images/rumah-tipe-2.png",
    content:
      "Harga rumah dipengaruhi oleh berbagai faktor. Pertama, lokasi adalah faktor utama yang menentukan harga rumah. Rumah yang terletak di pusat kota atau dekat dengan fasilitas umum biasanya memiliki harga yang lebih tinggi. Kedua, ukuran dan luas tanah juga mempengaruhi harga. Semakin besar rumah dan tanahnya, semakin tinggi harganya. Ketiga, kondisi bangunan dan usia rumah juga berperan. Rumah baru atau yang telah direnovasi biasanya lebih mahal. Keempat, fasilitas tambahan seperti kolam renang, taman, atau garasi juga dapat meningkatkan harga rumah. Terakhir, permintaan pasar dan tren ekonomi juga mempengaruhi harga rumah. Dengan memahami faktor-faktor ini, Anda dapat lebih bijak dalam menentukan harga rumah yang sesuai.",
  },
  {
    title: "Inspirasi Desain Interior Rumah Minimalis",
    date: "29 Juli 2021",
    img: "/assets/images/rumah-tipe-3.png",
    content:
      "Desain interior rumah minimalis semakin populer karena kesederhanaannya yang elegan. Untuk menciptakan tampilan minimalis, pilihlah furnitur dengan desain sederhana dan warna netral seperti putih, abu-abu, atau hitam. Hindari penggunaan dekorasi yang berlebihan dan pilihlah aksesoris yang fungsional. Pencahayaan juga memainkan peran penting dalam desain minimalis. Gunakan pencahayaan alami sebanyak mungkin dan tambahkan lampu dengan desain modern untuk memberikan kesan hangat. Selain itu, pastikan ruang tetap rapi dan terorganisir dengan baik. Dengan mengikuti prinsip-prinsip ini, Anda dapat menciptakan interior rumah minimalis yang nyaman dan estetis.",
  },
  {
    title: "Tips Merawat Taman Rumah agar Tetap Indah",
    date: "22 Juli 2021",
    img: "/assets/images/rumah-tipe-4.png",
    content:
      "Merawat taman rumah agar tetap indah memerlukan perhatian dan perawatan rutin. Pertama, pastikan untuk menyiram tanaman secara teratur, terutama pada musim kemarau. Gunakan pupuk organik untuk memberikan nutrisi yang dibutuhkan tanaman. Selain itu, lakukan pemangkasan secara berkala untuk menjaga bentuk tanaman dan mencegah pertumbuhan yang tidak terkendali. Jangan lupa untuk membersihkan gulma yang dapat mengganggu pertumbuhan tanaman. Tambahkan elemen dekoratif seperti batu hias, patung, atau lampu taman untuk mempercantik tampilan taman. Dengan perawatan yang tepat, taman rumah Anda akan selalu terlihat indah dan asri.",
  },
];

// Blog: All Blog Container
const blogContainer = document.getElementById("all-blogs-container");

// Blog: Render Article
const renderBlogArticle = () => {
  blog.forEach((blog) => {
    blogContainer.innerHTML += `
        <article class="blog-item">
          <img
            src=${blog.img}
            alt=${blog.title}
            class="blog-img"
            width="300"
          />
          <div>
            <h3 class="blog-item-title">${blog.title}</h3>
            <p class="blog-item-date">
            <i class="fa-regular fa-calendar"></i>
            ${blog.date}
            </p>
            <p class="blog-item-content">
              ${blog.content.slice(0, 200)}...
            </p>
            <button class="btn-selengkapnya" onclick="blogDetail('${blog.title
              .toLowerCase()
              .replace(/\s+/g, "-")}')">Selengkapnya</button>
          </div>
        </article>
          `;
  });
};

// Blog: Lastest Post Container
const lastestPostContainer = document.getElementById("lastest-post");

// Blog: Render Lastest Post
const renderLastestPost = () => {
  blog.slice(0, 3).forEach((blog) => {
    lastestPostContainer.innerHTML += `
        <article class="lastest-post-item">
          <img
            src=${blog.img}
            alt=${blog.title}
            class="lastest-post-img"
            width="300"
          />
          <div>
            <h3 class="lastest-post-item-title">${blog.title}</h3>
            <p class="lastest-post-item-date">
            <i class="fa-regular fa-calendar"></i>
            ${blog.date}
            </p>
            <p class="lastest-post-item-content">
              ${blog.content.slice(0, 30)}...
            </p>
            <button class="btn-selengkapnya" onclick="blogDetail('${blog.title
              .toLowerCase()
              .replace(/\s+/g, "-")}')">Selengkapnya</button>
          </div>
        </article>
          `;
  });
};

const blogSearch = () => {
  const searchInput = document.getElementById("blog-search").value;
  const searchResult = blog.filter((blog) =>
    blog.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  blogContainer.innerHTML = "";
  searchResult.forEach((blog) => {
    blogContainer.innerHTML += `
        <article class="blog-item">
          <img
            src=${blog.img}
            alt=${blog.title}
            class="blog-img"
            width="300"
          />
          <div>
            <h3 class="blog-item-title">${blog.title}</h3>
            <p class="blog-item-date">
            <i class="fa-regular fa-calendar"></i>
            ${blog.date}
            </p>
            <p class="blog-item-content">
              ${blog.content.slice(0, 200)}...
            </p>
            <button class="btn-selengkapnya" onclick="blogDetail('${blog.title
              .toLowerCase()
              .replace(/\s+/g, "-")}')">Selengkapnya</button>
          </div>
        </article>
          `;
  });
};

// Blog: Redirect
const blogDetail = (title) => {
  window.location.href = "detail-blog.html?title=" + title;
};

// Blog: Get URL Parameter
const getBlogParameterByName = (name) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
};

// Blog: Container
const detailBlogContainer = document.getElementById("detail-blog-container");

// Blog: Render
const renderDetailBlog = () => {
  const title = getBlogParameterByName("title");
  const selectedBlog = blog.find(
    (blog) => title === blog.title.toLowerCase().replace(/\s+/g, "-")
  );

  detailBlogContainer.innerHTML = `
    <section class="banner">
        <h2>${selectedBlog.title}</h2>
      </section>
      <section class="detail-blog-main">
        <img
          src=${selectedBlog.img}
          alt=${selectedBlog.title}
          class="detail-blog-img"
        />
        <div class="detail-blog-text-group">
          <h3 class="detail-blog-title">${selectedBlog.title}</h3>
          <p>
            ${selectedBlog.content}
          </p>
        </div>
      </section>
  `;
};

// Render Tipe Rumah and Fasilitas Article
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("all-tipe-rumah-container")) {
    renderTipeRumahArticle();
  }
  if (document.getElementById("fasilitas-list")) {
    renderFasilitasArticle();
  }
  if (document.getElementById("detail-rumah-container")) {
    renderDetailRumah();
  }
  if (document.getElementById("all-blogs-container")) {
    renderBlogArticle();
  }
  if (document.getElementById("lastest-post")) {
    renderLastestPost();
  }
  if (document.getElementById("detail-blog-container")) {
    renderDetailBlog();
  }
});
