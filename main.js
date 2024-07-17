// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()


document.addEventListener("DOMContentLoaded", function() {
    const siVisitaCheckbox = document.getElementById('siVisita');
    const noVisitaCheckbox = document.getElementById('noVisita');
    const calendlyContainer = document.getElementById('calendlyContainer');

    siVisitaCheckbox.addEventListener('change', function() {
      if (siVisitaCheckbox.checked) {
        calendlyContainer.style.display = 'block';
        noVisitaCheckbox.checked = false;
      } else {
        calendlyContainer.style.display = 'none';
      }
    });

    noVisitaCheckbox.addEventListener('change', function() {
      if (noVisitaCheckbox.checked) {
        calendlyContainer.style.display = 'none';
        siVisitaCheckbox.checked = false;
      }
    });
});