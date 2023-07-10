document.getElementById("openModalBtn").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "block";
    document.body.style.overflow = "hidden"; // Disable scrolling
  });
  
  document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "none";
    document.body.style.overflow = "auto"; // Enable scrolling
  });
  
  window.addEventListener("click", function(event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  });
  