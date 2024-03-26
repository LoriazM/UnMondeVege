

// On grise chaque checkbox cochée
let checkboxes = document.querySelectorAll("input[type=checkbox][name=ingredients]");
let labelCheckbox = document.querySelectorAll("form label");

// Use Array.forEach to add an event listener to each checkbox.
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    if (checkbox.checked){
      checkbox.nextElementSibling.style.color="#aab5be";
    }else{
      checkbox.nextElementSibling.style.color="black";
    }
  })
});
