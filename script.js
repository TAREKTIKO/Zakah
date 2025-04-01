// معادلة حساب الراتب
function calculateSalary() {
    // Get the salary value from the input field
    const salaryInput = document.getElementById('salaryInput');
    const salary = parseFloat(salaryInput.value);
    
    // Get the result output elements
    const originalOutput = document.getElementById('originalSalaryOutput');
    const deductionOutput = document.getElementById('deductionOutput');
    const netSalaryOutput = document.getElementById('netSalaryOutput');
    const resultSection = document.getElementById('resultSection');
    
    // Check if the input is valid
    if (!isNaN(salary) && salary > 0) {
        // Calculate the deduction (2.5% of the salary)
        const deduction = salary * 0.025;
        
        // Calculate the net salary after deduction
        const netSalary = salary - deduction;
        
        // Display the results in the output fields
        originalOutput.textContent = formatCurrency(salary);
        deductionOutput.textContent = formatCurrency(deduction);
        netSalaryOutput.textContent = formatCurrency(netSalary);
        
        // Show the result section
        resultSection.style.display = 'block';
    } else {
        // Show error message
        alert("Please enter a valid positive number for salary.");
        salaryInput.focus();
        resultSection.style.display = 'none';
    }
}

function formatCurrency(amount) {
    // Format as currency with 2 decimal places
    return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}

// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.header-links ul');
    
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.header-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
});

// top button
//w3schools this code source
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }