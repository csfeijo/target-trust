const tabs = document.querySelectorAll('.tab');

const selectTab = (item) => {
  // Esconde todas tabs
  tabs.forEach((tab) => {
    tab.classList.remove('active')
  })

  // Seleciona a tab clicada
  item.classList.add('active');

  // Esconde o conteudo das tabs existentes
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    section.classList.remove('active');
  })

  // Mostra o conteúdo do content da tab
  const contentName = `${item.id}-content`;
  const content = document.querySelectorAll(`.${contentName}`)[0];
  content.classList.add('active')

}

tabs.forEach((item) => {
  item.onclick = (evt) => {
    evt.preventDefault();
    selectTab(item)
  };
})
