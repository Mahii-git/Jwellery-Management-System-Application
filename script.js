// Allow only one dropdown open at a time
document.querySelectorAll('.dropbtn').forEach(button => {
  button.addEventListener('click', function (e) {
    e.stopPropagation(); // prevent bubbling

    // Close any other open dropdowns
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      if (dropdown !== this.parentElement) {
        dropdown.classList.remove('show');
      }
    });

    // Toggle current dropdown
    this.parentElement.classList.toggle('show');
  });
});

// Close dropdown if clicked outside
document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.classList.remove('show');
  });
});
