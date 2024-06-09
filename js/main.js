// Hedef tarih
var countDownDate = new Date("June 20, 2024 09:30:00").getTime();

// Her saniyede bir geri sayımı güncelle
var x = setInterval(function () {

    // Şu anki tarih ve zamanı al
    var now = new Date().getTime();

    // Geri sayım için kalan zamanı bul
    var distance = countDownDate - now;

    // Gün, saat, dakika ve saniye hesaplamaları
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // HTML'e güncel değerleri yerleştir
    document.getElementById("days").innerHTML = "<p class=' date fs-1'>" + days + "</p>";
    document.getElementById("hours").innerHTML = "<p class=' date fs-1'>" + hours + "</p>";
    document.getElementById("minutes").innerHTML = "<p class=' date fs-1'>" + minutes + "</p>";
    document.getElementById("seconds").innerHTML = "<p class=' date fs-1'>" + seconds + "</p>";

    // Eğer geri sayım tamamlanmışsa, yazıyı değiştir
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "<p class='date fs-1'>EXPIRED</p>";
        document.getElementById("hours").innerHTML = "<p class='date fs-1'>EXPIRED</p>";
        document.getElementById("minutes").innerHTML = "<p class='date fs-1'>EXPIRED</p>";
        document.getElementById("seconds").innerHTML = "<p class='date fs-1'>EXPIRED</p>";
    }
}, 1000);
