// SCRIPT UNTUK POSISI TENGAH GALERI
document.addEventListener("DOMContentLoaded", function() {
    // Tunggu sebentar agar memastikan layout dan gambar termuat
    setTimeout(() => {
        const wrapper = document.querySelector('.photo-gallery-wrapper');
        const target = document.getElementById('center-start');

        if (wrapper && target) {
            // Rumus Matematika untuk mencari posisi scroll agar target ada di tengah:
            // (Posisi kiri target) dikurangi (Setengah lebar wadah) ditambah (Setengah lebar target)
            const scrollPosition = target.offsetLeft - (wrapper.clientWidth / 2) + (target.clientWidth / 2);

            // Lakukan scroll ke posisi tersebut secara instan ('auto')
            wrapper.scrollTo({
                left: scrollPosition,
                behavior: 'auto' 
            });
        }
    }, 100); // Delay 100ms
});