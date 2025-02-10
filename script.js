const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
    navbarMenu.classList.toggle('active');
});

const easterEgg = document.querySelector('.copyright');
let clickCount = 0;

easterEgg.addEventListener('click', function() {
    clickCount++; // Increment the click count
    
    if (clickCount === 5) {
      // Flip the element after 5 clicks
      document.body.style.backgroundColor = 'gray'; // Rotate the body
      document.body.style.color = 'white';
      document.body.style.transition = 'transform 0.5s ease-in-out';
      clickCount = 0;
    }
});

  let keySequence = '';
  const secretCode = '42069';
  const modal = document.getElementById('easterEggModal'); // Modal element
  const closeButton = document.querySelector('.close'); // Close button
  
  document.addEventListener('keydown', function(event) {
    keySequence += event.key; // Add pressed key to sequence
  
    // Keep only the last characters up to the length of the secret code
    keySequence = keySequence.slice(-secretCode.length);
  
    // If the correct sequence is typed, show the modal
    if (keySequence === secretCode) {
      modal.style.display = 'block'; // Show the modal
      keySequence = ''; // Reset the sequence
    }
});
  
  // Close modal when clicking the close button
  closeButton.addEventListener('click', function() {
    modal.style.display = 'none'; // Hide the modal
});
  
  // Close modal when clicking outside of it
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
});