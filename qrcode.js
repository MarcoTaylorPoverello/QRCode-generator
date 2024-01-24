window.addEventListener("DOMContentLoaded", (event) => {
    let qrCodeBox = document.getElementById('qrCodeBox');
    let qrImage = document.getElementById('qrImage');
    let qrInput = document.getElementById('qrInput');
    let generateButton = document.querySelector('.container .generate-button')
    let downloadButton = document.querySelector('.container .download-button')

    generateQR();

    function generateQR(){
        if(qrInput.value.length > 0){
            let encodedInput = encodeURIComponent(qrInput.value);
            qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" + encodedInput;
            qrCodeBox.classList.add("show-img");
        }
    }
    
    generateButton.addEventListener("click", () => {
        generateQR(qrInput.value);
    })

    downloadButton.addEventListener("click", async () => {
        const response = await fetch(qrImage.src);
        const blob = await response.blob();
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = "qrCode.png";
        downloadLink.click();
    })

});


