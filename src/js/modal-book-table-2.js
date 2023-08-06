(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-table-second-open]'),
    closeModalBtn: document.querySelector('[data-modal-table-second-close]'),
    modal: document.querySelector('[data-modal-table-second]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
