function getImagePreview(event){

    var  image=URL.createObjectURL(event.target.files[0]);
    var imagediv= document.getElementById('preview');
    var newImage= document.createElement('img');
    newImage.src= image;
    imagediv.appendChild(newImage);
    

    }