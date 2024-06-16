var isImage1Visible = true;
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
var element = document.getElementById("dialog-1");
var text = "";
var address = document.getElementById("Address").value.trim();

function fadeIn(element) {
	element.style.opacity = "1";
	element.style.display = "block";
}

function fadeOut(element) {
	element.style.opacity = "0";
	element.style.display = "none";
}

setInterval(function () {
	if (isImage1Visible) {
		fadeOut(image1);
		fadeIn(image2);
	} else {
		fadeOut(image2);
		fadeIn(image1);
	}

	isImage1Visible = !isImage1Visible;
}, 1500);

function togglePopup() {
	var text = "";
	document.getElementById("p").innerText = text;

	if (element.classList.contains("hide")) {
		element.classList.remove("hide");
	} else {
		var text = "";
		document.getElementById("p").innerText = text;
		document.getElementById("p").style.color = "red";
		element.classList.add("hide");
	}
}

function togglePopup_buy() {
	var address = document.getElementById("Address").value.trim();
	if (!address) {
		var text = "Vui lòng nhập địa chỉ";
		document.getElementById("p").innerText = text;
		document.getElementById("p").style.color = "red";
	} else {
		var text = "Đặt hàng thành công";
		document.getElementById("p").innerText = text;
		document.getElementById("p").style.color = "green";
		setTimeout(function () {
			element.classList.add("hide");
		}, 1500);
	}
}
