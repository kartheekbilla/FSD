alert("Welcome to the Image Gallery!");
document.getElementById("reviewBtn").addEventListener("click", function () {
// Alert - Simple output message


// Prompt - Get input from the user
let userName = prompt("What's your name?");
console.log("User entered name:", userName);

// Confirm - Ask for confirmation
let likesGallery = confirm("Do you like this gallery?");
console.log("User likes the gallery:", likesGallery);

// Console log - For developers to check values
console.log("This is a console message.");

// Writing directly to the webpage (not commonly used, but works)
document.write(`<p>Hello, ${userName ? userName : "Guest"}! Thanks for visiting.</p>`);
});