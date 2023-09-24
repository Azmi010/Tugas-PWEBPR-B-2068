// Ambil elemen tombol dan pesan
const contactButton = document.getElementById("contact-button");
const contactMessage = document.getElementById("contact-message");

// Tambahkan event listener untuk tombol
contactButton.addEventListener("click", function () {
    // Toggle (menyembunyikan/menampilkan) pesan
    if (contactMessage.style.display === "none" || contactMessage.style.display === "") {
        contactMessage.style.display = "block";
    } else {
        contactMessage.style.display = "none";
    }
});
