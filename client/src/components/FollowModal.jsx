import React, { useState, useEffect } from "react";
import Modal from "react-modal";
// import Cookies from "react-cookie";

function FollowModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if the user has visited the page before
    const hasVisited = document.cookie.get("hasVisited");

    if (!hasVisited) {
      setShowModal(true);

      // Set the cookie to expire after 24 hours
      Cookies.set("hasVisited", "true", { expires: 1 }); // Expires in 1 day
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={closeModal}
      contentLabel="Welcome Modal"
    >
      <h2>Welcome to Our Website!</h2>
      <p>This is your first visit. Enjoy your stay!</p>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
}

export default FollowModal;
