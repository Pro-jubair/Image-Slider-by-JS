var photos = ["1.jpg", "2.jpg", "3.jpg"];
var imgtag = document.querySelector("img");

var count = 0;

function next() {

    count++;
    if(count>=photos.length){
        count=0;
        imgtag.src = photos[count];
    }
    else{
    imgtag.src = photos[count];
    }
}

function prev() {

    count--;
    if(count<0){
        count=photos.length - 1;
        imgtag.src = photos[count];
    }
    else{
    imgtag.src = photos[count];
    }
}

