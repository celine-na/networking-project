document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    let input = document.getElementById("input").value;

    // XSS protection
    input = input.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    document.getElementById("output").innerText = input;
});
