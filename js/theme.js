// Renk listesi
const colors = ['#35573d', '#144348', '#6d4e3f']; 
const backgorund_colors = ['#f1efee', '#e6e9e2', '#fcfcfc']; 
const section_background_colors = ['#b1b495', '#d3bc9d', '#f3eee7']; 
const text_colors = ['#35573d', '#144348', '#8a6a5a']; 
const hr_colors = ['#35573d', '#144348', '#6d4e3f']; 
let currentIndex = 0; 


document.getElementById('changeColorButton').addEventListener('click', function() {
    document.documentElement.style.setProperty('--color', colors[currentIndex]);
    document.documentElement.style.setProperty('--backgorund-color',backgorund_colors[currentIndex]); 
    document.documentElement.style.setProperty('--section-background-color', section_background_colors[currentIndex]); 
    document.documentElement.style.setProperty('--text-color', text_colors[currentIndex]);
    document.documentElement.style.setProperty('--hr-color',hr_colors[currentIndex]);

    currentIndex++;

    if (currentIndex >= colors.length) {
        currentIndex = 0;
    }
});

