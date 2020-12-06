// arrayTest = ["ad", "ba", "ga"];

// arrayTest.forEach(x => console.log(x));



tinhTong = () => {
	var soNguyen1 = document.getElementById("soNguyen1").value;
	var soNguyen2 = document.getElementById("soNguyen2").value;
	var soNguyen3 = document.getElementById("soNguyen3").value;

	arrSoNguyen = [parseInt(soNguyen1, 20), parseInt(soNguyen2, 20), parseInt(soNguyen3, 20)];
	var sum = 0;

	arrSoNguyen.forEach((value) => {
		sum += value;
	})

	// for(var i = 0; i < arrSoNguyen.length; i++){
	// 	sum += arrSoNguyen[i];
	// }

	var displaySum = document.getElementById("sum").innerHTML = "Tổng các số nguyên là: " + sum;
	document.getElementById("sum").style.color = 'red';
	// var title = document.getElementById("tieuDe").value;
	// var title = document.getElementsByName("tieuDe")[0].value;
	// var title = document.getElementsByClassName("tieuDe")[0].value;
	// document.getElementById("thongBao").innerHTML = title;
	// document.getElementById("thongBao").style.color = 'red';
	// alert(title);
}

bigText = () => {
	document.getElementById("sum").style.fontSize = '50px'; 
}

normalText = () => {
	document.getElementById("sum").style.fontSize = '32px'; 
}