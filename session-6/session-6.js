kiemTra = () => {

	var noidung = document.getElementById("noidung").value;
	var sokytu = document.getElementById("sokytu").value = noidung.length;

	if(noidung.length == 0){
		alert("Bạn chưa nhập nội dung");
	} else if(noidung.length > 50) {
		document.getElementById("checkDisplay").innerHTML = "Bạn đã vượt quá ký tự. Số ký tự nhỏ hơn 10";
	}

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