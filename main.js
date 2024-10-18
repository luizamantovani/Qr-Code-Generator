let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");

function generateQr(){
    if (qrText.value.trim() === "") {
        alert("Please enter a valid text or link.");
        return;
    }

    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);

    qrImg.style.display = "block";
}

document.addEventListener('keydown', function(event){
    if(event.key==='Enter'){
        generateQr();
    }
});