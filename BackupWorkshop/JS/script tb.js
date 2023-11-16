// function([string1, string2],target id,[color1,color2])    
consoleText(['Hai.. Selamat datang di kelas Tatabusana. <br> Kelas ini cocok bagi kamu yang tertarik dengan seni Tata Busana.', 'Dikelas ini kamu akan diberi ilmu keterampilan tentang Mendesain Pola, Mengoperasikan Mesin Jahit, Praktek Menjahit dan Menulis Kreatif. ', 'Apakah kamu tertarik untuk bergabung?<br> Untuk mengetahui lebih jelas materi yang  akan kamu pelajari di kelas ini silahkan pilih tombol di samping.'], 'text',['black','black','black']);

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
        x = - 2,5;
        letterCount += x;
        waiting = false;
      }, 4000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 60)
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

var idp = 0;
var txtdp = 'Pada Matadiklat ini kamu akan belajar menggambar pola busana yang berupa jiplakan bentuk model pakaian pria, wanita, dan anak-anak. Biasanya pola dibuat di atas kertas pola khusus.';
var speed = 30;
function typeWriterdp() {
  // var txtpm=''; var txtprm = '';
  if (idp < txtdp.length) {
    document.getElementById("dp").innerHTML += txtdp.charAt(idp);
    document.getElementById("prm").innerHTML=''
    document.getElementById("pm").innerHTML=''
    idp++;
    setTimeout(typeWriterdp, speed);
  }
}
 
var ipm = 0;
var txtpm = 'Pada Matadiklat ini kamu akan belajar menjahit menggunakan mesin jahit.';
var speed = 30;
function typeWriterpm() {
  if (ipm < txtpm.length) {
    document.getElementById("pm").innerHTML += txtpm.charAt(ipm);
    document.getElementById("prm").innerHTML=''
    document.getElementById("dp").innerHTML=''
    ipm++;
    setTimeout(typeWriterpm, speed);
  }
}

var iprm = 0;
var txtprm = 'Setelah belajar cara mendesain dan menggambar pola, pada matadiklat ini kamu akan praktik menjahit desain pola yang telah kamu buat.';
var speed = 30;
function typeWriterprm() {
  if (iprm < txtprm.length) {
    document.getElementById("prm").innerHTML += txtprm.charAt(iprm);
    document.getElementById("pm").innerHTML=''
    document.getElementById("dp").innerHTML=''
    iprm++;
    setTimeout(typeWriterprm, speed);
  }
}
