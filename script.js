document.addEventListener('DOMContentLoaded', function () {
    displayPasswords();
  });
  
  function savePassword() {
    var websiteInput = document.getElementById('website');
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    var passwordsContainer = document.getElementById('passwords');
  
    var website = websiteInput.value;
    var username = usernameInput.value;
    var password = passwordInput.value;
  
    // Validate inputs
    if (!website || !username || !password) {
        alert('Please enter website, username, and password.');
        return;
    }
  
    // Save the password (for simplicity, using localStorage)
    var savedPasswords = JSON.parse(localStorage.getItem('passwords')) || [];
    savedPasswords.push({ website: website, username: username, password: password });
    localStorage.setItem('passwords', JSON.stringify(savedPasswords));
  
    // Clear form inputs
    websiteInput.value = '';
    usernameInput.value = '';
    passwordInput.value = '';
  
    // Display updated passwords
    displayPasswords();
  }
  
  function displayPasswords() {
    var passwordsContainer = document.getElementById('passwords');
    var savedPasswords = JSON.parse(localStorage.getItem('passwords')) || [];
  
    passwordsContainer.innerHTML = '';
  
    savedPasswords.forEach(function (entry) {
        var passwordEntry = document.createElement('div');
        passwordEntry.innerHTML = <strong>${entry.website}:</strong> ${entry.username} - ${entry.password};
        passwordsContainer.appendChild(passwordEntry);
    });
  }