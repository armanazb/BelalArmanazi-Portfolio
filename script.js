function addRecommendation() {
    // Get the name and message of the new recommendation
    let name = document.getElementById("recommendation_name").value.trim();
    let recommendation = document.getElementById("new_recommendation").value.trim();
    
    // Check if both name and recommendation are provided
    if (recommendation === "") {
      alert("Please provide a recommendation.");
      return;
    }

    if (name === ""){
        alert("Please provide a name.");
        return;
    }
  
    // Display a pop-up
    showPopup(true);
  
    // Create a new 'recommendation' element and set its value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    element.innerHTML = `<strong>${name}</strong>: <span>&#8220;</span>${recommendation}<span>&#8221;</span>`;
  
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element);
  
    // Reset the value of the textarea and input
    document.getElementById("recommendation_name").value = "";
    document.getElementById("new_recommendation").value = "";
  }
  
  function showPopup(bool) {
    const popup = document.getElementById('popup');
    const popupMessage = document.querySelector('#popup h3');
  
    if (bool) {
      popup.style.visibility = 'visible';
      popupMessage.textContent = 'Thanks for leaving a recommendation';
    } else {
      popup.style.visibility = 'hidden';
      popupMessage.textContent = '';
    }
  }
  
  // Function to set up event listeners
  function setupEventListeners() {
    // Add event listener to the recommend_btn button
    document.getElementById("recommend_btn").addEventListener("click", addRecommendation);
  }
  
  // Call the function to set up event listeners when the page loads
  document.addEventListener("DOMContentLoaded", setupEventListeners);
  