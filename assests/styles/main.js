document.addEventListener('DOMContentLoaded', () => {
    const updateTime = () => {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        const day = now.toLocaleDateString('en-GB', { weekday: 'long' });

        document.getElementById('current-time').innerText = utcTime;
        document.getElementById('current-day').innerText = day;
    };

    updateTime();
    setInterval(updateTime, 1000); // Update every second
});