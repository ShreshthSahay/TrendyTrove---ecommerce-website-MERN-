// App.js

import React, { useState } from 'react';
import Modal from './Modal';
import CardComponent from './ModalCard';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>This is a component before the modal</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Content</h2>
        <CardComponent imagelink="image1.jpg" Productlink="/product/64bed75af8ce2a7090b67903"content="Content for Card 1" />
        <CardComponent imagelink="image1.jpg" Productlink="/product/64bed75af8ce2a7090b67903"content="Content for Card 1" />
        <CardComponent imagelink="image1.jpg" Productlink="/product/64bed75af8ce2a7090b67903"content="Content for Card 1" />
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default App;

