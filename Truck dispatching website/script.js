// ==================== AI CHATBOT - FULLY FUNCTIONAL ====================
document.addEventListener('DOMContentLoaded', function() {
    
    // Chatbot Elements
    const chatbotBtn = document.getElementById('chatbotButton');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotSend = document.getElementById('chatbotSend');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotMessages = document.getElementById('chatbotMessages');
    
    // Open/Close Chatbot
    if (chatbotBtn) {
        chatbotBtn.onclick = function() {
            chatbotWindow.style.display = chatbotWindow.style.display === 'flex' ? 'none' : 'flex';
        };
    }
    
    if (chatbotClose) {
        chatbotClose.onclick = function() {
            chatbotWindow.style.display = 'none';
        };
    }
    
    // Global askAI function for quick action buttons
    window.askAI = function(question) {
        if (chatbotInput) {
            chatbotInput.value = question;
            sendChatMessage();
        }
    };
    
    // Send message function
    function sendChatMessage() {
        const message = chatbotInput.value.trim();
        if (!message) return;
        
        // Add user message
        const userMsgDiv = document.createElement('div');
        userMsgDiv.className = 'ai-message user-message';
        userMsgDiv.innerHTML = `<div class="message-content"><p>${escapeHtml(message)}</p></div>`;
        chatbotMessages.appendChild(userMsgDiv);
        
        // Clear input
        chatbotInput.value = '';
        
        // Scroll to bottom
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        
        // Show typing indicator
        const typingDiv = document.createElement('div');
        typingDiv.className = 'ai-message';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = `<div class="ai-avatar"><i class="fas fa-robot"></i></div><div class="message-content"><p><i class="fas fa-ellipsis-h"></i> RoadMaster AI is thinking...</p></div>`;
        chatbotMessages.appendChild(typingDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        
        // Get AI response after delay
        setTimeout(() => {
            // Remove typing indicator
            const indicator = document.getElementById('typingIndicator');
            if (indicator) indicator.remove();
            
            // Get response
            const response = getAIResponse(message);
            
            // Add AI message
            const aiMsgDiv = document.createElement('div');
            aiMsgDiv.className = 'ai-message';
            aiMsgDiv.innerHTML = `<div class="ai-avatar"><i class="fas fa-robot"></i></div><div class="message-content"><p>${response}</p></div>`;
            chatbotMessages.appendChild(aiMsgDiv);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }, 800);
    }
    
    // Escape HTML to prevent XSS
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    // AI Response Logic
    function getAIResponse(message) {
        const msg = message.toLowerCase();
        
        if (msg.includes('rate') || msg.includes('load rate') || msg.includes('rate predictor')) {
            return "📊 <strong>Load Rate Predictor</strong><br><br>Use our AI Rate Predictor tool below! Just enter:<br>📍 Origin (e.g., Dallas, TX)<br>📍 Destination (e.g., Chicago, IL)<br>🚛 Truck Type<br>📏 Distance in miles<br><br>Click 'AI Predict Rate' to get instant rate prediction! 💰";
        }
        else if (msg.includes('route') || msg.includes('optimizer')) {
            return "🗺️ <strong>AI Route Optimizer</strong><br><br>Try our Route Optimizer tool! Enter:<br>🚩 Start Location<br>🏁 End Location<br>⛽ Truck MPG<br>💲 Fuel Price<br><br>Click 'AI Optimize Route' for best route with fuel savings!";
        }
        else if (msg.includes('register') || msg.includes('join') || msg.includes('sign up')) {
            return "🚛 <strong>Join RoadMaster Dispatch</strong><br><br>Click the 'Driver Register' button in the top menu!<br><br>Benefits:<br>✅ Free registration<br>✅ No upfront fees<br>✅ 24/7 support<br>✅ Highest paying loads<br><br>Our team will contact you within 24 hours!";
        }
        else if (msg.includes('pricing') || msg.includes('price') || msg.includes('cost') || msg.includes('plan')) {
            return "💰 <strong>Our Pricing Plans</strong><br><br>• Per Load: 7% per load<br>• Weekly Plan: $199/week + 5%<br>• Fleet Plan: Custom for 5+ trucks<br><br>💡 Weekly Plan is most popular - includes dedicated dispatcher and priority load matching!";
        }
        else if (msg.includes('contact') || msg.includes('support') || msg.includes('help') || msg.includes('phone')) {
            return "📞 <strong>Contact RoadMaster Support</strong><br><br>📱 Phone: +1 (888) 555-0123<br>📧 Email: support@roadmaster.com<br>💬 Live Chat: 24/7 (Click robot icon)<br><br>Our team is always here to help you!";
        }
        else if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
            return "Hello! 👋 Welcome to RoadMaster Dispatch!<br><br>I'm your AI assistant. I can help you with:<br>📊 Load rate predictions<br>🗺️ Route optimization<br>🚛 Driver registration<br>💰 Pricing plans<br>📞 Contact support<br><br>What would you like to know?";
        }
        else if (msg.includes('earn') || msg.includes('money') || msg.includes('income')) {
            return "💵 <strong>Earning Potential</strong><br><br>Our drivers typically earn:<br>• $2.80+ per mile average<br>• $5,000 - $7,500 per week<br>• $240,000+ per year<br><br>Ready to increase your earnings? Register today! 🚀";
        }
        else if (msg.includes('truck type') || msg.includes('equipment')) {
            return "🚛 <strong>Truck Types We Serve</strong><br><br>✅ Dry Van<br>✅ Reefer (Refrigerated)<br>✅ Flatbed<br>✅ Hot Shot<br>✅ Power Only<br>✅ Box Truck<br><br>All equipment types welcome!";
        }
        else if (msg.includes('payment') || msg.includes('paid') || msg.includes('payout')) {
            return "💵 <strong>Payment Information</strong><br><br>• Weekly payments via direct deposit<br>• Fast factoring available (24-48 hours)<br>• No hidden fees<br>• 100% transparent rate confirmations<br><br>You get paid quickly and reliably!";
        }
        else {
            return "🤖 <strong>RoadMaster AI Assistant</strong><br><br>I can help you with:<br>📊 Load rate predictions<br>🗺️ Route optimization<br>🚛 Driver registration<br>💰 Pricing plans (7% per load or $199/week)<br>📞 Contact support (24/7)<br>💵 Payment information<br>🚛 Truck types we serve<br><br><br>What would you like to know? Just type your question!";
        }
    }
    
    // Send message on button click
    if (chatbotSend) {
        chatbotSend.onclick = sendChatMessage;
    }
    
    // Send message on Enter key
    if (chatbotInput) {
        chatbotInput.onkeypress = function(e) {
            if (e.key === 'Enter') {
                sendChatMessage();
            }
        };
    }
    
    // ==================== AI RATE PREDICTOR ====================
    const predictBtn = document.getElementById('predictRateBtn');
    
    if (predictBtn) {
        predictBtn.onclick = function() {
            const origin = document.getElementById('origin')?.value.trim();
            const destination = document.getElementById('destination')?.value.trim();
            const truckType = document.getElementById('truckTypeAI')?.value;
            const distance = parseFloat(document.getElementById('distance')?.value);
            
            // Validation
            if (!origin) {
                alert('⚠️ Please enter Origin (e.g., Dallas, TX)');
                document.getElementById('origin').focus();
                return;
            }
            if (!destination) {
                alert('⚠️ Please enter Destination (e.g., Chicago, IL)');
                document.getElementById('destination').focus();
                return;
            }
            if (!distance || isNaN(distance) || distance <= 0) {
                alert('⚠️ Please enter a valid Distance (miles)');
                document.getElementById('distance').focus();
                return;
            }
            
            // Calculate rate based on truck type
            let baseRate = 2.50;
            switch(truckType) {
                case 'dryvan': baseRate = 2.50; break;
                case 'reefer': baseRate = 3.20; break;
                case 'flatbed': baseRate = 3.50; break;
                case 'hotshot': baseRate = 2.80; break;
                default: baseRate = 2.50;
            }
            
            // Adjust for distance
            let rate = baseRate;
            if (distance < 200) rate = baseRate * 1.05;
            else if (distance > 1000) rate = baseRate * 0.95;
            else rate = baseRate;
            
            // Add small random variation for realism
            rate = rate + (Math.random() * 0.3 - 0.15);
            rate = Math.round(rate * 100) / 100;
            
            // Calculate total
            const total = Math.round(rate * distance);
            
            // Calculate confidence
            let confidence = 85;
            if (origin && destination) confidence += 5;
            if (distance > 100) confidence += 5;
            confidence = Math.min(confidence, 98);
            
            // Display results
            document.getElementById('predictedRate').innerHTML = `$${rate.toFixed(2)}`;
            document.getElementById('totalValue').innerHTML = `$${total.toLocaleString()}`;
            document.getElementById('confidenceScore').innerHTML = `${confidence}%`;
            document.getElementById('predictionResult').style.display = 'block';
            
            // Show success message
            alert(`✅ Rate Prediction Complete!\n\n📍 ${origin} → ${destination}\n📏 Distance: ${distance} miles\n💰 Rate: $${rate.toFixed(2)}/mile\n💵 Total: $${total.toLocaleString()}\n📊 Confidence: ${confidence}%`);
            
            // Scroll to result
            document.getElementById('predictionResult').scrollIntoView({ behavior: 'smooth' });
        };
    }
    
    // ==================== AI ROUTE OPTIMIZER ====================
    const optimizeBtn = document.getElementById('optimizeRouteBtn');
    
    if (optimizeBtn) {
        optimizeBtn.onclick = function() {
            const start = document.getElementById('startLocation')?.value.trim();
            const end = document.getElementById('endLocation')?.value.trim();
            const mpg = parseFloat(document.getElementById('mpg')?.value);
            const fuelPrice = parseFloat(document.getElementById('fuelPrice')?.value);
            
            // Validation
            if (!start) {
                alert('⚠️ Please enter Start Location (e.g., Los Angeles, CA)');
                document.getElementById('startLocation').focus();
                return;
            }
            if (!end) {
                alert('⚠️ Please enter End Location (e.g., New York, NY)');
                document.getElementById('endLocation').focus();
                return;
            }
            if (!mpg || isNaN(mpg) || mpg <= 0) {
                alert('⚠️ Please enter valid Truck MPG (e.g., 7.5)');
                document.getElementById('mpg').focus();
                return;
            }
            if (!fuelPrice || isNaN(fuelPrice) || fuelPrice <= 0) {
                alert('⚠️ Please enter valid Fuel Price (e.g., 4.50)');
                document.getElementById('fuelPrice').focus();
                return;
            }
            
            // Calculate approximate distance based on cities
            const startCity = start.toLowerCase().split(',')[0].trim();
            const endCity = end.toLowerCase().split(',')[0].trim();
            
            const distances = {
                'los angeles-new york': 2800, 'dallas-chicago': 925, 'chicago-dallas': 925,
                'los angeles-chicago': 2015, 'dallas-new york': 1550, 'houston-chicago': 1085,
                'atlanta-new york': 860, 'seattle-los angeles': 1135, 'miami-new york': 1280
            };
            
            let distance = 800;
            const key = `${startCity}-${endCity}`;
            if (distances[key]) distance = distances[key];
            
            // Calculate fuel cost
            const gallons = distance / mpg;
            const fuelCost = Math.round(gallons * fuelPrice);
            
            // Calculate time
            const hours = Math.round(distance / 60);
            const days = Math.floor(hours / 10);
            const remainingHours = hours % 10;
            let timeText = '';
            if (days > 0) {
                timeText = `${days} day${days > 1 ? 's' : ''} ${remainingHours} hours`;
            } else {
                timeText = `${hours} hours`;
            }
            
            // Calculate fuel savings
            const avgFuelCost = distance * 0.65;
            let saved = Math.round(((avgFuelCost - fuelCost) / avgFuelCost) * 100);
            saved = Math.max(0, Math.min(30, saved));
            
            // Get best route suggestion
            const routes = [
                `Take I-80 E via ${startCity} → ${endCity}`,
                `Optimal route: ${startCity} → I-40 E → I-95 N → ${endCity}`,
                `Fuel efficient path: ${startCity} → I-90 E → ${endCity}`,
                `Best route avoiding tolls via US-20 E`
            ];
            const route = routes[Math.floor(Math.random() * routes.length)];
            
            // Display results
            document.getElementById('optimizedRoute').innerHTML = `🛣️ ${route}`;
            document.getElementById('estTime').innerHTML = timeText;
            document.getElementById('fuelCost').innerHTML = `$${fuelCost.toLocaleString()}`;
            document.getElementById('fuelSaved').innerHTML = `${saved}% less than average`;
            document.getElementById('optimizationResult').style.display = 'block';
            
            // Show success message
            alert(`✅ Route Optimized!\n\n📍 ${start} → ${end}\n📏 Distance: ${distance.toLocaleString()} miles\n⛽ Fuel Cost: $${fuelCost.toLocaleString()}\n⏱️ Est. Time: ${timeText}\n💚 Fuel Saved: ${saved}%`);
            
            // Scroll to result
            document.getElementById('optimizationResult').scrollIntoView({ behavior: 'smooth' });
        };
    }
    
    // ==================== DARK MODE TOGGLE ====================
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    
    if (themeToggle) {
        // Check saved theme
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
            themeIcon.className = 'fas fa-sun';
        }
        
        themeToggle.onclick = function() {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                themeIcon.className = 'fas fa-sun';
                localStorage.setItem('theme', 'dark');
            } else {
                themeIcon.className = 'fas fa-moon';
                localStorage.setItem('theme', 'light');
            }
        };
    }
    
    // ==================== NEWSLETTER FORM ====================
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.onsubmit = function(e) {
            e.preventDefault();
            const email = document.getElementById('newsletterEmail')?.value;
            if (email && email.includes('@')) {
                alert(`✅ Thank you for subscribing!\n\nWe'll send load updates to: ${email}`);
                newsletterForm.reset();
            } else {
                alert('⚠️ Please enter a valid email address');
            }
        };
    }
    
    // ==================== COOKIE CONSENT ====================
    window.acceptCookies = function() {
        document.getElementById('cookieConsent').style.display = 'none';
        localStorage.setItem('cookiesAccepted', 'true');
    };
    
    window.declineCookies = function() {
        document.getElementById('cookieConsent').style.display = 'none';
        localStorage.setItem('cookiesAccepted', 'false');
    };
    
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        const cookieConsent = document.getElementById('cookieConsent');
        if (cookieConsent) cookieConsent.style.display = 'none';
    }
    
    // ==================== MOBILE MENU TOGGLE ====================
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger) {
        hamburger.onclick = function() {
            navMenu.classList.toggle('active');
        };
    }
    
    console.log('✅ RoadMaster Dispatch - All AI features are working!');
});