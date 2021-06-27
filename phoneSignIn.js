window.onload = function() {
  recaptchaVerifierSimple()
  recaptchaRender()
}

function recaptchaVerifierSimple() {
  // [START auth_phone_recaptcha_verifier_simple]
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  // [END auth_phone_recaptcha_verifier_simple]
}

// Show reCaptcha
function recaptchaRender() {
  const recaptchaVerifier = window.recaptchaVerifier;

  // [START auth_phone_recaptcha_render]
  recaptchaVerifier.render().then((widgetId) => {
    window.recaptchaWidgetId = widgetId;
  });
  // [END auth_phone_recaptcha_render]
}


// Enter phone number
function phoneSignIn() {
  // [START auth_phone_signin]
  const phoneNumber = document.querySelector('.phoneNumber').value;    // ME
  const appVerifier = window.recaptchaVerifier;
  firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        alert('Message Sent')
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...
      }).catch((error) => {
        // Error; SMS not sent
        // ...
      });
  // [END auth_phone_signin]
}


// Verify Code
function verifyCode() {

  // [START auth_phone_verify_code]
  var code = document.querySelector('.codeInput').value;            // ME
  confirmationResult.confirm(code).then((result) => {
    // User signed in successfully.
    const user = result.user;
    console.log(user);
    alert('ok')
    // ...
  }).catch((error) => {
    alert(error)
    // User couldn't sign in (bad verification code?)
    // ...
  });
  // [END auth_phone_verify_code]
}




function signOut() {
  // [START auth_sign_out]
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    alert('Sign-out successful');
  }).catch((error) => {
    // An error happened.
  });
  // [END auth_sign_out]
}