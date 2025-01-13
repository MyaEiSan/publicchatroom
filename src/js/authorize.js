import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { updateProfile } from "firebase/auth";

export function Authorize() {

    // Signup 
    const registerUser = async (fullname, email, password) => {
        
        const defaultprofileimg = "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png";
        try {

            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user; 

            // console.log(user);

            await updateProfile(user, {
                displayName: fullname,
                photoURL: defaultprofileimg
            }).then(() => {

                 // set name to localStorage 
                 setLocalName(user);

                
                // Redirect to profile.html 
                window.location.href = "../index.html";

            });

        } catch (error) {
            console.error("Error registering users : ", error);
        }

    }

    // Signin
    const loginUser = (email, password) => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            
                // set name to localStorage 
                setLocalName(userCredential.user);

             // Redirect to index.html 
            window.location.href = "../index.html";
        })
        .catch((error) => {
            console.log("Error registering users : ", error.message);
        });
    }

    // Signout 
    const logoutUser = () => {

        signOut(auth)
            .then(() => {
                // unset name from localStorage 
                unsetLocalName();
            window.location.href = "../signin.html"
        }).catch((error) => {
            console.log("Error logging out = ", error.message);
        });
    }

    // Reset Password 
    const resetPassword = async (email, msg) => {
        
        try {
            await sendPasswordResetEmail(auth, email); 

            msg.textContent = "Password reset email send. Please check your inbox."
            msg.style.color = "green";
            msg.style.fontSize = "11px";

        } catch {

            console.error("Error sending password reset email = ", error.message);

            msg.textContent = `Error : ${error.message}`;
            msg.style.color = "red"; 
            msg.style.fontSize = "11px";
        }

    }
    
    // Google Signin 
    const googleLogin = () => {

        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
            
                // set name to localStorage 
                setLocalName(result.user.displayName);
            
            window.location.href = "../index.html"
        }).catch((error) => {
           console.log("Error with Google sing in :",error.message)
        });

    }
    
    // Auth Check 
    const isLoggedIn = () => {
        onAuthStateChanged(auth, (userdata) => {
            if (userdata) {
                return true;
            } else {
                // Redirect to signin.html
            window.location.href = "../signin.html"
             }
        });
    }
    
    // Get User Info 
    const getUser = (callback) => {
        onAuthStateChanged(auth, (userdata) => {
            if (userdata) {
                callback(userdata)
            }
        });

    }

    const setLocalName = (userdata) => {
        localStorage.setItem('username', userdata.displayName);
    }

    const unsetLocalName = (userdata) => {
        localStorage.removeItem('username');
    }


    
    return {registerUser, loginUser, logoutUser, resetPassword, googleLogin, isLoggedIn, getUser}
}

// 5JanA 34:12 