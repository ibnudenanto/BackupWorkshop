// function([string1, string2],target id,[color1,color2])    
consoleText(['Hai.. Selamat datang di kelas Teknik Sepeda Motor. <br> Kelas ini cocok bagi kamu yang memiliki minat dalam bongkar pasang mesin.<br> Dikelas ini kamu akan belajar berbagai ketereampilan berkaitan dengan mesin dan juga dibekali materi Menulis Kreatif.', 'Ada 4 materi yang akan kamu pelajari di kelas Tekni Sepeda Motor yaitu : Sistem kerja mesin 2tax dan 4tax, Sistem kelistrikan, Servis, dan Manajemen bengkel. ', ' Apakah kamu tertarik untuk bergabung? <br> Untuk mengetahui lebih lanjut keterampilan apa yang akan kamu pelajari silahkan pilih tombol di samping.'], 'text',['black','black','black']);

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
var ikm24 = 0;
var txtkm24 = 'Pada Matadiklat ini kamu akan belajar sistem kerja mesin yang bekerja melalui 4 langkah yang meliputi langkah hisap, langkah kompresi, langkah tenaga dan langkah buang.';
var speed = 30;
function typeWriterkm24(tsm) {
  if (ikm24 < txtkm24.length) {
    document.getElementById("km24").innerHTML += txtkm24.charAt(ikm24);
    document.getElementById("listrik").innerHTML=''
    document.getElementById("servis").innerHTML=''
    document.getElementById("mb").innerHTML=''
    ikm24++;
    setTimeout(typeWriterkm24, speed);
  }
}
var ilistrik = 0;
var txtlistrik = 'Pada Matadiklat ini kamu akan belajar Sistem kelistrikan sepeda motor yang mempunyai peran penting dalam penyaluran arus listrik ke setiap komponen yang memerlukan daya listrik, mulai dari bagian pencahayaan hingga pembakaran atau pengapian.';
var speed = 30;
function typeWriterlistrik() {
  if (ilistrik < txtlistrik.length) {
    document.getElementById("listrik").innerHTML += txtlistrik.charAt(ilistrik);
    document.getElementById("km24").innerHTML=''
    document.getElementById("servis").innerHTML=''
    document.getElementById("mb").innerHTML=''
    ilistrik++;
    setTimeout(typeWriterlistrik, speed);
  }
}
var iservis = 0;
var txtservis = 'Pada Matadiklat ini kamu akan belajar servis motor yang dimana tujuan dari servis motor atau Tune Up ini agar Anda bisa memastikan kondisi motor selalu prima.';
var speed = 30;
function typeWriterservis(tsm) {
  if (iservis < txtservis.length) {
    document.getElementById("servis").innerHTML += txtservis.charAt(iservis);
    document.getElementById("km24").innerHTML=''
    document.getElementById("listrik").innerHTML=''
    document.getElementById("mb").innerHTML=''
    iservis++;
    setTimeout(typeWriterservis, speed);
  }
}
var imb = 0;
var txtmb = 'Pada Matadiklat ini kamu akan belajar manajemen bengkel yang merupakan proses perencanaan terstruktur di mana bengkel dapat berkembang menggunakan metode yang tepat, termasuk untuk menggunakan data informasi pelanggan, informasi kendaraan, inspeksi kendaraan, dan kinerja karyawan.';
var speed = 30;
function typeWritermb(tsm) {
  if (imb < txtmb.length) {
    document.getElementById("km24").innerHTML=''
    document.getElementById("mb").innerHTML += txtmb.charAt(imb);
    document.getElementById("listrik").innerHTML=''
    document.getElementById("servis").innerHTML=''
    imb++;
    setTimeout(typeWritermb, speed);
  }
}
