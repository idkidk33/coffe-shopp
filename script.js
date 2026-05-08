// --- 1. THE GREETING LOGIC ---
const greeting = document.getElementById('greeting');
const hour = new Date().getHours();

if (hour < 12) {
    greeting.textContent = "Good Morning! The Roasted Bean";
} else if (hour < 18) {
    greeting.textContent = "Good Afternoon! The Roasted Bean";
} else {
    greeting.textContent = "Good Evening! The Roasted Bean";
}

// --- 2. THE TOTAL CALCULATOR ---
let runningTotal = 0;
const totalDisplay = document.getElementById('total-price');
const menuItems = document.querySelectorAll('.item');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Get the price and update total
        const price = parseFloat(item.getAttribute('data-price'));
        runningTotal += price;
        
        // Update the screen with 2 decimal places
        totalDisplay.textContent = runningTotal.toFixed(2);
        
        // Visual Feedback: Glow effect instead of just changing color
        item.style.backgroundColor = "#fdfaf7"; 
        item.style.fontWeight = "bold";
        
        // Reset the look after 200ms
        setTimeout(() => {
            item.style.backgroundColor = "";
            item.style.fontWeight = "normal";
        }, 200);
    });
});