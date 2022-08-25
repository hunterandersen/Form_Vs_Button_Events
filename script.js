// Setting up the object that we will use to store the user's data later
const userData = {
    name: "",
    isStudent: false,
    favoriteNumber: null
}

// Selecting the two HTML paragraph tags that get changed once a button is pressed
const formOutput = document.querySelector("#formOutput");
const buttonOutput = document.querySelector("#buttonOutput");

// Selecting the HTML input elements whose values we care about collecting
// FORM
const nameInput_Form = document.querySelector("#nameInput-form");
const studentCheck_Form = document.querySelector("#studentCheck-form");
const numInput_Form = document.querySelector("#numInput-form");
// BUTTON
const nameInput_Btn = document.querySelector("#nameInput-btn");
const studentCheck_Btn = document.querySelector("#studentCheck-btn");
const numInput_Btn = document.querySelector("#numInput-btn");

// Selecting the two different HTML elements that will listen for user action
const submitForm = document.querySelector("#submitForm");
const enterButton = document.querySelector("#enterButton");

// Adding Events that will handle the collection of input data
submitForm.addEventListener("submit", (eventObject) => {
    //If we don't prevent this, then the submit event will collect all the data for us, and send it to the URL. It will then reset all the input fields' values.
    //This might not be the effect we want. So it's common to see these actions get prevented and then handled manually by the developers (that's us!).
    eventObject.preventDefault();

    // Collect the user's data
    // NOTICE: We only grab the values from the form's inputs
    userData.name = nameInput_Form.value;
    userData.isStudent = studentCheck_Form.value;
    userData.favoriteNumber = numInput_Form.value;

    // Reset the input fields
    nameInput_Form.value = "";
    studentCheck_Form.value = "";
    numInput_Form.value = null;
});

enterButton.addEventListener("click", (eventObject) => {
    //There is no need to prevent any default action because a click event doesn't fire any disruptive actions by default

    

});