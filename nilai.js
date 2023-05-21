function nilai()
{
	var angka1 = document.getElementById('angka1').value;
	var angka2 = document.getElementById('angka2').value;
	var bobot  = 50;
	var hasil1 = document.getElementById('hasil1');
	var hasil2 = document.getElementById('hasil2');
	var total = document.getElementById('total');
	var formTransaksi = document.getElementsByName("formTransaksi")[0];

	var poin1 = (angka1 * bobot) / 100;
	var poin2 = (angka2 * bobot) / 100;

	hasil1.innerHTML = poin1;
	hasil2.innerHTML = poin2;

	if (isNaN(angka1) || isNaN(angka2))
		{
			alert('mohon isi form dengan angka!');
			formTransaksi.reset();
		}

	totalNilai1 = poin1 + poin2;
	total.innerHTML = totalNilai1;
}
 
function nilai2()
{
	//skor 1
	var skorA1 = parseInt(document.getElementById('skorA1').value);
	var skorA2 = parseInt(document.getElementById('skorA2').value);
	var skorA3 = parseInt(document.getElementById('skorA3').value);
	// var totalA = 0;
	var rataA = document.getElementById('rataA');
	var hasilA = document.getElementById('hasilA');

	ratarataA = (skorA1+ skorA2 + skorA3) / 3;
	rataA.innerHTML = ratarataA;

	var totalA = (ratarataA * 15) / 100;
	hasilA.innerHTML = totalA;


	//skor 2
	var skorB1 = parseInt(document.getElementById('skorB1').value);
	var skorB2 = parseInt(document.getElementById('skorB2').value);
	var skorB3 = parseInt(document.getElementById('skorB3').value);
	// var totalB = 0;
	var rataB = document.getElementById('rataB');
	var hasilB = document.getElementById('hasilB');

	ratarataB = (skorB1+ skorB2 + skorB3) / 3;
	rataB.innerHTML = ratarataB;

	var totalB = (ratarataB * 20) / 100;
	hasilB.innerHTML = totalB;


	//skor 3
	var skorC1 = parseInt(document.getElementById('skorC1').value);
	var skorC2 = parseInt(document.getElementById('skorC2').value);
	var skorC3 = parseInt(document.getElementById('skorC3').value);
	// var totalC = 0;
	var rataC = document.getElementById('rataC');
	var hasilC = document.getElementById('hasilC');

	ratarataC = (skorC1+ skorC2 + skorC3) / 3;
	rataC.innerHTML = ratarataC;

	var totalC = (ratarataC * 20) / 100;
	hasilC.innerHTML = totalC;

	//skor4
	var skorD1 = parseInt(document.getElementById('skorD1').value);
	var skorD2 = parseInt(document.getElementById('skorD2').value);
	var skorD3 = parseInt(document.getElementById('skorD3').value);
	// var totalD = 0;
	var rataD = document.getElementById('rataD');
	var hasilD = document.getElementById('hasilD');

	ratarataD = (skorD1+ skorD2 + skorD3) / 3;
	rataD.innerHTML = ratarataD;

	var totalD = (ratarataD * 20) / 100;
	hasilD.innerHTML = totalD;

	//skor5
	var skorE1 = parseInt(document.getElementById('skorE1').value);
	var skorE2 = parseInt(document.getElementById('skorE2').value);
	var skorE3 = parseInt(document.getElementById('skorE3').value);
	// var totalE = 0;
	var rataE = document.getElementById('rataE');
	var hasilE = document.getElementById('hasilE');

	ratarataE = (skorE1+ skorE2 + skorE3) / 3;
	rataE.innerHTML = ratarataE;

	var totalE = (ratarataE * 15) / 100;
	hasilE.innerHTML = totalE;

	//skor6
	var skorF1 = parseInt(document.getElementById('skorF1').value);
	var skorF2 = parseInt(document.getElementById('skorF2').value);
	var skorF3 = parseInt(document.getElementById('skorF3').value);
	// var totalF = 0;
	var rataF = document.getElementById('rataF');
	var hasilF = document.getElementById('hasilF');

	ratarataF = (skorF1+ skorF2 + skorF3) / 3;
	rataF.innerHTML = ratarataF;

	var totalF = (ratarataF * 10) / 100;
	hasilF.innerHTML = totalF;


	var totalNilai2 = totalA + totalB + totalC + totalD + totalE + totalF;
	totalNilai.innerHTML = totalNilai2;


	var nilaiakhir = document.getElementById('nilaiakhir');
	var totalnilaiakhir = (totalNilai1 * 40) / 100 + (totalNilai2 * 60) / 100;
	nilaiakhir.innerHTML = totalnilaiakhir;

	var nilaiHuruf = document.getElementById('nilaiHuruf');

	if (totalnilaiakhir < 56) {
		nilaiHuruf.innerHTML = 'D';
	}
	else if (totalnilaiakhir < 61) {
		nilaiHuruf.innerHTML = 'C';
	}
	else if (totalnilaiakhir < 66) {
		nilaiHuruf.innerHTML = 'C+';
	}
	else if (totalnilaiakhir < 71) {
		nilaiHuruf.innerHTML = 'B-';
	}
	else if (totalnilaiakhir < 76) {
		nilaiHuruf.innerHTML = 'B';
	}
	else if (totalnilaiakhir < 81) {
		nilaiHuruf.innerHTML = 'B+';
	}
	else if (totalnilaiakhir < 86) {
		nilaiHuruf.innerHTML = 'A-';
	}
	else {
		nilaiHuruf.innerHTML = 'A'
	}

}


function skor(){
	var nilai1 = parseInt(document.getElementById('nilai1').value);
	var skor1 = document.getElementById('skor1');
	var hasil = 0;


	if (nilai1 >= 80 && nilai1 <= 100) {
		hasil = 4;
	}
	else if (nilai1 >= 60 && nilai1 < 80) {
		hasil = 3;
	}
	else if (nilai1 >= 40 && nilai1 < 60){
		hasil = 2;
	}
	else if (nilai1 >= 10 && nilai1 < 40) {
		hasil = 1;
	}
	else{
		hasil = 0;
	}
	skor1.innerHTML=hasil;


	var nilai2 = parseInt(document.getElementById('nilai2').value);
	var skor2 = document.getElementById('skor2');
	var hasil2 = 0;

	if (nilai2 >= 80 && nilai2 <= 100) {
		hasil2 = 4;
	}
	else if (nilai2 >= 60 && nilai2 < 80) {
		hasil2 = 3;
	}
	else if (nilai2 >= 40 && nilai2 < 60){
		hasil2 = 2;
	}
	else if (nilai2 >= 10 && nilai2 < 40) {
		hasil2 = 1;
	}
	else{
		hasil2 = 0;
	}
	skor2.innerHTML=hasil2;

	var nilai3 = parseInt(document.getElementById('nilai3').value);
	var skor3 = document.getElementById('skor3');
	var hasil3 = 0;

	if (nilai3 >= 80 && nilai3 <= 100) {
		hasil3 = 4;
	}
	else if (nilai3 >= 60 && nilai3 < 80) {
		hasil3 = 3;
	}
	else if (nilai3 >= 40 && nilai3 < 60){
		hasil3 = 2;
	}
	else if (nilai3 >= 10 && nilai3 < 40) {
		hasil3 = 1;
	}
	else{
		hasil3 = 0;
	}
	skor3.innerHTML=hasil3;

	var nilai4 = parseInt(document.getElementById('nilai4').value);
	var skor4 = document.getElementById('skor4');
	var hasil4 = 0;

	if (nilai4 >= 80 && nilai4 <= 100) {
		hasil4 = 4;
	}
	else if (nilai4 >= 60 && nilai4 < 80) {
		hasil4 = 3;
	}
	else if (nilai4 >= 40 && nilai4 < 60){
		hasil4 = 2;
	}
	else if (nilai4 >= 10 && nilai4 < 40) {
		hasil4 = 1;
	}
	else{
		hasil4 = 0;
	}
	skor4.innerHTML=hasil4;

	var rataskor = document.getElementById('rataskor');
	var ratanilai = document.getElementById('ratanilai');

	ratanilai.innerHTML = (nilai1 + nilai2 + nilai3 + nilai4) / 4;
	rataskor.innerHTML = (hasil + hasil2 + hasil3 + hasil4) / 4;

}

