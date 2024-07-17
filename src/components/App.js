import React, { useState, useEffect } from "react";
import Header from './Header';
import Main from "./Main";

export default function App() {
    // const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
    // const [selectedCard, setSelectedCard] = useState({});

    // function handleCardClick(card) {
    //     setSelectedCard(card);
    //     setIsImagePopupOpen(true);
    // };

    return (
            <div className="page">
                <Header />
                <Main />
                {/* <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                    onCardLike={handleCardLike}
                    onCardDelete={handleDeleteIcon}
                    cards={cards} />
                <Footer />
                <EditProfilePopup
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    onUpdateUser={handleUpdateUser}
                    isLoading={isLoading} />
                <EditAvatarPopup
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                    onUpdateAvatar={handleUpdateAvatar}
                    isLoading={isLoading} />
                <AddPlacePopup
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                    onAddPlace={handleAddPlaceSubmit}
                    isLoading={isLoading} />
                <ConfirmPopup
                    isOpen={isConfirmPopupOpen}
                    onClose={closeAllPopups}
                    onConfirm={handleCardDelete}
                    isLoading={isLoading} />
                <ImagePopup
                    card={selectedCard}
                    isOpen={isImagePopupOpen}
                    onClose={closeAllPopups} /> */}
            </div>
)}
