function checkPassword() {
    const password = document.getElementById("password").value;
    if (password === "e") {
        document.getElementById("protected-content").style.display = "block";
        document.getElementById("password-container").style.display = "none";
    } else {
        alert("Incorrect password, please try again.");
    }
}
function checkPassword() {
    const password = document.getElementById("password").value;
    if (password === "e") {
        document.getElementById("protected-content").style.display = "block";
        document.getElementById("password-container").style.display = "none";
    } else {
        alert("Incorrect password, please try again.");
    }
}

// Initial styling to hide protected content
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("protected-content").style.display = "none";
});
