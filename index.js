<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>M-Pesa Ready · Digital Service</title>
  <!-- Font Awesome for icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
    }

    body {
      background: linear-gradient(145deg, #f6f9fc 0%, #e9f1f8 100%);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      color: #1a2b3e;
      line-height: 1.5;
    }

    /* header / nav */
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.2rem 5%;
      background: rgba(255, 255, 255, 0.75);
      backdrop-filter: blur(10px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
      border-bottom: 1px solid rgba(0, 100, 80, 0.1);
      flex-wrap: wrap;
      gap: 1rem;
    }

    .logo {
      font-weight: 700;
      font-size: 1.8rem;
      letter-spacing: -0.5px;
      color: #0f3b2c;
    }

    .logo span {
      color: #1e7e5c;
      background: #d0f0e4;
      padding: 0.15rem 0.7rem;
      border-radius: 40px;
      font-size: 1.2rem;
      margin-left: 6px;
      font-weight: 500;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      font-weight: 500;
    }

    .nav-links a {
      text-decoration: none;
      color: #1e3f36;
      transition: 0.2s;
      font-size: 1.05rem;
    }

    .nav-links a:hover {
      color: #1e7e5c;
    }

    .mpesa-badge {
      background: #00a86b;
      color: white;
      padding: 0.45rem 1.2rem;
      border-radius: 40px;
      font-size: 0.9rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .mpesa-badge i {
      font-size: 1.1rem;
    }

    /* main */
    main {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem 5% 3rem;
    }

    .hero {
      text-align: center;
      max-width: 750px;
      margin-bottom: 2rem;
    }

    .hero h1 {
      font-size: 3.2rem;
      font-weight: 800;
      line-height: 1.2;
      letter-spacing: -1px;
      color: #0a2e23;
      margin-bottom: 1rem;
    }

    .hero h1 i {
      color: #1e7e5c;
      font-size: 2.8rem;
      margin-right: 8px;
    }

    .hero p {
      font-size: 1.2rem;
      color: #3a5a4e;
      max-width: 600px;
      margin: 0 auto;
    }

    /* card + pricing */
    .pricing-section {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      justify-content: center;
      align-items: stretch;
      width: 100%;
      max-width: 1100px;
      margin-top: 1rem;
    }

    .card {
      background: #ffffff;
      border-radius: 36px;
      padding: 2rem 2rem 2.2rem;
      box-shadow: 0 20px 35px -8px rgba(0, 70, 50, 0.15), 0 8px 20px -6px rgba(0, 0, 0, 0.05);
      flex: 1 1 300px;
      max-width: 420px;
      transition: 0.25s ease;
      border: 1px solid rgba(30, 126, 92, 0.12);
      display: flex;
      flex-direction: column;
    }

    .card:hover {
      transform: translateY(-6px);
      box-shadow: 0 28px 40px -10px rgba(18, 100, 70, 0.2);
    }

    .card-premium {
      border-top: 6px solid #1e7e5c;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    .card-header h3 {
      font-size: 1.8rem;
      font-weight: 700;
      color: #0d3c2e;
    }

    .price {
      font-size: 2rem;
      font-weight: 800;
      color: #0a2e23;
      letter-spacing: -1px;
    }

    .price small {
      font-size: 1rem;
      font-weight: 500;
      color: #547a6b;
      letter-spacing: 0;
    }

    .features {
      list-style: none;
      margin: 1.5rem 0 2rem;
      flex: 1;
    }

    .features li {
      margin-bottom: 0.9rem;
      display: flex;
      align-items: center;
      gap: 0.8rem;
      color: #1f4338;
      font-weight: 500;
    }

    .features li i {
      color: #1e7e5c;
      width: 20px;
      font-size: 1rem;
    }

    .btn {
      border: none;
      background: #1e7e5c;
      color: white;
      padding: 1rem 1.8rem;
      border-radius: 60px;
      font-weight: 600;
      font-size: 1.1rem;
      cursor: pointer;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      width: 100%;
      box-shadow: 0 10px 18px -8px rgba(20, 100, 70, 0.4);
      margin-top: auto;
    }

    .btn i {
      font-size: 1.2rem;
    }

    .btn:hover {
      background: #146b4c;
      transform: scale(1.01);
      box-shadow: 0 14px 22px -8px #0d4f3a;
    }

    .btn-secondary {
      background: #f0f7f4;
      color: #1e5e4a;
      box-shadow: none;
      border: 1px solid #b8d9cd;
    }

    .btn-secondary:hover {
      background: #e2efea;
      color: #0b3f30;
    }

    /* mock M-Pesa simulation panel */
    .mpesa-panel {
      background: white;
      border-radius: 36px;
      padding: 2rem 2rem 2rem;
      margin-top: 2.5rem;
      max-width: 800px;
      width: 100%;
      border: 1px solid #c3e2d6;
      box-shadow: 0 12px 28px -12px rgba(0, 80, 60, 0.2);
    }

    .mpesa-panel h4 {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 1.4rem;
      font-weight: 700;
      color: #0d3c2e;
      margin-bottom: 1rem;
    }

    .mpesa-panel h4 i {
      color: #00a86b;
    }

    .sim-row {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      align-items: center;
      margin-top: 1rem;
    }

    .sim-input {
      flex: 2 1 200px;
      padding: 1rem 1.2rem;
      border-radius: 60px;
      border: 1.5px solid #cfe3db;
      font-size: 1rem;
      outline: none;
      transition: 0.15s;
      background: #f8fdfb;
    }

    .sim-input:focus {
      border-color: #1e7e5c;
      box-shadow: 0 0 0 4px rgba(30, 126, 92, 0.1);
    }

    .sim-btn {
      flex: 1 0 160px;
      background: #1e7e5c;
      border: none;
      padding: 1rem 1.5rem;
      border-radius: 60px;
      color: white;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      transition: 0.2s;
    }

    .sim-btn:hover {
      background: #146b4c;
    }

    .sim-message {
      margin-top: 1.2rem;
      padding: 0.9rem 1.2rem;
      border-radius: 40px;
      background: #e8f3ef;
      color: #0d3c2e;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 10px;
      border-left: 6px solid #1e7e5c;
      word-break: break-word;
    }

    .sim-message i {
      color: #1e7e5c;
    }

    /* footer */
    .footer {
      text-align: center;
      padding: 1.5rem;
      font-size: 0.9rem;
      color: #547a6b;
      border-top: 1px solid rgba(30, 126, 92, 0.15);
      background: rgba(255, 255, 255, 0.6);
    }

    /* Responsive */
    @media (max-width: 640px) {
      .hero h1 {
        font-size: 2.4rem;
      }
      .navbar {
        flex-direction: column;
        align-items: stretch;
        text-align: center;
      }
      .nav-links {
        justify-content: center;
      }
      .mpesa-badge {
        align-self: center;
      }
    }
  </style>
</head>
<body>
  <!-- navigation -->
  <nav class="navbar">
    <div class="logo">
      pay<span>link</span>
    </div>
    <div class="nav-links">
      <a href="#">Product</a>
      <a href="#">Pricing</a>
      <a href="#">Developers</a>
    </div>
    <div class="mpesa-badge">
      <i class="fas fa-mobile-alt"></i> M-PESA READY
    </div>
  </nav>

  <main>
    <!-- hero -->
    <div class="hero">
      <h1>
        <i class="fas fa-bolt"></i> Instant payments,<br> zero friction
      </h1>
      <p>Accept M-Pesa and other mobile money. This is the front-end — backend & Daraja API integration coming next.</p>
    </div>

    <!-- pricing cards -->
    <div class="pricing-section">
      <!-- Starter card -->
      <div class="card">
        <div class="card-header">
          <h3>Starter</h3>
          <div class="price">$0<small>/mo</small></div>
        </div>
        <ul class="features">
          <li><i class="fas fa-check-circle"></i> 100 transactions</li>
          <li><i class="fas fa-check-circle"></i> Basic M-Pesa simulation</li>
          <li><i class="fas fa-check-circle"></i> Email support</li>
          <li><i class="fas fa-check-circle"></i> 1 team member</li>
        </ul>
        <button class="btn btn-secondary" id="starterBtn">
          <i class="fas fa-play"></i> Try simulation
        </button>
      </div>

      <!-- Premium card (highlighted) -->
      <div class="card card-premium">
        <div class="card-header">
          <h3>Premium</h3>
          <div class="price">$29<small>/mo</small></div>
        </div>
        <ul class="features">
          <li><i class="fas fa-check-circle"></i> Unlimited transactions</li>
          <li><i class="fas fa-check-circle"></i> Real M-Pesa API (ready)</li>
          <li><i class="fas fa-check-circle"></i> Priority 24/7 support</li>
          <li><i class="fas fa-check-circle"></i> 10 team members</li>
          <li><i class="fas fa-check-circle"></i> Webhooks & callbacks</li>
        </ul>
        <button class="btn" id="premiumBtn">
          <i class="fas fa-crown"></i> Get started
        </button>
      </div>
    </div>

    <!-- M-Pesa simulation / interaction area (mock backend) -->
    <div class="mpesa-panel" id="mpesaPanel">
      <h4>
        <i class="fas fa-sim-card"></i> M-Pesa payment simulation
      </h4>
      <p style="color: #3f6256; margin-bottom: 0.5rem;">
        <i class="fas fa-info-circle" style="color:#1e7e5c;"></i>
        This is a frontend demo. Backend & Daraja API will be connected.
      </p>
      <div class="sim-row">
        <input type="tel" id="phoneInput" class="sim-input" placeholder="e.g. 0712 345 678" value="0712345678">
        <button class="sim-btn" id="simulatePayBtn">
          <i class="fas fa-paper-plane"></i> Simulate STK push
        </button>
      </div>
      <div class="sim-message" id="simMessage">
        <i class="fas fa-mobile-alt"></i>
        <span id="messageText">Enter phone number and click simulate — we'll mock an M-Pesa response.</span>
      </div>
    </div>
  </main>

  <footer class="footer">
    <p>© 2025 paylink — ready for M-Pesa Daraja integration. Backend next.</p>
  </footer>

  <!-- JavaScript (front-end only, mock interactions) -->
  <script>
    (function() {
      // ---- DOM references ----
      const phoneInput = document.getElementById('phoneInput');
      const simulateBtn = document.getElementById('simulatePayBtn');
      const messageSpan = document.getElementById('messageText');
      const simMessageDiv = document.getElementById('simMessage');
      
      const starterBtn = document.getElementById('starterBtn');
      const premiumBtn = document.getElementById('premiumBtn');
      
      // ---- helper: update message with icon ----
      function setMessage(text, type = 'info') {
        // update the span text
        messageSpan.innerText = text;
        
        // change icon based on type (optional visual feedback)
        const iconElement = simMessageDiv.querySelector('i');
        if (type === 'success') {
          iconElement.className = 'fas fa-check-circle';
          iconElement.style.color = '#1e7e5c';
          simMessageDiv.style.borderLeftColor = '#1e7e5c';
        } else if (type === 'error') {
          iconElement.className = 'fas fa-exclamation-triangle';
          iconElement.style.color = '#b33a3a';
          simMessageDiv.style.borderLeftColor = '#b33a3a';
        } else if (type === 'pending') {
          iconElement.className = 'fas fa-spinner fa-pulse';
          iconElement.style.color = '#1e7e5c';
          simMessageDiv.style.borderLeftColor = '#1e7e5c';
        } else {
          iconElement.className = 'fas fa-mobile-alt';
          iconElement.style.color = '#1e7e5c';
          simMessageDiv.style.borderLeftColor = '#1e7e5c';
        }
      }

      // ---- simple phone validation (Kenyan format mock) ----
      function isValidPhone(phone) {
        // remove spaces, dashes, etc.
        const cleaned = phone.replace(/[\s\-\(\)]/g, '');
        // allow formats like 0712345678, 0112345678, 254712345678, +254712345678
        if (/^(?:\+?254|0)(7\d{8}|1\d{8})$/.test(cleaned)) {
          return true;
        }
        // also accept generic 10-digit numbers for simulation
        return /^\d{10}$/.test(cleaned);
      }

      // ---- mock STK push simulation ----
      function simulateMpesaPayment() {
        const rawPhone = phoneInput.value.trim();
        if (!rawPhone) {
          setMessage('Please enter a phone number first.', 'error');
          return;
        }

        if (!isValidPhone(rawPhone)) {
          setMessage('Enter a valid Kenyan number (e.g., 0712 345 678 or 254712345678).', 'error');
          return;
        }

        // clean phone for display
        const cleanedPhone = rawPhone.replace(/[\s\-\(\)]/g, '');

        // update UI: pending state
        setMessage(`Sending STK push to ${cleanedPhone}... please wait.`, 'pending');
        
        // disable button to avoid double clicks
        simulateBtn.disabled = true;
        simulateBtn.style.opacity = '0.7';
        
        // simulate network delay (backend would handle this via Daraja)
        setTimeout(() => {
          // success simulation (almost always success, sometimes a mock failure for demo)
          const isSuccess = Math.random() < 0.9; // 90% success rate for realistic feel
          
          if (isSuccess) {
            // generate mock checkout ID / receipt
            const mockReceipt = 'MP' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
            setMessage(`✅ M-Pesa payment request sent to ${cleanedPhone}. Receipt: ${mockReceipt} (simulated).`, 'success');
            
            // optionally, you could show a detailed alert, but we keep in message area
          } else {
            setMessage(`❌ M-Pesa request to ${cleanedPhone} failed (simulated network issue). Try again.`, 'error');
          }
          
          // re-enable button
          simulateBtn.disabled = false;
          simulateBtn.style.opacity = '1';
        }, 1500); // 1.5 sec delay
      }

      // ---- event listeners ----
      simulateBtn.addEventListener('click', simulateMpesaPayment);
      
      // allow pressing Enter in phone field
      phoneInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          simulateMpesaPayment();
        }
      });

      // ---- starter / premium buttons (mock actions) ----
      starterBtn.addEventListener('click', () => {
        setMessage('🧪 Starter plan selected — simulation mode activated. (Backend integration pending)', 'info');
        // scroll to simulation panel for convenience
        document.getElementById('mpesaPanel').scrollIntoView({ behavior: 'smooth', block: 'center' });
      });

      premiumBtn.addEventListener('click', () => {
        setMessage('⭐ Premium plan selected — ready for Daraja API & backend. Mock STK push available below.', 'success');
        document.getElementById('mpesaPanel').scrollIntoView({ behavior: 'smooth', block: 'center' });
      });

      // initial message
      setMessage('Enter phone number and click simulate — we\'ll mock an M-Pesa response.', 'info');
      
      // if the user clicks on the phone input, select all text for easy edit
      phoneInput.addEventListener('focus', () => phoneInput.select());
    })();
  </script>
</body>
</html>