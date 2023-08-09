import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import Modal from "./Modal";
function FollowModal() {
  const [showModal, setShowModal] = useState(false);
  const cookies = new Cookies();

  useEffect(() => {
    const hasVisited = cookies.get("hasVisited");

    if (!hasVisited) {
      setShowModal(true);

      cookies.set(
        "hasVisited",
        "true",
        { path: "/" },
        { expires: new Date(Date.now() + 2592000) }
      ); // Expires in 1 day
    }
  }, []);

  const closeModal = () => {
    // Close the modal
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <Modal closeModal={closeModal} contentLabel="Welcome Modal"></Modal>
      )}
    </>
  );
}

export default FollowModal;
