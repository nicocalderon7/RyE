document.addEventListener('scroll', function() {
    var timelineBlocks = document.querySelectorAll('.cd-timeline-block');
    var windowTop = window.pageYOffset;
    var windowBottom = windowTop + window.innerHeight;
  
    timelineBlocks.forEach(function(block) {
      var rect = block.getBoundingClientRect();
      var blockTop = rect.top + window.pageYOffset;
      var blockBottom = blockTop + rect.height;
  
      if ((blockTop <= windowBottom) && (blockBottom >= windowTop)) {
        block.classList.add('animated');
      } else {
        block.classList.remove('animated');
      }
    });
  });


  document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".acordeon-item");
  
    items.forEach(item => {
      item.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        items.forEach(item => item.classList.remove("active"));
        if (!isActive) {
          item.classList.add("active");
        }
      });
    });
  });
  'use strict';

  ;( function ( document, window, index )
  {
    var inputs = document.querySelectorAll( '.inputfile' );
    Array.prototype.forEach.call( inputs, function( input )
    {
      var label	 = input.nextElementSibling,
        labelVal = label.innerHTML;
  
      input.addEventListener( 'change', function( e )
      {
        var fileName = '';
        if( this.files && this.files.length > 1 )
          fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
        else
          fileName = e.target.value.split( '\\' ).pop();
  
        if( fileName )
          label.querySelector( 'span' ).innerHTML = fileName;
        else
          label.innerHTML = labelVal;
      });
  
      // Firefox bug fix
      input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
      input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
    });
  }( document, window, 0 ));

  document.getElementById('file-1').addEventListener('change', function() {
    document.getElementById('enviarBoton').style.display = 'block';
});

// Enviar mail 
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('documentForm');
  const confirmationMessage = document.getElementById('confirmationMessage');

  form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const fileInput = document.getElementById('fileInput');
      const emailInput = document.getElementById('emailInput');
      const file = fileInput.files[0];
      const email = emailInput.value;

      if (!file || !email) {
          alert('Por favor seleccione un archivo y proporcione una dirección de correo electrónico.');
          return;
      }

      const formData = new FormData();
      formData.append('file', file);
      formData.append('email', email);

      try {
          const response = await fetch('/enviar-correo', {
              method: 'POST',
              body: formData
          });

          if (response.ok) {
              confirmationMessage.style.display = 'block'; // Mostrar mensaje de confirmación
              form.reset();
          } else {
              alert('Ha ocurrido un error al enviar el documento por correo electrónico.');
          }
      } catch (error) {
          console.error('Error:', error);
          alert('Ha ocurrido un error al enviar el documento por correo electrónico.');
      }
  });
});