const showNotification = () => {
  const notification = new Notification("Nossa Notificação chegou!!", {
    body: "Notificação da aula de JS PRO",
    icon: 'img/logo-tt.png',
  });
};

const validaNotificacao = () => {
  if (Notification.permission === 'granted') {
    showNotification();
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      if (permission === 'granted') {
        showNotification();
      }
    });
  }
};

document.getElementById('notificar').addEventListener('click', validaNotificacao);
