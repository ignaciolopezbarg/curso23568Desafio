function getImagePreview(event) {
    let image = URL.createObjectURL(event.target.files[0]);
    let imagediv = document.getElementById("preview");
    let newImage = document.createElement("img");
    newImage.src = image;
    newImage.className = "image"
    imagediv.appendChild(newImage);
  }