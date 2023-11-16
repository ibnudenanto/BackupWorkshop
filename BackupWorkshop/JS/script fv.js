// function([string1, string2],target id,[color1,color2])    
consoleText(['Hai.. Selamat datang di kelas Fotografi dan Videografi. <br> Kelas ini cocok bagi kamu yang berminat untuk melatih skill dalam dunia Fotografi dan Videografi.', 'Di Kelas ini kamu akan dikenalkan tentang Dasar-Dasar Kamera, Teknik pengambilan objek foto dan video secara profesional. Selain itu kamu akan diperkenalkan dengan aplikasi keperluan editing serta cara penggunaannya.', 'Tertarik untuk bergabung? <br> Untuk mengetahui lebih lanjut keterampilan apa yang akan kamu pelajari silahkan pilih tombol di samping.'], 'text',['black']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1,9;
        letterCount += x;
        waiting = false;
      }, 5000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 50)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

var idaskam = 0;
var txtdaskam = 'Pada Matadiklat ini kamu akan diperkenalkan dengan berbagai jenis kamera dan cara setting kamera.';
var speed = 30;
function typeWriterdaskam() {
  if (idaskam < txtdaskam.length) {
    document.getElementById("daskam").innerHTML += txtdaskam.charAt(idaskam);
    document.getElementById("fdv").innerHTML=''
    document.getElementById("mm").innerHTML=''
    document.getElementById("mkfv").innerHTML=''
    idaskam++;
    setTimeout(typeWriterdaskam, speed);
  }
}
var ifdv = 0;
var txtfdv = 'Pada Matadiklat ini kamu akan belajar 4 unsur dasar dalam fotografi dan videografi yaitu pencahayaan, efek gerak, fokus & ruang tajam, dan Komposisi.';
var speed = 30;
function typeWriterfdv() {
  if (ifdv < txtfdv.length) {
    document.getElementById("fdv").innerHTML += txtfdv.charAt(ifdv);
    document.getElementById("daskam").innerHTML=''
    document.getElementById("mm").innerHTML=''
    document.getElementById("mkfv").innerHTML=''
    ifdv++;
    setTimeout(typeWriterfdv, speed);
  }
}
var imm = 0;
var txtmm = 'Pada Matadiklat Multimedia ini kamu akan belajar untuk menyajikan dan menggabungkan teks, suara, gambar, animasi, audio, dan video dengan alat bantu dan tautan sehingga pengguna dapat melakukan navigasi, berinteraksi, berkarya, dan berkomunikasi.';
var speed = 30;
function typeWritermm() {
  if (imm < txtmm.length) {
    document.getElementById("mm").innerHTML += txtmm.charAt(imm);
    document.getElementById("daskam").innerHTML=''
    document.getElementById("fdv").innerHTML=''
    document.getElementById("mkfv").innerHTML=''
    imm++;
    setTimeout(typeWritermm, speed);
  }
}
var imkfv = 0;
var txtmkfv = 'Pada Matadiklat ini kamu akan belajar  Menulis kreatif yang merupakan kemampuan menciptakan daya cipta dan mengembangkan sebuah tulisan menjadi kreativitas menulis dengan penuh irama dan beribu warna makna.';
var speed = 30;
function typeWritermkfv() {
  if (imkfv < txtmkfv.length) {
    document.getElementById("mkfv").innerHTML += txtmkfv.charAt(imkfv);
    document.getElementById("daskam").innerHTML=''
    document.getElementById("fdv").innerHTML=''
    document.getElementById("mm").innerHTML=''
    imkfv++;
    setTimeout(typeWritermkfv, speed);
  }
}