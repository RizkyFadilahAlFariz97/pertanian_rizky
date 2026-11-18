AGROFARM - PORTAL INFORMASI PERTANIAN INDONESIA
Penyusun: Rizky Fadilah Al Fariz
NIM: 2403010097
Kelas: D
Program Studi: Teknik Informatika

ISI WEBSITE (10 HALAMAN)
1. index.html       - Beranda
2. tentang.html     - Tentang AgroFarm
3. tanaman.html     - Jenis Tanaman
4. budidaya.html    - Teknik Budidaya
5. teknologi.html   - Teknologi Pertanian
6. artikel.html     - Artikel Pertanian
7. galeri.html      - Galeri
8. video.html       - Video Pertanian
9. profil.html      - Profil Mahasiswa
10. kontak.html     - Formulir Kontak

FITUR INTERAKTIF
- Navbar responsif dengan menu hamburger pada layar kecil.
- Penanda halaman aktif pada navigasi.
- Tombol kembali ke atas yang muncul setelah halaman digulir.
- Pencarian artikel sederhana pada halaman Artikel (menyaring artikel dan daftar isi).
- Navigasi antarartikel (artikel sebelumnya dan berikutnya) di setiap artikel.
- Formulir kontak dengan validasi JavaScript: pesan kesalahan per kolom (wajib diisi atau kurang panjang), fokus ke kolom pertama yang tidak valid, pesan konfirmasi, autocomplete nama/email, batas karakter, dan penghitung karakter pesan.
- Halaman beranda menampilkan statistik singkat, pratinjau galeri dan video dengan gambar lokal, serta panel ajakan menuju halaman kontak dan profil.
- Halaman profil memuat kartu identitas, statistik proyek, daftar keahlian yang dilatih, dan timeline tahapan pengerjaan.
- Halaman Tentang, Tanaman, Budidaya, Teknologi, Artikel, Galeri, dan Video memakai statistik ringkas, kartu dengan gaya seragam, foto lokal, serta panel ajakan (CTA) di bagian bawah halaman.
- Halaman artikel memakai foto dari galeri lokal (WebP), sehingga tidak bergantung pada layanan gambar eksternal.
- Empat foto komoditas di halaman Tanaman (jagung, sayuran, buah-buahan, umbi-umbian) tersimpan lokal di assets/images/tanaman sebagai WebP 1200x900. Seluruh foto website dimuat dari aset lokal; tidak ada gambar yang diambil langsung dari Unsplash saat halaman dibuka.
- FAQ halaman kontak memakai elemen details/summary sehingga dapat dibuka-tutup tanpa JavaScript.
- Animasi muncul (reveal) saat bagian halaman memasuki layar.
- Galeri 12 foto pertanian Indonesia dengan filter kategori (Semua, Lanskap, Budidaya, Hasil Panen, Teknologi), lightbox (tombol X, Esc, panah kiri/kanan keyboard, tombol sebelumnya/berikutnya), dan tombol "Muat lebih banyak" (9 foto tampil pertama).
- Halaman video: 4 video edukasi YouTube dengan filter kategori, miniatur tersimpan lokal, dan lightbox pemutar (tombol X, Esc, panah kiri/kanan, tombol sebelumnya/berikutnya, serta tautan alternatif ke YouTube).

CARA MENJALANKAN
- Ekstrak ZIP.
- Buka folder AgroFarm_Rizky di Visual Studio Code.
- Buka index.html menggunakan browser atau ekstensi Live Server.
- Koneksi internet diperlukan untuk Google Fonts, Font Awesome, dan pemutar YouTube. Seluruh foto (galeri, artikel, komoditas, dan miniatur video) tersimpan lokal sehingga tetap tampil tanpa koneksi gambar eksternal.
- Agar video YouTube dapat diputar, jalankan website melalui server lokal (mis. ekstensi Live Server di VS Code atau "python -m http.server" lalu buka http://localhost:8000). Membuka file HTML langsung dari file:// membuat pemutar YouTube menampilkan Error 153 karena tidak ada referer halaman.

SUMBER FOTO GALERI (Pexels, lisensi bebas)
Semua foto diunduh dari Pexels, dipotong ke rasio 4:3 (hero 16:9), dan disimpan sebagai WebP di assets/images/galeri/.
1.  sawah-terasering-jawa-tengah.webp  - Rosa Natasa      - https://www.pexels.com/photo/people-walking-beside-on-green-grass-field-7336009/
2.  padi-menguning-purwakarta.webp     - Tom Fisk         - https://www.pexels.com/photo/a-cropland-ready-for-harvest-5251724/
3.  kebun-teh-jawa-barat.webp           - Irma Sjachlan    - https://www.pexels.com/photo/lush-tea-plantation-in-west-java-indonesia-39904893/
4.  petani-menanam-padi-garut.webp      - Andreas Suwardy  - https://www.pexels.com/photo/farmers-planting-rice-in-lush-garut-fields-35903645/
5.  persemaian-bibit-padi.webp          - Neilstha Firman  - https://www.pexels.com/photo/farmers-planting-rice-seedlings-in-lush-field-36747614/
6.  irigasi-sawah.webp                  - Hartono Subagio  - https://www.pexels.com/photo/lush-green-rice-paddy-field-with-irrigation-35702549/
7.  panen-padi-jawa-barat.webp          - Ruyat Supriazi   - https://www.pexels.com/photo/indonesian-farmer-harvesting-rice-in-field-40015698/
8.  panen-cabai-bali.webp               - Danang DKW       - https://www.pexels.com/photo/farmers-picking-chili-in-a-farm-12470180/
9.  panen-kopi-jawa-tengah.webp         - Keri Liwi        - https://www.pexels.com/photo/asian-farmer-harvesting-coffee-in-central-java-34398909/
10. drone-pertanian.webp                - Magda Ehlers     - https://www.pexels.com/photo/advanced-agricultural-drone-spraying-crops-34182367/
11. drone-semprot-lahan.webp            - Magda Ehlers     - https://www.pexels.com/photo/agricultural-drone-spraying-crops-in-field-37288738/
12. traktor-tangan-jogja.webp           - Suryo Patriandito - https://www.pexels.com/photo/farmer-plowing-rice-field-in-jogja-indonesia-35569505/
Hero: hero-sawah-terasering.webp (1920x1080) - Rahmad Himawan - https://www.pexels.com/photo/traditional-rice-farming-in-bengkulu-indonesia-38931555/

SUMBER FOTO KOMODITAS (Pexels, lisensi bebas)
Foto diunduh dari Pexels, dipotong ke rasio 4:3, dan disimpan sebagai WebP 1200x900 di assets/images/tanaman/.
1. jagung-pexels.webp       - Mark Stebnicki             - https://www.pexels.com/photo/fresh-yellow-corns-with-dried-husk-on-ground-13094647/
2. sayuran-pexels.webp      - Muhamad Guruh Budi Hartono - https://www.pexels.com/photo/vibrant-display-of-fresh-market-vegetables-37321079/
3. buah-buahan-pexels.webp  - Ali Alcantara              - https://www.pexels.com/photo/fresh-fruits-on-wooden-crates-12203694/
4. umbi-umbian-pexels.webp  - Kontributor Pexels         - https://www.pexels.com/photo/close-up-photo-of-sweet-potatoes-in-a-red-bucket-2889366/

SUMBER VIDEO DAN MINIATUR (YouTube)
Miniatur diunduh dari i.ytimg.com (maxresdefault) dan disimpan sebagai WebP 1280x720 di assets/images/video/.
1. Menanam Padi (pasti) Untung                    - Pustaka Kementerian Pertanian - https://www.youtube.com/watch?v=wmvDwpfJzNk - menanam-padi-untung.webp
2. Pemupukan Padi dari Awal Tanam sampai Panen    - Penyuluh Pertanian Lapangan   - https://www.youtube.com/watch?v=kuPnOlFq-Jw - pemupukan-padi.webp
3. Panen Manual vs Combine Harvester              - BPS Kabupaten Ngawi           - https://www.youtube.com/watch?v=J6EDgupBdPk - panen-padi-combine.webp
4. Pemanfaatan Teknologi Drone di Pertanian Modern - BRMP Nusa Tenggara Barat   - https://www.youtube.com/watch?v=E7a3vkJ9_Io - drone-pertanian-modern.webp

CATATAN
- Seluruh halaman saling terhubung melalui navigasi dan tautan.
- CSS dan JavaScript terpusat di folder assets.
- Seluruh class dan id HTML/CSS menggunakan awalan rizky_.
- Form kontak merupakan demo front-end yang divalidasi dengan JavaScript di browser. Untuk pengiriman pesan sungguhan, hubungkan ke backend atau layanan formulir.
- Halaman artikel berisi enam artikel lengkap dengan pendahuluan, subbab, contoh penerapan, kesimpulan, bacaan lanjutan, dan navigasi antarartikel.
- Seluruh foto ilustrasi (galeri, artikel, komoditas, dan miniatur video) tersimpan lokal sebagai WebP, sehingga konten visual tetap tampil meski layanan gambar eksternal tidak dapat diakses. Foto galeri dan komoditas bersumber dari Pexels dengan lisensi bebas; kredit fotografer dicantumkan pada kartu galeri dan daftar sumber di README ini.
- Manual book PDF (Manual_Book_AgroFarm_Rizky.pdf) memuat identitas, struktur 10 halaman, desain dan navigasi, teknologi dan struktur file, contoh script, cara menjalankan, catatan fungsionalitas, checklist, ringkasan pengujian, serta sumber aset visual.
- Halaman video menampilkan 4 video edukasi dari YouTube (penanaman, pemeliharaan, panen, dan teknologi pertanian). Miniatur disimpan lokal; pemutar YouTube baru dimuat saat lightbox dibuka sehingga pemutaran membutuhkan koneksi internet.
- Palet warna mengikuti arahan: burgundy #6B1D2E, hijau #1E6B3C, emas #F2A900, latar krem #FAF7F2. Warna tersedia sebagai variabel CSS (--color-burgundy, --color-green, --color-gold, --color-cream) di assets/rizky_style.css.
- Logo dan turunannya tersimpan di assets/images/logo: agrofarm-horizontal.svg (header/footer), agrofarm-icon.svg (favicon & header layar < 480 px), agrofarm-stacked.svg (hero), agrofarm-mono.svg (cetak), favicon-32.png, apple-touch-icon.png, dan og-agrofarm.png (gambar pratinjau tautan 1200x630).
- Untuk pratinjau tautan (og:image / twitter:image) saat website diunggah, ganti path relatif pada meta tag menjadi URL absolut, misalnya https://domain-anda.com/assets/images/logo/og-agrofarm.png.
