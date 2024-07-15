function formValidation() {
  const positions = ['President', 'Secretary', 'FiSecretary', 'QD', 'GD', 'mazahvil', 'kalayalam', 'Wefi', 'Teenstar'];

  let formIsValid = true;
  let firstErrorInput = null; // To store the first input field with an error

  positions.forEach(position => {
      const nameInput = document.getElementById(`${position}Name`);
      const numberInput = document.getElementById(`${position}_phone_number`);
      const nameError = document.getElementById(`${position}Name-error`);
      const numberError = document.getElementById(`${position}_phone_number-error`);

      // Clear previous error messages
      nameError.textContent = '';
      numberError.textContent = '';

      // Validate Name
      if (nameInput.value.trim() === '') {
          nameError.textContent = `Please enter ${position}'s Name`;
          formIsValid = false;
          if (!firstErrorInput) {
              firstErrorInput = nameInput;
          }
      }

      // Validate Mobile Number
      if (numberInput.value.trim() === '') {
          numberError.textContent = `Please enter ${position}'s Mobile Number`;
          formIsValid = false;
          if (!firstErrorInput) {
              firstErrorInput = numberInput;
          }
      } else if (!/^\d{10}$/.test(numberInput.value.trim())) {
          numberError.textContent = `Mobile Number must be 10 digits for ${position}`;
          formIsValid = false;
          if (!firstErrorInput) {
              firstErrorInput = numberInput;
          }
      }
  });

  // Set focus to the first input field with an error, if any
  if (firstErrorInput) {
      firstErrorInput.focus();
  }

  return formIsValid;
}

$(document).ready(function () {
    // Define unit values for each sector
    var units = {
      'ELETTIL': ['CHALIKKODE', 'KANNITTAMAKKIL', 'KUNDUNGARAPARA', 'ELETTIL TOWN', 'OZHAN AKKUNN', 'ELETTIL EAST', 'THAROL', 'KANJIRAMUKK', 'CHETTAKADAV'],
      'KANTHAPURAM': ['VADAKKE NEROTH','KANTHAPURAM','THADAYIL', 'SALAMATH NAGAR', 'POOPOYIL', 'CM NAGAR', 'NEROTH', 'MANGAD', 'KARUVATTA', 'AVELATH', 'BADRIYYA NAGAR', 'ALAGAPOYIL'],
      'KIZHAKKOTH': ['KACHERIMUKK', 'PANNUR', 'KOTTAKKAL', 'URULIKKUNN', 'PUTHALATH', 'MARIVEETTIL THAZHAM', 'POOVATHODUKA', 'KOROTH CHAL'],
      'UNNIKULAM': ['IYYAD', 'EKAROOL', 'VALANNOOR', 'VALLIYOTH', 'ANIYOTH POYIL', 'METHADAM', 'KARUMALA'],
      'POONOOR': ['MADATHUMPOYIL', 'UMMINIKUNN', 'ESTATE MUKK', 'POONOOR', 'ΑΜΑΝΑΤΗ NAGAR', 'NERPOYIL', 'KELOTH'],
      'THALAYAD': ['MM PARAMB', 'SHANTHI NAGAR', 'PADIKKAL VAYAL', 'THALAYAD', 'CHEEDIKUZHI', 'THECHI', 'RAJAGIRI', 'VAKERI'],
      'AVILORA': ['BUSTHANABAD', 'KUNNUMMAL', 'PARAKKANDI', 'KATHARAMMAL', 'KARIMBARAKUND', 'KARANIKKALL', 'PARAMMAL', 'AVILORA']
    };

    // Handle sector selection change
    $('#sectorDropdown').change(function () {
      var selectedSector = $(this).val();
      var unitDropdown = $('#unitDropdown');
  

      // Clear existing options
      unitDropdown.empty();

      // Add default option
      unitDropdown.append('<option value="" selected disabled>Select Unit</option>');

      // Add units based on selected sector
      if (selectedSector in units) {
        units[selectedSector].forEach(function (unit) {
          unitDropdown.append('<option value="' + unit + '">' + unit + '</option>');
        });
      }
    });
  });