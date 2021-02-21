const tombol = document.createElement('button');
const textTombol = document.createTextNode('Ubah Warna');

tombol.appendChild(textTombol);
tombol.setAttribute('id', 'ubahWarna');
tombol.setAttribute('type', 'button');

const container = document.getElementsByTagName('h1')[0];
container.appendChild(tombol);


tombol.addEventListener('click', function(){
	document.body.classList.toggle('light-blue');
});

const tombolAcak = document.createElement('button');
const textTombolAcak = document.createTextNode('Acak Warna');
tombolAcak.appendChild(textTombolAcak);

tombolAcak.setAttribute('id','acakWarna');
tombolAcak.setAttribute('type','button');

tombol.after(tombolAcak);

//membuat efek pada tombol acak mengeluarkan warna random 
tombolAcak.addEventListener('click', function(){
	r = Math.round((Math.random() * 255 + 1)); //math.random() * 255 + 1 akan menghasilkan angka lebih dari 1 dan kurang dari 255  
	g = Math.round((Math.random() * 255 + 1));
	b = Math.round((Math.random() * 255 + 1));
	document.body.style.backgroundColor = 'rgb('+ r +','+ g +',' + b +')';
});

const Smerah = document.querySelector('input[name = Smerah]'); //tangkap slider
Smerah.oninput = function(){
	const r = Smerah.value;
	const g = Shijau.value;
	const b = Sbiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
};

const Shijau = document.querySelector('input[name = Shijau]'); //tangkap slider
Shijau.oninput = function(){
	const r = Smerah.value;
	const g = Shijau.value;
	const b = Sbiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
};

const Sbiru = document.querySelector('input[name = Sbiru]');
Sbiru.oninput = function(){
	const r = Smerah.value;
	const g = Shijau.value;
	const b = Sbiru.value;
	document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
}


