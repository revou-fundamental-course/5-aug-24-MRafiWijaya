// var berat_bdn = document.getElementById("fberat");
// var tinggi_bdn = document.getElementById("ftinggi");
// var berat_bdn = 70;
// var tinggi_bdn = 150;
// var tinggi =  tinggi_bdn / 100;
// function hasilBmi(berat_bdn, tinggi) {
//     return berat_bdn / (tinggi * tinggi);
// }
// var hasilBmi = hasilBmi(berat_bdn , tinggi);
// function peringatan(event) {
//     event.preventDefault();
//     alert("sudah diklik");
    
// }
function getHasil(event) {
    event.preventDefault();

    let beratBadan = document.getElementById("fberat").value;
    let tinggiBadan = document.getElementById("ftinggi").value;
    var tinggi =  tinggiBadan / 100;
    var hasilBmi = beratBadan / (tinggi * tinggi);
    if (hasilBmi <= 18.5) {
        document.getElementById("bmiResult").textContent = "BMI: " + hasilBmi.toFixed(2);
        document.getElementById("kethasil").textContent = "Kekurangan Berat Badan";
        console.log("Kekurangan Berat Badan");
    } else if ((hasilBmi >= 18.5) && (hasilBmi <= 24.9)) {
        document.getElementById("bmiResult").textContent = "BMI: " + hasilBmi.toFixed(2);
        document.getElementById("kethasil").textContent = "Normal (Ideal)";
        console.log("Normal (Ideal)");
    } else if ((hasilBmi >= 25.0) && (hasilBmi <= 29.9)) {
        document.getElementById("bmiResult").textContent = "BMI: " + hasilBmi.toFixed(2);
        document.getElementById("kethasil").textContent = "Kelebihan Berat Badan";
        console.log("Kelebihan Berat Badan");
    } else if (hasilBmi > 30.0) {
        document.getElementById("bmiResult").textContent = "BMI: " + hasilBmi.toFixed(2);
        document.getElementById("kethasil").textContent = "Kegemukan (Obesitas)";
        console.log("Kegemukan (Obesitas)");
    } else {
        document.getElementById("bmiResult").textContent = "";
        document.getElementById("kethasil").textContent = "Silakan masukkan nilai.";
        console.log("belum memasukan nilai");
    }
}