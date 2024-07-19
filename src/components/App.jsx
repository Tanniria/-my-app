import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import PopupHistory from "./Popup";
import Section from "./Section";

export default function App() {
  // const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  // const [selectedCard, setSelectedCard] = useState({});

  // function handleCardClick(card) {
  //     setSelectedCard(card);
  //     setIsImagePopupOpen(true);
  // };

  const [isPopupOpen, setPopupOpen] = useState(false);

  function handlePopupClick() {
    setPopupOpen(true);
  };
  function closeAllPopups() {
    setPopupOpen(false);
  };

  return (
    <div className="page">
      <Header />
      <Main onOpenPopup={handlePopupClick} />
      <Section />
      <PopupHistory isOpen={isPopupOpen} onClose={closeAllPopups} />
    </div>
  );
}
