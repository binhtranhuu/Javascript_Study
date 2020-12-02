// Hello = () => {
// 	alert("Hello");
// }

kiemTra = () => {

	var ketQua = document.getElementById("chuyenHuong").value;

	if(ketQua.length == 0){
		alert("Bạn chưa nhập gì? Yêu cầu nhập lại!");
	} else {
		switch (ketQua) {
			case "1":
				window.open("https://quantrimang.com");
				break;
			case "2":
				window.open("https://download.com.vn");
				break;
			case "3":
				window.open("https://vndoc.com");
				break;
			default:
				window.open("https://meta.vn");
				break;
		}
	}

	// alert(typeof(parseInt(ketQua)));

	// switch (ketQua) {
	// 	case "1":
	// 		window.open("https://quantrimang.com");
	// 		break;
	// 	case "2":
	// 		window.open("https://download.com.vn");
	// 		break;
	// 	case "3":
	// 		window.open("https://vndoc.com");
	// 		break;
	// 	default:
	// 		window.open("https://meta.vn");
	// 		break;
	// }

	// setTimeout(function(){
	// 	Hello()
	// }, 6000);

	// for(let i=1; i<=10; i++){
	// 	alert(i);
	// }

	// let arrTest = ["Tao", "Mo", "Man", "Oi", "Xoai"];

	// for(let i = 0; i < arrTest.length; i++){
	// 	alert(arrTest[i]);
	// }

	// var noidung = document.getElementById("noidung").value;
	// var sokytu = document.getElementById("sokytu").value = noidung.length;

	// if(noidung.length == 0){
	// 	alert("Bạn chưa nhập nội dung");
	// } else if(noidung.length > 50) {
	// 	document.getElementById("checkDisplay").innerHTML = "Bạn đã vượt quá ký tự. Số ký tự nhỏ hơn 10";
	// }

	// alert(noidung);
	// confirm("Press a button!");
	// let a = 24;

	// if ... else

	// if(a > 23) {
	// 	alert("True");
	// } else if (a > 24){
	// 	alert("True");
	// } else {
	// 	alert("False");
	// }

	// swith ... case
	// swith(a){
	// 	case 23:
	// 		alert("True");
	// 		break;
	// 	case 24:
	// 		alert("False");
	// 		break;
	// 	default:
	// 		alert("Neither");
	// }
}