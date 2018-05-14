var slider = document.getElementById('slider');
var sliderImages = slider.getElementsByClassName('slider.img');

// Ocultar todas las imagenes.
[].forEach.call(sliderImages, function (elementImage) {
hideImage(elementImage) ;

});

var index = 0;
//Muestra la primera (elemento con index 0)
showImage(sliderImages
  
