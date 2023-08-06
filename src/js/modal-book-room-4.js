(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-fourth-room-open]'),
    closeModalBtn: document.querySelector('[data-modal-fourth-room-close]'),
    modal: document.querySelector('[data-modal-fourth-room]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
