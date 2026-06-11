document.addEventListener('contextmenu', function(event) {
    if (event.target.tagName) {
      event.preventDefault();
    }
  });
