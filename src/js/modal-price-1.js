(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-first-open]'),
    closeModalBtn: document.querySelector('[data-modal-first-close]'),
    modal: document.querySelector('[data-modal-first]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
