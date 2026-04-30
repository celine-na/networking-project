let attempts = 0;

document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let input = document.getElementById("input").value;

   
    input = input.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    
    attempts++;
    if (attempts > 5) {
        alert("Too many attempts. Please wait.");
        return;
    }

    document.getElementById("output").innerText = input;
});
