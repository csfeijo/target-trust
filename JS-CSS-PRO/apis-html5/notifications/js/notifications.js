function showNotification() {
  const notification = new Notification("NOVA MENSAGEM", {
    body: "Notificação da aula de JS PRO",
    icon: 'img/pikachu.png',
    image: 'img/code-mac.jpg',
  });
}

console.log(Notification.permission);

function validaNotificacao() {
  if (Notification.permission === 'granted') {
    showNotification();
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      if (permission === 'granted') {
        showNotification();
      }
    });
  }
}

document.getElementById('notificar').onclick = validaNotificacao;
