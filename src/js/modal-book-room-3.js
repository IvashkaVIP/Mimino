(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-third-room-open]'),
    closeModalBtn: document.querySelector('[data-modal-third-room-close]'),
    modal: document.querySelector('[data-modal-third-room]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
