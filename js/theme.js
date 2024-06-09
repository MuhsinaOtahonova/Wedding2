// Renk listesi
const colors = ['#35573d', '#144348', '#6d4e3f']; 
const backgorund_colors = ['#f1efee', '#e6e9e2', '#fcfcfc']; 
const section_background_colors = ['#b1b495', '#d3bc9d', '#f3eee7']; 
const text_colors = ['#35573d', '#144348', '#8a6a5a']; 
const hr_colors = ['#35573d', '#144348', '#6d4e3f']; 
const font_family = ["Dancing Script",'Arial','Merriweather'];
const font_size = ['17px','px','14px'];
const date_size = ['20px','150px','20px'];
const imageSources = ['img/flower2.png', 'img/flower3.png', 'img/flower.png'];
let currentIndex = 0; 


document.getElementById('changeColorButton').addEventListener('click', function() {
    document.documentElement.style.setProperty('--color', colors[currentIndex]);
    document.documentElement.style.setProperty('--backgorund-color',backgorund_colors[currentIndex]); 
    document.documentElement.style.setProperty('--section-background-color', section_background_colors[currentIndex]); 
    document.documentElement.style.setProperty('--text-color', text_colors[currentIndex]);
    document.documentElement.style.setProperty('--hr-color',hr_colors[currentIndex]);
    document.documentElement.style.setProperty('--font-family',font_family[currentIndex]);
    document.documentElement.style.setProperty('--font-size',font_size[currentIndex]);
    document.documentElement.style.setProperty('--date-size',date_size[currentIndex]);
    const imgElement = document.getElementById('flowerImage');
    const imgElement1 = document.getElementById('flowerImage1');
    const imgElement2 = document.getElementById('flowerImage2');
    imgElement.src = imageSources[currentIndex];
    imgElement1.src = imageSources[currentIndex];
    imgElement2.src = imageSources[currentIndex];

    currentIndex++;

    if (currentIndex >= colors.length) {
        currentIndex = 0;
    }
});

