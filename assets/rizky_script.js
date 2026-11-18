
document.addEventListener("DOMContentLoaded", function () {
  /* ---------- Menu navigasi mobile ---------- */
  const rizky_toggle = document.getElementById("rizky_menu_toggle");
  const rizky_links = document.getElementById("rizky_nav_links");
  if (rizky_toggle && rizky_links) {
    const rizky_toggle_icon = rizky_toggle.querySelector("i");
    const rizky_setMenu = function (rizky_open) {
      rizky_links.classList.toggle("rizky_open", rizky_open);
      rizky_toggle.setAttribute("aria-expanded", String(rizky_open));
      rizky_toggle.setAttribute("aria-label", rizky_open ? "Tutup menu navigasi" : "Buka menu navigasi");
      if (rizky_toggle_icon) {
        rizky_toggle_icon.classList.toggle("fa-bars", !rizky_open);
        rizky_toggle_icon.classList.toggle("fa-xmark", rizky_open);
      }
    };
    rizky_toggle.addEventListener("click", function () {
      rizky_setMenu(!rizky_links.classList.contains("rizky_open"));
    });
    rizky_links.querySelectorAll("a").forEach(function (rizky_link) {
      rizky_link.addEventListener("click", function () {
        rizky_setMenu(false);
      });
    });
    document.addEventListener("keydown", function (rizky_event) {
      if (rizky_event.key === "Escape" && rizky_links.classList.contains("rizky_open")) rizky_setMenu(false);
    });
    document.addEventListener("click", function (rizky_event) {
      if (!rizky_links.classList.contains("rizky_open")) return;
      if (!rizky_toggle.contains(rizky_event.target) && !rizky_links.contains(rizky_event.target)) {
        rizky_setMenu(false);
      }
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) rizky_setMenu(false);
    });
  }

  /* ---------- Tahun otomatis pada footer ---------- */
  const rizky_year = document.getElementById("rizky_year");
  if (rizky_year) rizky_year.textContent = new Date().getFullYear();

  /* ---------- Penanda halaman aktif di navigasi ---------- */
  const rizky_page = decodeURIComponent(location.pathname.split("/").pop());
  const rizky_current = /\.html?$/i.test(rizky_page) ? rizky_page : "index.html";
  document.querySelectorAll(".rizky_nav_links a").forEach(function (rizky_link) {
    if (rizky_link.getAttribute("href") === rizky_current) {
      rizky_link.classList.add("rizky_active");
      rizky_link.setAttribute("aria-current", "page");
    }
  });

  /* ---------- Catatan bila halaman video dibuka lewat file:// ---------- */
  const rizky_file_note = document.getElementById("rizky_file_note");
  if (rizky_file_note && location.protocol === "file:") rizky_file_note.hidden = false;

  /* ---------- Tombol kembali ke atas ---------- */
  const rizky_top_button = document.getElementById("rizky_back_to_top");
  if (rizky_top_button) {
    const rizky_updateTopButton = function () {
      rizky_top_button.classList.toggle("rizky_show", window.scrollY > 420);
    };
    window.addEventListener("scroll", rizky_updateTopButton, { passive: true });
    rizky_updateTopButton();
    rizky_top_button.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Animasi sederhana saat elemen masuk layar ---------- */
  const rizky_reveal_targets = document.querySelectorAll(".rizky_section_head, .rizky_grid, .rizky_split, .rizky_timeline, .rizky_article, .rizky_video_grid, .rizky_contact_grid, .rizky_profile_hero, .rizky_stats, .rizky_media_grid, .rizky_cta_band, .rizky_faq, .rizky_toc, .rizky_article_search");
  rizky_reveal_targets.forEach(function (rizky_item) {
    rizky_item.classList.add("rizky_reveal");
  });
  if ("IntersectionObserver" in window) {
    const rizky_observer = new IntersectionObserver(function (rizky_entries) {
      rizky_entries.forEach(function (rizky_entry) {
        if (rizky_entry.isIntersecting) {
          rizky_entry.target.classList.add("rizky_visible");
          rizky_observer.unobserve(rizky_entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".rizky_reveal").forEach(function (rizky_item) {
      rizky_observer.observe(rizky_item);
    });
  } else {
    document.querySelectorAll(".rizky_reveal").forEach(function (rizky_item) {
      rizky_item.classList.add("rizky_visible");
    });
  }

  /* ---------- Pencarian artikel sederhana ---------- */
  const rizky_search = document.getElementById("rizky_article_search_input");
  if (rizky_search) {
    const rizky_articles = Array.prototype.slice.call(document.querySelectorAll(".rizky_article"));
    const rizky_search_status = document.getElementById("rizky_article_search_status");
    const rizky_applySearch = function () {
      const rizky_query = rizky_search.value.trim().toLowerCase();
      let rizky_shown = 0;
      rizky_articles.forEach(function (rizky_article) {
        const rizky_match = !rizky_query || rizky_article.textContent.toLowerCase().indexOf(rizky_query) !== -1;
        rizky_article.hidden = !rizky_match;
        if (rizky_match) rizky_shown += 1;
        const rizky_toc_item = document.querySelector('.rizky_toc a[href="#' + rizky_article.id + '"]');
        if (rizky_toc_item) rizky_toc_item.closest("li").hidden = !rizky_match;
      });
      if (!rizky_search_status) return;
      if (!rizky_query) {
        rizky_search_status.textContent = "Menampilkan seluruh 6 artikel.";
      } else if (rizky_shown === 0) {
        rizky_search_status.textContent = 'Tidak ada artikel yang cocok dengan "' + rizky_search.value.trim() + '". Coba kata lain seperti padi, kompos, atau iklim.';
      } else {
        rizky_search_status.textContent = 'Menampilkan ' + rizky_shown + ' dari 6 artikel untuk "' + rizky_search.value.trim() + '".';
      }
    };
    rizky_search.addEventListener("input", rizky_applySearch);
    rizky_applySearch();
  }

  /* ---------- Validasi formulir kontak dengan JavaScript ---------- */
  const rizky_form = document.getElementById("rizky_contact_form");
  if (rizky_form) {
    const rizky_notice = document.getElementById("rizky_form_notice");
    const rizky_fields = [
      { input: document.getElementById("rizky_nama"), error: document.getElementById("rizky_error_nama"), empty: "Nama wajib diisi.", message: "Nama minimal 3 karakter." },
      { input: document.getElementById("rizky_email"), error: document.getElementById("rizky_error_email"), empty: "Email wajib diisi.", message: "Masukkan alamat email yang valid, mis. nama@email.com." },
      { input: document.getElementById("rizky_subjek"), error: document.getElementById("rizky_error_subjek"), empty: "Subjek wajib diisi.", message: "Subjek minimal 4 karakter." },
      { input: document.getElementById("rizky_pesan"), error: document.getElementById("rizky_error_pesan"), empty: "Pesan wajib diisi.", message: "Pesan minimal 15 karakter." }
    ];

    const rizky_showError = function (rizky_field, rizky_message) {
      if (!rizky_field.input) return;
      rizky_field.input.classList.toggle("rizky_input_error", Boolean(rizky_message));
      rizky_field.input.setAttribute("aria-invalid", rizky_message ? "true" : "false");
      if (rizky_field.error) rizky_field.error.textContent = rizky_message || "";
    };

    const rizky_validateField = function (rizky_field) {
      const rizky_value = rizky_field.input.value.trim();
      let rizky_message = "";
      if (!rizky_value) {
        rizky_message = rizky_field.empty;
      } else if (rizky_field.input.id === "rizky_email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(rizky_value)) {
        rizky_message = rizky_field.message;
      } else if (rizky_field.input.id === "rizky_nama" && rizky_value.length < 3) {
        rizky_message = rizky_field.message;
      } else if (rizky_field.input.id === "rizky_subjek" && rizky_value.length < 4) {
        rizky_message = rizky_field.message;
      } else if (rizky_field.input.id === "rizky_pesan" && rizky_value.length < 15) {
        rizky_message = rizky_field.message;
      }
      rizky_showError(rizky_field, rizky_message);
      return !rizky_message;
    };

    rizky_form.setAttribute("novalidate", "novalidate");

    const rizky_pesan_input = document.getElementById("rizky_pesan");
    const rizky_pesan_counter = document.getElementById("rizky_pesan_counter");
    const rizky_updateCounter = function () {
      if (!rizky_pesan_input || !rizky_pesan_counter) return;
      const rizky_max = rizky_pesan_input.getAttribute("maxlength") || "800";
      const rizky_length = rizky_pesan_input.value.length;
      rizky_pesan_counter.textContent = rizky_length + " / " + rizky_max;
      rizky_pesan_counter.classList.toggle("rizky_counter_low", rizky_length > 0 && rizky_length < 15);
    };
    if (rizky_pesan_input) rizky_pesan_input.addEventListener("input", rizky_updateCounter);
    rizky_updateCounter();

    rizky_fields.forEach(function (rizky_field) {
      if (!rizky_field.input) return;
      rizky_field.input.addEventListener("input", function () {
        rizky_showError(rizky_field, "");
        if (rizky_notice) {
          rizky_notice.textContent = "";
          rizky_notice.classList.remove("rizky_notice_error", "rizky_notice_success");
        }
      });
    });

    rizky_form.addEventListener("submit", function (rizky_event) {
      rizky_event.preventDefault();
      let rizky_valid = true;
      let rizky_firstInvalid = null;
      rizky_fields.forEach(function (rizky_field) {
        if (!rizky_field.input) return;
        const rizky_fieldValid = rizky_validateField(rizky_field);
        if (!rizky_fieldValid && !rizky_firstInvalid) rizky_firstInvalid = rizky_field.input;
        if (!rizky_fieldValid) rizky_valid = false;
      });
      if (!rizky_notice) return;
      rizky_notice.classList.remove("rizky_notice_error", "rizky_notice_success");
      if (!rizky_valid) {
        rizky_notice.classList.add("rizky_notice_error");
        rizky_notice.textContent = "Pesan belum dapat dikirim. Periksa kembali kolom yang ditandai merah.";
        if (rizky_firstInvalid) rizky_firstInvalid.focus();
        return;
      }
      rizky_notice.classList.add("rizky_notice_success");
      rizky_notice.textContent = "Terima kasih. Data formulir berhasil divalidasi di browser. Untuk pengiriman sungguhan, hubungkan formulir ke backend atau layanan formulir.";
      rizky_fields.forEach(function (rizky_field) {
        rizky_showError(rizky_field, "");
      });
      rizky_form.reset();
      rizky_updateCounter();
    });
  }

  /* ---------- Galeri: filter kategori, muat lebih banyak, lightbox ---------- */
  const rizky_gallery = document.getElementById("rizky_gallery_grid");
  if (rizky_gallery) {
    const rizky_cards = Array.prototype.slice.call(rizky_gallery.querySelectorAll(".rizky_gallery_card"));
    const rizky_filter_buttons = Array.prototype.slice.call(document.querySelectorAll(".rizky_filter_btn"));
    const rizky_more = document.getElementById("rizky_gallery_more");
    const rizky_more_wrap = document.getElementById("rizky_gallery_more_wrap");
    const rizky_status = document.getElementById("rizky_gallery_status");
    const rizky_limit_step = 9;
    let rizky_limit = rizky_limit_step;
    let rizky_filter = "semua";

    const rizky_activeLabel = function () {
      const rizky_button = document.querySelector('.rizky_filter_btn[aria-pressed="true"]');
      return rizky_button ? rizky_button.getAttribute("data-label") : "Semua";
    };

    const rizky_renderGallery = function () {
      let rizky_matched = 0;
      rizky_cards.forEach(function (rizky_card) {
        const rizky_match = rizky_filter === "semua" || rizky_card.getAttribute("data-category") === rizky_filter;
        if (!rizky_match) {
          rizky_card.hidden = true;
          return;
        }
        rizky_matched += 1;
        rizky_card.hidden = rizky_matched > rizky_limit;
      });
      const rizky_shown = Math.min(rizky_matched, rizky_limit);
      if (rizky_more && rizky_more_wrap) {
        const rizky_rest = rizky_matched - rizky_limit;
        rizky_more_wrap.hidden = rizky_rest <= 0;
        rizky_more.innerHTML = '<i class="fa-solid fa-images"></i> Muat lebih banyak (' + rizky_rest + ' foto)';
      }
      if (rizky_status) {
        rizky_status.textContent = rizky_filter === "semua"
          ? "Menampilkan " + rizky_shown + " dari " + rizky_matched + " foto."
          : "Menampilkan " + rizky_shown + " foto kategori " + rizky_activeLabel() + ".";
      }
    };

    rizky_filter_buttons.forEach(function (rizky_button) {
      rizky_button.addEventListener("click", function () {
        rizky_filter = rizky_button.getAttribute("data-filter");
        rizky_filter_buttons.forEach(function (rizky_other) {
          const rizky_isActive = rizky_other === rizky_button;
          rizky_other.classList.toggle("rizky_filter_active", rizky_isActive);
          rizky_other.setAttribute("aria-pressed", String(rizky_isActive));
        });
        rizky_renderGallery();
      });
    });

    if (rizky_more) {
      rizky_more.addEventListener("click", function () {
        rizky_limit += rizky_limit_step;
        rizky_renderGallery();
      });
    }

    rizky_renderGallery();

    /* Lightbox memakai <dialog> bawaan browser (fokus terkurung otomatis). */
    const rizky_lightbox = document.getElementById("rizky_lightbox");
    if (rizky_lightbox && typeof rizky_lightbox.showModal === "function") {
      const rizky_lb_img = document.getElementById("rizky_lightbox_img");
      const rizky_lb_tag = document.getElementById("rizky_lightbox_tag");
      const rizky_lb_title = document.getElementById("rizky_lightbox_title");
      const rizky_lb_desc = document.getElementById("rizky_lightbox_desc");
      const rizky_lb_credit = document.getElementById("rizky_lightbox_credit");
      const rizky_lb_counter = document.getElementById("rizky_lightbox_counter");
      let rizky_group = [];
      let rizky_pos = 0;
      let rizky_opener = null;

      const rizky_showPhoto = function (rizky_position) {
        if (!rizky_group.length) return;
        rizky_pos = (rizky_position + rizky_group.length) % rizky_group.length;
        const rizky_card = rizky_group[rizky_pos];
        const rizky_img = rizky_card.querySelector("img");
        rizky_lb_img.src = rizky_img.currentSrc || rizky_img.src;
        rizky_lb_img.alt = rizky_img.alt;
        rizky_lb_tag.textContent = rizky_card.querySelector(".rizky_tag").textContent;
        rizky_lb_title.textContent = rizky_card.querySelector("h3").textContent;
        rizky_lb_desc.textContent = rizky_card.querySelector("figcaption p").textContent;
        rizky_lb_credit.textContent = rizky_card.querySelector(".rizky_gallery_credit").textContent.replace(/\s+/g, " ").trim();
        rizky_lb_counter.textContent = (rizky_pos + 1) + " / " + rizky_group.length;
      };

      const rizky_openPhoto = function (rizky_card) {
        rizky_group = rizky_cards.filter(function (rizky_item) { return !rizky_item.hidden; });
        rizky_showPhoto(rizky_group.indexOf(rizky_card));
        rizky_lightbox.showModal();
        document.body.classList.add("rizky_no_scroll");
      };

      const rizky_closePhoto = function () {
        rizky_lightbox.close();
      };

      rizky_gallery.addEventListener("click", function (rizky_event) {
        const rizky_thumb = rizky_event.target.closest(".rizky_gallery_thumb");
        if (!rizky_thumb) return;
        rizky_opener = rizky_thumb;
        rizky_openPhoto(rizky_thumb.closest(".rizky_gallery_card"));
      });

      rizky_lightbox.querySelector("[data-lightbox-close]").addEventListener("click", rizky_closePhoto);
      rizky_lightbox.querySelector("[data-lightbox-prev]").addEventListener("click", function () {
        rizky_showPhoto(rizky_pos - 1);
      });
      rizky_lightbox.querySelector("[data-lightbox-next]").addEventListener("click", function () {
        rizky_showPhoto(rizky_pos + 1);
      });
      rizky_lightbox.addEventListener("click", function (rizky_event) {
        if (rizky_event.target === rizky_lightbox) rizky_closePhoto();
      });
      rizky_lightbox.addEventListener("keydown", function (rizky_event) {
        if (rizky_event.key === "ArrowRight") {
          rizky_event.preventDefault();
          rizky_showPhoto(rizky_pos + 1);
        } else if (rizky_event.key === "ArrowLeft") {
          rizky_event.preventDefault();
          rizky_showPhoto(rizky_pos - 1);
        }
      });
      rizky_lightbox.addEventListener("close", function () {
        document.body.classList.remove("rizky_no_scroll");
        if (rizky_opener) rizky_opener.focus();
        rizky_opener = null;
      });
    }
  }

  /* ---------- Video: filter kategori dan lightbox pemutar YouTube ---------- */
  const rizky_video_grid = document.getElementById("rizky_video_grid");
  if (rizky_video_grid) {
    const rizky_video_cards = Array.prototype.slice.call(rizky_video_grid.querySelectorAll(".rizky_video_card"));
    const rizky_video_filters = Array.prototype.slice.call(document.querySelectorAll(".rizky_filter_btn"));
    const rizky_video_status = document.getElementById("rizky_video_status");
    let rizky_video_filter = "semua";

    const rizky_renderVideos = function () {
      let rizky_shown = 0;
      rizky_video_cards.forEach(function (rizky_card) {
        const rizky_match = rizky_video_filter === "semua" || rizky_card.getAttribute("data-category") === rizky_video_filter;
        rizky_card.hidden = !rizky_match;
        if (rizky_match) rizky_shown += 1;
      });
      if (!rizky_video_status) return;
      if (rizky_video_filter === "semua") {
        rizky_video_status.textContent = "Menampilkan " + rizky_shown + " video.";
      } else {
        const rizky_button = document.querySelector('.rizky_filter_btn[aria-pressed="true"]');
        rizky_video_status.textContent = "Menampilkan " + rizky_shown + " video kategori " + (rizky_button ? rizky_button.getAttribute("data-label") : "") + ".";
      }
    };

    rizky_video_filters.forEach(function (rizky_button) {
      rizky_button.addEventListener("click", function () {
        rizky_video_filter = rizky_button.getAttribute("data-filter");
        rizky_video_filters.forEach(function (rizky_other) {
          const rizky_isActive = rizky_other === rizky_button;
          rizky_other.classList.toggle("rizky_filter_active", rizky_isActive);
          rizky_other.setAttribute("aria-pressed", String(rizky_isActive));
        });
        rizky_renderVideos();
      });
    });

    rizky_renderVideos();

    const rizky_video_lightbox = document.getElementById("rizky_video_lightbox");
    if (rizky_video_lightbox && typeof rizky_video_lightbox.showModal === "function") {
      const rizky_video_frame = document.getElementById("rizky_video_frame");
      const rizky_video_tag = document.getElementById("rizky_video_lightbox_tag");
      const rizky_video_title = document.getElementById("rizky_video_lightbox_title");
      const rizky_video_desc = document.getElementById("rizky_video_lightbox_desc");
      const rizky_video_credit = document.getElementById("rizky_video_lightbox_credit");
      const rizky_video_counter = document.getElementById("rizky_video_lightbox_counter");
      const rizky_video_link = document.getElementById("rizky_video_lightbox_link");
      let rizky_video_group = [];
      let rizky_video_pos = 0;
      let rizky_video_opener = null;

      const rizky_showVideo = function (rizky_position) {
        if (!rizky_video_group.length) return;
        rizky_video_pos = (rizky_position + rizky_video_group.length) % rizky_video_group.length;
        const rizky_card = rizky_video_group[rizky_video_pos];
        const rizky_card_title = rizky_card.querySelector("h3").textContent;
        rizky_video_frame.src = "https://www.youtube.com/embed/" + rizky_card.getAttribute("data-video-id") + "?rel=0&autoplay=1";
        rizky_video_frame.title = "Pemutar video: " + rizky_card_title;
        rizky_video_tag.textContent = rizky_card.querySelector(".rizky_tag").textContent;
        rizky_video_title.textContent = rizky_card_title;
        rizky_video_desc.textContent = rizky_card.querySelector(".rizky_video_body p").textContent;
        rizky_video_credit.textContent = rizky_card.querySelector(".rizky_video_credit").textContent;
        rizky_video_link.href = rizky_card.querySelector(".rizky_text_link").href;
        rizky_video_counter.textContent = (rizky_video_pos + 1) + " / " + rizky_video_group.length;
      };

      rizky_video_grid.addEventListener("click", function (rizky_event) {
        const rizky_thumb = rizky_event.target.closest(".rizky_video_thumb");
        if (!rizky_thumb) return;
        rizky_video_group = rizky_video_cards.filter(function (rizky_item) { return !rizky_item.hidden; });
        rizky_video_opener = rizky_thumb;
        rizky_showVideo(rizky_video_group.indexOf(rizky_thumb.closest(".rizky_video_card")));
        rizky_video_lightbox.showModal();
        document.body.classList.add("rizky_no_scroll");
      });

      rizky_video_lightbox.querySelector("[data-video-close]").addEventListener("click", function () {
        rizky_video_lightbox.close();
      });
      rizky_video_lightbox.querySelector("[data-video-prev]").addEventListener("click", function () {
        rizky_showVideo(rizky_video_pos - 1);
      });
      rizky_video_lightbox.querySelector("[data-video-next]").addEventListener("click", function () {
        rizky_showVideo(rizky_video_pos + 1);
      });
      rizky_video_lightbox.addEventListener("click", function (rizky_event) {
        if (rizky_event.target === rizky_video_lightbox) rizky_video_lightbox.close();
      });
      rizky_video_lightbox.addEventListener("keydown", function (rizky_event) {
        if (rizky_event.key === "ArrowRight") {
          rizky_event.preventDefault();
          rizky_showVideo(rizky_video_pos + 1);
        } else if (rizky_event.key === "ArrowLeft") {
          rizky_event.preventDefault();
          rizky_showVideo(rizky_video_pos - 1);
        }
      });
      rizky_video_lightbox.addEventListener("close", function () {
        rizky_video_frame.src = "about:blank";
        document.body.classList.remove("rizky_no_scroll");
        if (rizky_video_opener) rizky_video_opener.focus();
        rizky_video_opener = null;
      });
    }
  }
});
