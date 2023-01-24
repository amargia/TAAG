//index.php?user=1234
const urlParams = new URLSearchParams(window.location.search);
const user_id = urlParams.get("user");

// Establecer la cookie "user_id" con el valor del parámetro "user"
document.cookie = "user_id=" + user_id + "; Max-Age=604800; path=/";

// Almacenar la información de configuración en la sessionStorage
sessionStorage.setItem("name", "Ale");
sessionStorage.setItem("phone", "11-111-1111");
sessionStorage.setItem("email", "ale@mail.com");

// Almacenar la información de configuración en la localStorage
localStorage.setItem("user_type", "admin");
localStorage.setItem("tipography", "Helvetica");
localStorage.setItem("size", "16px");
localStorage.setItem("color_theme", "light");