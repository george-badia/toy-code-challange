## toy-code-challange
<!-- Challenge 1: Student Grade Generator (Toy Problem) -->
## Student Grade Generator
-So, the code helps find out what grade a student should get based on the marks they have.   

-first create function called calculateGrade that will help in figuring out which grade a student should get based on their marks.

Inside the calculateGrade function, it contains some rules to decide the grade:
If a student gets more than 79 marks, they get an 'A' grade.
If a student gets between 60 and 79 marks, they get a 'B' grade.
If a student gets between 50 and 59 marks, they get a 'C' grade.
If a student gets between 40 and 49 marks, they get a 'D' grade.
If a student gets less than 40 marks, they get an 'E' grade.

After creating calculateGrade function, ask the user to tell or state the marks a student got by showing them a message.  

Once the user types in the marks, the function is used to determine the grade for the student in this case will be one by one (cannot perform many operations at once) .
Finally, the result is shown to the user by printing out the grade in a special message.

<!-- Challenge 2: Speed Detector (Toy Problem) -->
 # Speed Checking Function

-The function checkSpeed(speed) determines demerit points based on speed exceeding a limit.

It follows the rules stated below:

- If the speed is less than or equal to the speed limit (70), it will output "Ok".

- If the speed exceeds the speed limit, demerit points are calculated by getting the difference between the speed and the speed limit,while awarding 1 point for every 5 km/h which has passed the limit in place.   

- If the total demerit points exceed the limit of 12, the output given out will be "License suspended".

## To test the function and ensure its working  

 call checkSpeed(speed) with the speed as the parameter,because parameter is always assigned the valeau of argument like,70,80,90,150 i provided. 

### for Example

checkSpeed(70); // Output: Points: Ok
checkSpeed(80); // Output: Points: 2
checkSpeed(90); // Output: Points: 4
checkSpeed(150); // Output: Points: License suspended 
   
   <!-- Challenge 3: Net Salary Calculator (Toy Problem) -->

   ### Net Salary Calculator

This JavaScript application calculates the net salary based on the given basic salary and benefits by considering tax rates and deductions.
## Employee Details
- Name: Jojo
- Employee ID: 12345678
- Gender: Male
- Residence: Siaya
- Basic Salary: $70,000
- Benefits: $11,200
- Payment Period: 1 July
- Year of Taxation: 2023

# Constants
TAX_RATE: The tax rate set at 30%.
NHIF_RATE: The NHIF rate set at 1.9%.
NSSF_RATE: The NSSF rate set at 6%.

## How to Use
1. Fill in the employee details and salary information.
2. Run the `calculateNetSalary()` function to get the net salary details.
3. The function returns an object with the following details:
   - Gross Salary
   - Tax
   - NHIF Deductions
   - NSSF Deductions
   - Net Salary

# Function
The calculateNetSalary(basicSalary, benefits) function is used to calculate the net salary. 

It follows these steps:

-Calculate the gross salary by adding the basic salary and benefits.
-Calculate the tax based on the gross salary and the tax rate.
-Calculate NHIF deductions based on the gross salary and the NHIF rate.
-Calculate NSSF deductions based on the gross salary and the NSSF rate.
-Calculate the net salary by subtracting tax, NHIF deductions, and NSSF deductions from the gross salary.
The function returns an object with the following details:

-grossSalary: The calculated gross salary.
-tax: The calculated tax amount.
-nhifDeductions: The NHIF deductions amount.
-nssfDeductions: The NSSF deductions amount.
-netSalary: The calculated net salary.

# Example for Usage
```js
// Calculate net salary
const salaryDetails = calculateNetSalary(basicSalary, benefits);

console.log(`Employee Name: ${employeeName}`);
console.log(`Employee ID: ${employeeId}`);
console.log(`Gender: ${gender}`);
console.log(`Residence: ${residence}`);
console.log(`Payment Period: ${paymentPeriod}`);
console.log(`Year of Taxation: ${YearOfTaxation}`);
console.log(salaryDetails);
