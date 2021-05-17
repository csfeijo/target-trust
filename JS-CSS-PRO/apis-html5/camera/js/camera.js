var clic = document.getElementById('clic');
clic.onclick = tirarFoto;

function tirarFoto() {
  var canvas = document.getElementById('canvas');
  var video = document.getElementById('video');

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0);
}


async function inicializaCamera() {
  var setup = {
    video: {
      width: {
        min: 1280,
        ideal: 1920,
        max: 2560,
      },
      height: {
        min: 720,
        ideal: 1080,
        max: 1440,
      },
      facingMode: "environment"
    },
  };

  try {
    var video = document.getElementById('video');
    videoStream = await navigator.mediaDevices.getUserMedia(setup);
    video.srcObject = videoStream;
  } catch (err) {
    alert("Erro ao carregar o vídeo!" + err);
    alert(navigator.mediaDevices);
  }
}
inicializaCamera();



