function verificaConexao() {
  console.log('Conexao...', navigator.onLine);
}

window.addEventListener('online', verificaConexao);
window.addEventListener('offline', verificaConexao);

