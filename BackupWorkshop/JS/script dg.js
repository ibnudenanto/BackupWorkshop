// function([string1, string2],target id,[color1,color2])    
consoleText(['Hai.. Selamat datang dikelas Desain Grafis. <br> Kelas ini akan sangat cocok bagi kamu yang memiliki ketertarikan dan berbakat dalam mendesain.', 'Dikelas ini kamu akan dilatih skill mendesain dan dibekali ilmu untuk memasarkan karya yang kamu buat dengan sistem digital marketing.','Berikut materi kelas desain yang akan kamu pelajari: Nirmana, Digital Marketing, Desain, dan Menulis Kreatif. ', 'Apakah kamu tertarik untuk bergabung? <br>Untuk mengetahui lebih lanjut kemampuan apa yang akan kamu pelajari silahkan pilih tombol di samping.'], 'text',['black']);

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
        x = -3;
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

var inrm = 0;
var txtnrm= 'Pada Matadiklat ini kamu akan belajar ilmu pengorganisasian atau penyusunan elemen-elemen visual seperti titik, garis, warna, ruang dan tekstur menjadi satu kesatuan yang harmonis.';
var speed = 30;
function typeWriternrm() {
  if (inrm< txtnrm.length) {
    document.getElementById("nrm").innerHTML += txtnrm.charAt(inrm);
    document.getElementById("dm").innerHTML=''
    document.getElementById("dkv").innerHTML=''
    document.getElementById("mkdg").innerHTML=''

    inrm++;
    setTimeout(typeWriternrm, speed);
  }
}
var idm = 0;
var txtdm= 'Pada Matadiklat ini kamu akan belajar suatu kegiatan pemasaran atau promosi sebuah merek atau produk menggunakan media digital atau internet dengan tujuan untuk menarik konsumen atau calon konsumen secara cepat.';
var speed = 30;
function typeWriterdm() {
  if (idm< txtdm.length) {
    document.getElementById("dm").innerHTML += txtdm.charAt(idm);
    document.getElementById("nrm").innerHTML=''
    document.getElementById("dkv").innerHTML=''
    document.getElementById("mkdg").innerHTML=''
    idm++;
    setTimeout(typeWriterdm, speed);
  }
}
var idkv = 0;
var txtdkv= 'Pada Matadiklat ini kamu akan belajar mendesain yang merupakan  proses komunikasi menggunakan elemen visual, seperti tipografi, fotografi, serta ilustrasi yang dimaksudkan untuk menciptakan persepsi akan suatu pesan yang disampaikan.';
var speed = 30;
function typeWriterdkv() {
  if (idkv< txtdkv.length) {
    document.getElementById("dkv").innerHTML += txtdkv.charAt(idkv);
    document.getElementById("nrm").innerHTML=''
    document.getElementById("dm").innerHTML=''
    document.getElementById("mkdg").innerHTML=''
    idkv++;
    setTimeout(typeWriterdkv, speed);
  }
}
var imkdg = 0;
var txtmkdg= 'Pada Matadiklat ini kamu akan belajar  Menulis kreatif yang merupakan kemampuan menciptakan daya cipta dan mengembangkan sebuah tulisan menjadi kreatifitas menulis dengan penuh irama dan beribu warna makna.';
var speed = 30;
function typeWritermkdg() {
  if (imkdg< txtmkdg.length) {
    document.getElementById("mkdg").innerHTML += txtmkdg.charAt(imkdg);
    document.getElementById("nrm").innerHTML=''
    document.getElementById("dm").innerHTML=''
    document.getElementById("dkv").innerHTML=''
    imkdg++;
    setTimeout(typeWritermkdg, speed);
  }
}
