// Basitçe sizden girişte isminizi isteyip sonra bu ismi karşılama ekranına yerleştirerek o anki saati ve günü gösteren bir ekran. Yapması oldukça kolay ve zevkli!

// Burada bizim verdiğimiz ile sınırlı kalmak zorunda değilsiniz, hatta hayal gücünüzü çalıştırarak yeni şeyler üretirseniz daha mutlu oluruz!

function askName() {
    let fullName = prompt("Lütfen Adınızı Giriniz: ")

    fullName != "" ? ((document.querySelector("#myName").innerHTML = fullName), window.onload()) //window.onload sayfanın hazır olduğunu ve artık işlem yapabileceğini gösterir.
    : alert("Lütfen Adınızı Giriniz!"),
    window.location.reload()
}

function startTime() {
    var date = new Date();
    var hr = date.getHours(); // Saat bilgisini verir (0-23)
    var min = date.getMinutes(); // Dakika bilgisin verir (0-59)
    var sec = date.getSeconds(); // Saniye bilgisini verir (0-59)
    var day = date.getDay(); // Haftanın gününü verir (0-6)

    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

//// 10'dan küçük sayıları koşulla başına 0 ekleyebiliriz //
// function checkTime(i) {
//     if (i < 10) {
//         i = "0" + i;
//     }
//     return i;
//  }

    if(day == 1) {
        day = " Pazartesi";
    }
    else if (day == 2) {
        day = " Salı";
    }
    else if (day == 3) {
        day = " Çarşamba";
    }
    else if (day == 4) {
        day = " Perşembe";
    }
    else if (day == 5) {
        day = " Cuma";
    }
    else if (day == 6) {
        day = " Cumartesi";
    }
    else if (day == 7) {
        day = " Pazar";
    }

    var time = hr + ":" + min + ":" + sec + "" + day;
    
    let myClock = document.querySelector("#myClock")
    myClock.innerHTML = `${time}`

    setTimeout(startTime, 1000); // setTimeout() bir fonksiyonun belli bir süreyle çalışmasını sağlar
}

startTime()
askName()
