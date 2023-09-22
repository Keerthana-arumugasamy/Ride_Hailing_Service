# auth-implemented
## Adding additional profile information

Two additional informations can be added to the user information as follows:
#### 1. Display Name
To add full name or any name for the purpose of displaying in the application.
#### 2. Photo URL
To add the url of the photo that can be used as profile picture.

### Below is the javascript code to add additional information.

```
// Fetching the current user
const user = firebase.auth().currentUser;

// Fetching value from a html input fields with id
const displayName = document.getElementById("name").value;
const photoURL = document.getElementById("photo").value;

// Updating additional information
user.updateProfile({
  displayName,
  photoURL
})
```

> To add additional data on `Sign Up`
```
function signUp() {

  // Fetching value from a html input fields with id
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  // Fetching additional informations
  const displayName = document.getElementById("displayName").value;
  const photoURL = document.getElementById("photo").value;
  
  // Performing Sign Up Operation
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Updating additional information
      const user = userCredential.user;
      user.updateProfile({
        displayName,
        photoURL
      });
    })
};


https://www.youtube.com/watch?v=Pc2e2YpKArg

//AADHAR validation


 <script type="text/javascript">

function AadharValidate() {
            var aadhar =document.getElementById("aadhar").value;
            var adharcardTwelveDigit=/^\d{12}$/;
            var adharSixteenDigit = /^\d{16}$/;
            if(aadhar !=''){
                if(aadhar.match(adharcardTwelveDigit)){
                    return true;
                }
                else if(aadhar.match(adharSixteenDigit)){
                    return true;
                }
                
                else{
                    alert("Enter valid Aadhar Number");
                    return false;
                }
            }
         }
          </script>

          onblur="AadharValidate();"


// validation AAdhar

https://laravelcode.com/post/how-to-verify-aadhar-card-number-without-any-api
https://www.youtube.com/watch?v=K22xQBCYyso

//CAPS
https://www.w3schools.com/jsref/event_onblur.asp

//image store in db
https://www.youtube.com/watch?v=ll00ITa6r9s





      