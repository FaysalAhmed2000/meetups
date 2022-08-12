import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {
  // assigning a context variable for the favorites page using the 'FavoritesContext' file
  const favoritesCtx = useContext(FavoritesContext);

  let content;
  //If the users total favorites = 0, the page will print 'You got no favorites yet. Start adding some?', otherwise it will list the favorites
  if(favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites}/>
  }

    return <section>
      <h1>My Favorites</h1>
      {content}
    </section>;
  }
  
  export default FavoritesPage;