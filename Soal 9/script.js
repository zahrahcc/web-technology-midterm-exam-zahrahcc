// Mendapatkan elemen yang diperlukan
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.getElementById('myDropdown');

// Toggle dropdown saat tombol diklik
dropdownBtn.addEventListener('click', function() {
    dropdownContent.classList.toggle('show');
});

// Menutup dropdown jika user mengklik di luar dropdown
window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        }
    }
});
