function onclickFunction() {
    const text = document.getElementById("textInput").value;
    const number = document.getElementById("numInput").value;

    if (text === "" & number === "") {
        alert("Por favor, ingresa el texto y el tamaños.");
    } else if (number === "") {
        alert("Por favor, ingresa el tamaño de QR.");
    }

    const endPoint = `https://api.apgy.in/qr/?data=${text}&size=${number}`;
    
    const qrImage = document.getElementById("qrImage");
    qrImage.src = endPoint;
}