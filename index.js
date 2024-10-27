





  document.getElementById('search-input').addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
          event.preventDefault(); // Evita o comportamento padrão do Enter
          var query = this.value.trim();
          if (query) {
              window.location.href = '/buscar?query=' + encodeURIComponent(query);
          }
      }
  });
  
      

  document.getElementById('lupa').addEventListener('click', function() {
    var query = document.getElementById('search-input').value.trim();
    if (query) {
        window.location.href = '/buscar?query=' + encodeURIComponent(query);
    }
});

console.log("ola mundo")