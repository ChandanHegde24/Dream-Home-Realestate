function showPage(pageId) {
      const pages = document.querySelectorAll('.page');
      pages.forEach(page => page.classList.remove('active'));
      document.getElementById(pageId).classList.add('active');
    }
    //Menue bar function
    function myFunction(x) {
      x.classList.toggle("change");
    }
    //contactus form
    function submitForm(event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      document.getElementById('formMessage').innerText =
        `Thank you, ${name}. Your message has been sent.`;

      event.target.reset();
    }
    //darktheme function
    function toggleTheme() {
      const root = document.documentElement;
      const light = {
        '--bg-color': '#f8f9fa',
        '--header-bg': 'linear-gradient(135deg, #4CAF50, #2e7d32)',
        '--nav-bg': '#ffffff',
        '--text-color': '#333',
        '--button-bg': '#4CAF50',
        '--button-hover-bg': '#388e3c'
      };
      const dark = {
        '--bg-color': '#121212',
        '--header-bg': 'linear-gradient(135deg, #1E88E5, #0D47A1)',
        '--nav-bg': '#1e1e1e',
        '--text-color': '#f1f1f1',
        '--button-bg': '#1E88E5',
        '--button-hover-bg': '#0D47A1'
      };

      const isDark = root.style.getPropertyValue('--bg-color') === dark['--bg-color'];
      const theme = isDark ? light : dark;

      for (let key in theme) {
        root.style.setProperty(key, theme[key]);
      }
    }

    function calculateEMI() {
      // Get input values
      const principal = parseFloat(document.getElementById('loanAmount').value);
      const annualInterestRate = parseFloat(document.getElementById('interestRate').value);
      const loanTenureYears = parseFloat(document.getElementById('loanTenure').value);
  
      if (isNaN(principal) || isNaN(annualInterestRate) || isNaN(loanTenureYears) ||
          principal <= 0 || annualInterestRate <= 0 || loanTenureYears <= 0) {
          document.getElementById('emiResult').innerText = "Please enter valid values!";
          return;
      }
  
      // Convert annual interest rate to monthly and tenure to months
      const monthlyInterestRate = annualInterestRate / (12 * 100);
      const numberOfMonths = loanTenureYears * 12;
  
      // EMI Formula
      const emi = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
                  (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);
  
      // Show result
      document.getElementById('emiResult').innerText = `Your EMI: ₹${emi.toFixed(2)}`;
  }
       function clearText() {
           document.getElementById("loanAmount").value = "";
           document.getElementById('loanTenure').value = "";
           document.getElementById('interestRate').value = "";
            }