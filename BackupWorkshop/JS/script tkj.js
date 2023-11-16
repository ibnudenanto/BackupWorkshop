// function([string1, string2],target id,[color1,color2])    
consoleText(['Hai.. Selamat datang di kelas Teknik Komputer dan Jaringan. <br> Kelas ini cocok bagi kamu yang memiliki minat bakat di bidang IT.', 'Di Kelas ini kamu akan dibekali keterampilan berkaitan dengan Hardware Software, Jaringan Komputer, Server, Web Development, dan Menulis Kreatif.', 'Apakah kamu tertarik untuk bergabung? <br> Untuk mengetahui lebih jelas materi yang akan kamu pelajari di kelas ini silahkan pilih tombol di samping.'], 'text',['black']);

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

var ijarkom = 0;
var txtjarkom = 'Pada Matadiklat ini kamu akan belajar pengenalan Jaringan pada komputer yang merupakan jaringan telekomunikasi yang memungkinkan antar komputer untuk saling berkomunikasi dengan bertukar data.';
var speed = 30;
function typeWriterjarkom() {
  if (ijarkom < txtjarkom.length) {
    document.getElementById("jarkom").innerHTML += txtjarkom.charAt(ijarkom);
    document.getElementById("hardsoft").innerHTML=''
    document.getElementById("server").innerHTML=''
    document.getElementById("webdev").innerHTML=''
    ijarkom++;
    setTimeout(typeWriterjarkom, speed);
  }
}

var ihardsoft = 0;
var txthardsoft = 'Pada Matadiklat ini kamu akan belajar pengenalan  Hardware yang merupakan sebuah komponen pada sebuah komputer yang dapat dilihat atau berbentuk fisik dan Software yang merupakan sebuah perangkat lunak yang berupa data-data yang terdapat didalam sebuah komputer.';
var speed = 30;
function typeWriterhardsoft() {
  if (ihardsoft < txthardsoft.length) {
    document.getElementById("hardsoft").innerHTML += txthardsoft.charAt(ihardsoft);
    document.getElementById("jarkom").innerHTML=''
    document.getElementById("server").innerHTML=''
    document.getElementById("webdev").innerHTML=''
    ihardsoft++;
    setTimeout(typeWriterhardsoft, speed);
  }
}
var iserver = 0;
var txtserver = 'Pada Matadiklat ini kamu akan belajar pengenalan Server yang merupakan sebuah sistem komputer yang menjalankan jenis layanan tertentu dalam sebuah jaringan komputer.';
var speed = 30;
function typeWriterserver() {
  if (iserver < txtserver.length) {
    document.getElementById("server").innerHTML += txtserver.charAt(iserver);
    document.getElementById("jarkom").innerHTML=''
    document.getElementById("hardsoft").innerHTML=''
    document.getElementById("webdev").innerHTML=''
    iserver++;
    setTimeout(typeWriterserver, speed);
  }
}

var iwebdev = 0;
var txtwebdev = 'Pada Matadiklat ini kamu akan belajar pengenalan menjadi Web developer yang merupakan orang di balik layar yang bertugas dalam membuat, memelihara dan mengembangkan website atau web development.';
var speed = 30;
function typeWriterwebdev() {
  if (iwebdev < txtwebdev.length) {
    document.getElementById("webdev").innerHTML += txtwebdev.charAt(iwebdev);
    document.getElementById("jarkom").innerHTML=''
    document.getElementById("hardsoft").innerHTML=''
    document.getElementById("server").innerHTML=''
    iwebdev++;
    setTimeout(typeWriterwebdev, speed);
  }
}
