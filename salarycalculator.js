
// Employee details
const employeeName = 'Jojo';
const employeeId = 12345678;
const gender = 'Male';
const residence = 'Siaya';
const basicSalary = 70000;
const benefits = 11200;
const paymentPeriod = '1 July'
const YearOfTaxation= 2023;

//Constants for tax rates and deductions
const TAX_RATE = 0.3;
const NHIF_RATE = 0.025;
const NSSF_RATE = 0.06;

// use function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    // To Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // To Calculate tax
    const tax = grossSalary * TAX_RATE;

    // To Calculate NHIF deductions
    const nhifDeductions = grossSalary * NHIF_RATE;

    // To Calculate NSSF deductions
    const nssfDeductions = grossSalary * NSSF_RATE;

    // To Calculate net salary
    const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;

    return {
        grossSalary,
        tax,
        nhifDeductions,
        nssfDeductions,
        netSalary
    };
}



// Calculate net salary
const salaryDetails = calculateNetSalary(basicSalary, benefits);

console.log(`Employee Name: ${employeeName}`);
console.log(`Employee ID: ${employeeId}`);
console.log(`Gender: ${gender}`);
console.log(`Residence: ${residence}`);
console.log(`paymentPeriod: ${paymentPeriod}`);
console.log(`YearOfTaxation: ${YearOfTaxation}`);
console.log(salaryDetails);