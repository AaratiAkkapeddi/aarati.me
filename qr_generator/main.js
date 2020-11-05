var qrcode = new QRCode(document.getElementById("qrcode"), "http://jindo.dev.naver.com/collie");

$('.submit').on('click',function(){
	qrcode.clear(); // clear the code.
	var url = $('.url').val()
	qrcode.makeCode(url); // make another code.
	$('body').addClass('on')
	var url2 = $('.qr-area img').attr('src')
	$('.download a').attr('href', url2)
})

$('.url').on('keyup', function (e) {
    if (e.keyCode === 13) {
        qrcode.clear(); // clear the code.
		var url = $('.url').val()
		qrcode.makeCode(url); // make another code.
		$('body').addClass('on')
		var url2 = $('.qr-area img').attr('src')
		$('.download a').attr('href', url2)
    }
});



