window.addEventListener('scroll', function() {
    const scrollValue = 100;
    const header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > scrollValue);
})

// Dropdown menu
const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropdownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function() {
    
    dropdownMenu.classList.toggle('open');
    const isOpen = dropdownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
}