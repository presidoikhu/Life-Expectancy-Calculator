// Get elements from the HTML
const AGEINPUT = document.getElementById("ageInput");
const CALCULATEBTN = document.getElementById("calculateBtn");
const RESULTPARAGRAPH = document.getElementById("result");

// Event listener for the button click
CALCULATEBTN.addEventListener("click", calculateRemainingTime);

// Function to calculate remaining days, weeks, and months
function calculateRemainingTime() {
    let currentAge = parseInt(AGEINPUT.value);
    let lifeExpectancy = 90; // Assuming a life expectancy of 90 years
    let yearsRemaining = lifeExpectancy - currentAge;
    let daysRemaining = yearsRemaining * 365;
    let weeksRemaining = yearsRemaining * 52;
    let monthsRemaining = yearsRemaining * 12;

    // Display the result
    RESULTPARAGRAPH.textContent = `You have ${daysRemaining} days, ${weeksRemaining} weeks, and ${monthsRemaining} months left.`;
}

