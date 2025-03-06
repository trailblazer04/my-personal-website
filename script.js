// Function to show an alert
function showMessage() {
    alert("Welcome to my blog!");
}

// Run this when the page loads
document.addEventListener("DOMContentLoaded", function () {
    // Create a button dynamically
    let button = document.createElement("button");
    button.innerText = "Click Me!";
    button.style.padding = "10px 20px";
    button.style.marginTop = "20px";
    button.style.cursor = "pointer";
    
    // Add event listener to button
    button.addEventListener("click", showMessage);

    // Append button to the main section
    document.querySelector("main").appendChild(button);
});
