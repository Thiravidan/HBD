// Function to calculate the time remaining until the next birthday
function updateCountdown() {
    const birthday = new Date('2024-08-17T00:00:00'); // Make sure this is the correct date and time
    const now = new Date();
    const timeRemaining = birthday - now;
    
    if (timeRemaining <= 0) {
        document.getElementById('countdown').innerHTML = 'It\'s your birthday today!';
        return;
    }
    
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    document.getElementById('countdown').innerHTML = 
        `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
