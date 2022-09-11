import  { useState } from 'react';
  /**
   * Custom hook to use Modal Compnent
   * Hooks used:
   *      -> useState
   * returns:
   *      -> modalIsOpen: Boolean value indicates modal's open status
   *      -> handleOpenModal: model opening handler
   *      -> handleCloseModal: model closure handler
   */
const useModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(undefined);
    const handleOpenModal = (e) => {
        setModalIsOpen(true)
    }
    const handleCloseModal = (e) => {
        setModalIsOpen(false)
    }
    return [modalIsOpen, handleOpenModal, handleCloseModal]
}

export default useModal;