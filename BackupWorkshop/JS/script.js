// function([string1, string2],target id,[color1,color2])    
consoleText(['Hai.. Selamat datang di Rumah Gemilang Indonesia. <br> Disini kamu bisa belajar melatih kemampuanmu untuk menjadi seorang pemuda produktif yang siap bekerja.<br> Saat ini kamu berada di kampus pusat tepatnya berada di Sawangan Depok.', 'Di kampus pusat terdapat 6 jurusan yang bisa kamu pilih yaitu : Tatabusana, Fotografi dan Videografi, Desain Grafis, Teknik Komputer dan Jaringan, Aplikasi Perkantoran, dan Teknik Sepeda Motor. ', 'Apakah kamu tertarik untuk bergabung? <br> Untuk menentukan kemampuan mana yang ingin kamu pelajari silahkan pilih tombol di samping untuk memasuki ruangan kelas dan mengetahui sekilas tentang program jurusan tersebut.'], 'text',['black','black','black']);

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

