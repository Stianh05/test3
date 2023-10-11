document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
  
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent the default form submission
  
      // Collect form data
      const formData = new FormData(contactForm);
      const formDataObject = {};
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });
  
      // Send the data to the server or serverless function
      sendDataToServer(formDataObject);
    });
  
    function sendDataToServer(data) {
      // You need to implement the logic for sending data to your server or serverless function here.
      // You can use technologies like AJAX (XMLHttpRequest), Fetch API, or libraries like Axios.
      // Example using Fetch API:
      
      fetch("/your-server-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            // Data sent successfully
            console.log("Data sent successfully");
            contactForm.reset(); // Reset the form
          } else {
            // Handle errors if any
            console.error("Error sending data");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  });
  