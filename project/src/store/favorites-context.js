import { createContext, useState } from "react";

//This file is context for all components interested in this (components that need the info to run certain functions e.g. the number of favorites will be
// required by the nav bar to display the number of favorites in a badge).

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
});


// below is the context 'provider' which creates context using props so it can dynamically be accesses through any component interested.
export function FavoritesContextProvider(props) {
    const [ userFavorites, setUserFavorites ] = useState([]);

    // Function that handles adding favorites into favorites page
    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    // function that handles removal
    function removeFavoriteHandler(meetupId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
    }

    function iteamIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId);
    }
    
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        //below exposing functions to all interested components
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: iteamIsFavoriteHandler
    };

    return <FavoritesContext.Provider value={context}> 
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;