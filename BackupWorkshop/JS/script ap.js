// function([string1, string2],target id,[color1,color2])    
consoleText(['Hai.. Selamat datang di kelas Aplikasi Perkantoran. <br> Kelas ini akan sangat cocok bagi kamu yang menyukai dunia perkantoran.<br> Dikelas ini kamu akan belajar berbagai kemampuan mengenai aplikasi-aplikasi yang sering digunakan di perkantoran.', 'Ada 4 kemampuan yang akan kamu pelajari di kelas Aplikasi Perkantoran yaitu : Web instant, Pengenalan Internet, Microsoft Office, dan Menulis Kreatif. ', ' Apakah kamu tertarik untuk bergabung? <br> Untuk mengetahui lebih lanjut kemampuan apa yang akan kamu pelajari silahkan pilih tombol di samping.'], 'text',['black','black','black']);

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
        x = -2;
        letterCount += x;
        waiting = false;
      }, 4000)
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
var iwi = 0;
var txtwi = 'Pada Matadiklat ini kamu akan belajar menggunakan website builder berbasis WordPress yang memudahkan dalam membuat website dengan cepat dan mudah, tanpa melibatkan jasa pembuatan website, proses desain dan pemrograman yang rumit.';
var speed = 30;
function typeWriterwi() {
  if (iwi < txtwi.length) {
    document.getElementById("wi").innerHTML += txtwi.charAt(iwi);
    document.getElementById("pi").innerHTML=''
    document.getElementById("mc").innerHTML=''
    document.getElementById("mkap").innerHTML=''
    iwi++;
    setTimeout(typeWriterwi, speed);
  }
}

var ipi = 0;
var txtpi = 'Pada Matadiklat ini kamu akan belajar pengenalan internet yang mencakup akun-akun sosial media yang sering digunakan di perkantoran.';
var speed = 30;
function typeWriterpi() {
  if (ipi < txtpi.length) {
    document.getElementById("pi").innerHTML += txtpi.charAt(ipi);
    document.getElementById("wi").innerHTML=''
    document.getElementById("mc").innerHTML=''
    document.getElementById("mkap").innerHTML=''
    ipi++;
    setTimeout(typeWriterpi, speed);
  }
}

var imc = 0;
var txtmc = 'Pada Matadiklat ini kamu akan belajar mengoperasikan Microsoft Office dengan penulisan yang baik dan rapih, kemudian melatih pengolahan data sekaligus membuat aplikasi kasir, raport, dll. Juga kamu akan berlatih membuat penulisan presentasi dan cara presentasi yang profesional.';
var speed = 30;
function typeWritermc() {
  if (imc < txtmc.length) {
    document.getElementById("mc").innerHTML += txtmc.charAt(imc);
    document.getElementById("wi").innerHTML=''
    document.getElementById("pi").innerHTML=''
    document.getElementById("mkap").innerHTML=''
    imc++;
    setTimeout(typeWritermc, speed);
  }
}

var imkap = 0;
var txtmkap = 'Pada Matadiklat ini kamu akan belajar  Menulis kreatif yang merupakan kemampuan menciptakan daya cipta dan mengembangkan sebuah tulisan menjadi kreativitas menulis dengan penuh irama dan beribu warna makna.';
var speed = 30;
function typeWritermkap() {
  if (imkap < txtmkap.length) {
    document.getElementById("mkap").innerHTML += txtmkap.charAt(imkap);
    document.getElementById("wi").innerHTML=''
    document.getElementById("pi").innerHTML=''
    document.getElementById("mc").innerHTML=''
    imkap++;
    setTimeout(typeWritermkap, speed);
  }
}
