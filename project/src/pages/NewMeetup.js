import { useHistory } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  // the use of the useHistory hook is to send the  user back to the intial page when they have filled out the form
  const history = useHistory();
  function addMeetupHandler(meetupData) {
   // POSTing new meetup data from the form that is filled out  
    fetch(
      'https://meetups-79ce1-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then( () => {
      history.replace('/');
    });
  }

    return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
    );
  }
  
  export default NewMeetupPage;