(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-table-first-open]'),
    closeModalBtn: document.querySelector('[data-modal-table-first-close]'),
    modal: document.querySelector('[data-modal-table-first]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
