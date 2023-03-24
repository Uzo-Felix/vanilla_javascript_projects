const sideBar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");
const toggleBtn = document.querySelector(".sidebar-toggle");

toggleBtn.addEventListener("click", () => {
    sideBar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", () => {
    sideBar.classList.remove("show-sidebar");
})