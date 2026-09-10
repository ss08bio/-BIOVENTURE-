function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ffv8tCObcm":
        Script1();
        break;
      case "6P9zCHzil5J":
        Script2();
        break;
      case "5YGnddiYSdq":
        Script3();
        break;
  }
}

function Script1()
{
  var audio = document.getElementByld(`bgSongku`);
audio.src="musik.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

function Script2()
{
  var music = document.getElementById("bgMusic");

if (music) {
    music.pause();
}
}

function Script3()
{
  var music = document.getElementById("bgMusic");

if (music) {
    music.volume = 0.5;
    music.play();
}
}

