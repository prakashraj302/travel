const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  

  const email = signupForm['email'].value;
  const password = signupForm['password'].value;
  

  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
    // alert("you have registered");
    window.location.href = '#popup';
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("error: "+errorMessage);
  });
});