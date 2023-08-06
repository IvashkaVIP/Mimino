(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-fourth-open]'),
    closeModalBtn: document.querySelector('[data-modal-fourth-close]'),
    modal: document.querySelector('[data-modal-fourth]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
