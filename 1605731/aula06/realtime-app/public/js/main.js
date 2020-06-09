$(document).ready(()=>{
  let socket = io();

  $('#btn-enviar').click( () => {
    // Ao clicar deve pegar os campos do formulario e enviar para o BE
    const conversa = {
      nome: $('#nome').val(),
      mensagem: $('#mensagem').val(),
    }

    if (conversa.nome.length > 0 && conversa.mensagem.length > 0) {
      socket.emit('mensagem_para_servidor', conversa);

      // Limpa o campo de mensagem
      $('#mensagem').val('').focus();
    }

  });

  // Eventos de recebimento de mensagem
  socket.on('responde_mensagem_usuario', data => {
    $('#mensagens').append(data);

    // Scrolla a tela
    $('#mensagens').animate({
      scrollTop: $('#mensagens')[0].scrollHeight
    }, 500);
  });



});