(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-room-second-open]'),
    closeModalBtn: document.querySelector('[data-modal-room-second-close]'),
    modal: document.querySelector('[data-modal-room-second]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
