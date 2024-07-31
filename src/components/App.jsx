import React, { useState } from "react";

import Main from "./Main";
import PopupHistory from "./Popup";
import Section from "./Section";

export default function App() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  function handlePopupClick() {
    setPopupOpen(true);
  }
  function closeAllPopups() {
    setPopupOpen(false);
  }

  return (
    <div className="page">
      <Main onOpenPopup={handlePopupClick} />
      <Section />
      <PopupHistory isOpen={isPopupOpen} onClose={closeAllPopups} />
    </div>
  );
}
