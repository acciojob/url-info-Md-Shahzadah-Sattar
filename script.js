//your JS code here. If required.
// Function to display the length of the current URL
function displayUrlLength() {
    // Get the current URL using the location object
    const currentUrl = window.location.href;

    // Calculate the length of the URL
    const urlLength = currentUrl.length;

    // Display the length of the URL in an alert
    alert("The length of the URL is: " + urlLength);
}

// Call the function
displayUrlLength();
