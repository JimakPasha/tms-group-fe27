function modal() {
  const button = document.querySelector('.button');
  const modalElement = document.querySelector('.modal');

  button.addEventListener('click', () => openModal());

  modalElement.addEventListener('click', (e) => {
    if (
      e.target === modalElement ||
      e.target.getAttribute('data-close') == ''
    ) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 27 && modalElement.classList.contains('show')) {
      closeModal();
    }
  });

  function openModal() {
    modalElement.classList.add('show');
    modalElement.classList.remove('hide');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalElement.classList.add('hide');
    modalElement.classList.remove('show');
    document.body.style.overflow = '';
  }
}

modal();
