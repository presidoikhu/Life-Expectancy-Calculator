# Life-Expectancy-Calculator
This is a Web App that calculates Life Expectancy 
i.e calculates the weeks, months and days the user has.
the maximum age is 90 years .
so to get the remaining years I created a formula
lifeExpectancy = 90; // Assuming a life expectancy of 90 years
yearsRemaining = lifeExpectancy - currentAge;
daysRemaining = yearsRemaining * 365;
weeksRemaining = yearsRemaining * 52;
monthsRemaining = yearsRemaining * 12;
from the above statements we had to declare
lifeExpectancy, yearsRemaining , daysRemaining, weeksRemaining, monthsRemaining,
and currentAge as variable names using let.
AGEINPUT, CALCULATEBTN, and RESULTPARAGRAPH were also declared as constants.
had to use ES6 templates literals for the output section to display output.



