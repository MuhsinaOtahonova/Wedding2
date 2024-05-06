// Countdown hesaplaması
/*function startCountdown(endDate, elementId) {
    const countdownElement = document.getElementById(elementId);

    const timerInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const distance = endDate - currentTime;

        const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        countdownElement.querySelector('.months').innerText = months + '\n ай';
        countdownElement.querySelector('.days').innerText = days + '\n күні';
        countdownElement.querySelector('.hours').innerText = hours + '\n сағат';
        countdownElement.querySelector('.minutes').innerText = minutes + '\n минут';

        if (distance < 0) {
            clearInterval(timerInterval);
            countdownElement.innerHTML = 'Expired';
        }
    }, 1000);
}


// Başlangıç ve bitiş tarihleri
const startDate = new Date(''); // Başlangıç tarihi, şu an
const endDate = new Date('2024-07-12T18:00:00'); // Bitiş tarihi, istediğiniz tarih

// Countdown timer'ları başlat
startCountdown(endDate, 'countdown1');
*/
// Popup açma fonksiyonu
function acPopup() {
    document.getElementById("popup").style.display = "block";
}

// Popup kapatma fonksiyonu
function kapatPopup() {
    document.getElementById("popup").style.display = "none";
}

// Harita butonuna tıklanınca popup'ı aç
document.getElementById("haritaButonu").addEventListener("click", function(event){
    event.preventDefault();
    acPopup();
});
