const mostraNotificacao = () => {
  const notification = new Notification('Nossa notificação chegou!', {
    body: 'Notificação da DEMO de JS / CSS Pro!',
    icon: 'img/logo-tt.png'
  });
};

const validaNotificacao = () => {
  if (Notification.permission === 'granted') {
    mostraNotificacao();
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      if (permission === 'granted') {
        mostraNotificacao();
      }
    });
  }
};


document.getElementById('notificar').addEventListener('click', validaNotificacao);
