import { Authorize } from "./authorize";
import { UiElement } from "./uielement.js";

// UI
const userinfodiv = document.getElementById('userinfo');
const logoutbtn = document.getElementById('logoutbtn');

// Authorize instance 
const authorize = Authorize(); 

// Uielement instance 
const uielement = UiElement(userinfodiv);

// Get info & render 
authorize.getUser((data) => {
    // console.log(data);
    uielement.userInfoEle(data);
})


// Logout 
logoutbtn.addEventListener('click', () => {

    const { logoutUser } = Authorize();
    logoutUser();
});