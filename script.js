var mb = document.getElementById("mb");
var bytes = document.getElementById("bytes");
var body = document.getElementById("body");

function b() {
    bytes.value = mb.value * 1000000;
    size();
}

function m() {
    mb.value = bytes.value / 1000000;
    size();
}

function size() {
    if (mb.value <= 100) {
        document.body.style.backgroundImage = 'url("http://upload.wikimedia.org/wikipedia/commons/8/82/8-inch_floppy_disk.jpg")';
    }
    if (mb.value >= 101) {
        document.body.style.backgroundImage = 'url("https://www.discountmugs.com/product-images/gallery-zoom/swivel-usb-flash-drives-usb0014gb-laser-engraved.jpg")';
    }
    if (mb.value >= 16000) {
        document.body.style.backgroundImage = 'url("https://smartphone2016.com/wp-content/uploads/2016/04/Android-Smartphone-Reviews-Samsung-Galaxy-S7-1024x864.jpg")';
    }
    if (mb.value >= 128000) {
        document.body.style.backgroundImage = 'url("http://17c4dcd7f91259d8cc66-f5932f6db0039e8c02f89a70c334ff0e.r2.cf1.rackcdn.com/wp-content/uploads/sites/2/Lenovo-ThinkPad-X260.jpg")';
    }
    if (mb.value >= 500000) {
        document.body.style.backgroundImage = 'url("http://cdn1.expertreviews.co.uk/sites/expertreviews/files/8/93/pc_specialist_invictus_0_0.jpg")';
    }
    if (mb.value >= 5000000) {
        document.body.style.backgroundImage = 'url("http://jordaneunson.com/wp-content/uploads/2010/05/IMG_0256.jpg")';
    }
    if (mb.value >= 100000000) {
        document.body.style.backgroundImage = 'url("https://vaccaricarlo.files.wordpress.com/2012/10/idi_018.jpg")'
    }
}