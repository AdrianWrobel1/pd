var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.jng') {
      myImage.setAttribute ('src','images/firefox2.webp');
    } else {
      myImage.setAttribute ('src','images/firefox.jng');
    }
}