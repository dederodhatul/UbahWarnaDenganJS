// mengubah style dengan javascript
const judul = document.querySelector('p');
judul.style.color = 'red';


// membuat elemen baru dengan javascript
const li = document.createElement('li');
const teks = document.createTextNode('item baru');
li.appendChild(teks); //memasukkan teks ke dalam li

//elemen baru diletakkan paling bawah dari root
const tempat = document.querySelector('section#b ul'); //root ditangkap terlebih dahulu
tempat.appendChild(li); //li diletakkan ke tempat/bawah root

//buat button baru dan punya efek untuk mengubah warna body ketika tombol ditekan 
const button = document.createElement('button');
const TextButton = document.createTextNode('Tekan untuk warna lighblue');
button.appendChild(TextButton);
button.setAttribute('type','button');

const sectionB = document.querySelector('section#b');
sectionB.appendChild(button);

//tangkep tempat si tombol baru yang dibuat tadi
const tombol = document.getElementsByTagName('button')[1];

//buat efek ketika tombol di klik warna background body menjadi lightblue
button.onclick = function(){
					document.body.classList.toggle('lightBlue'); //jika ada kelas ditambah jika tidak ada kelas di hilangkan sehingga bisa di klik untuk merubah warna lightblue kemudian klik lagi untuk mengembalikan warna seperti semula
				};

//buat tombol baru lagi yang jika ditekan warna background body berubah menjadi yellow
const buttonBaru = document.createElement('button');
const textButtonBaru = document.createTextNode('ubah warna kuning');
buttonBaru.appendChild(textButtonBaru);

sectionB.appendChild(buttonBaru);
buttonBaru.setAttribute('id', 'buttonBaru');
buttonBaru.setAttribute('type','button');

const tombolBaru = document.getElementById('buttonBaru');

tombolBaru.onclick = function(){
					document.body.classList.toggle('yellow');
					};
//buat lagi tombol baru dengan efek jika ditekan maka warna background body akan berubah secara acak
const buttonBaruLagi = document.createElement('button');
const textButtonBaruLagi = document.createTextNode('Tekan untuk mengubah warna background secara acak');
buttonBaruLagi.appendChild(textButtonBaruLagi);

sectionB.appendChild(buttonBaruLagi);
buttonBaruLagi.setAttribute('id', 'buttonBaruLagi');
buttonBaruLagi.setAttribute('type', 'button');

const tombolBaruLagi = document.getElementById('buttonBaruLagi');
// tombolBaruLagi.onclick = function(){
// 						document.style.backgroundC
// 					};

