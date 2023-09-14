// Get elements from the HTML
const AGEINPUT = document.getElementById("ageInput");
const CALCULATEBTN = document.getElementById("calculateBtn");
const RESULTPARAGRAPH = document.getElementById("result");

// Event listener for the button click
CALCULATEBTN.addEventListener("click", calculateRemainingTime);

// Function to calculate remaining days, weeks, and months
function calculateRemainingTime() {
    const currentAge = parseInt(AGEINPUT.value);
    const lifeExpectancy = 90; // Assuming a life expectancy of 90 years
    const yearsRemaining = lifeExpectancy - currentAge;
    const daysRemaining = yearsRemaining * 365;
    const weeksRemaining = yearsRemaining * 52;
    const monthsRemaining = yearsRemaining * 12;

    // Display the result
    RESULTPARAGRAPH.textContent = `You have ${daysRemaining} days, ${weeksRemaining} weeks, and ${monthsRemaining} months left.`;
}

