let attempts = 0;

document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let input = document.getElementById("input").value;

    // SECURITY 1: XSS protection
    input = input.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // SECURITY 2: brute-force protection simulation
    attempts++;
    if (attempts > 5) {
        alert("Too many attempts. Please wait.");
        return;
    }

    document.getElementById("output").innerText = input;
});
