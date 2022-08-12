import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";


function AllMeetupsPage() {

  // useState below to manage the pages state during firebase loading time
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  //below is the loading function
  useEffect(() => {
    //function starts off with setting the state of the page to loading.
    setIsLoading(true);
    //fetching data from our server
    fetch(
      'https://meetups-79ce1-default-rtdb.firebaseio.com/meetups.json'
      )
  .then((response) => {
     return response.json();
  })
  //Below: the function creates an empty array, then creates a new variable(meetup) and assigns 'key' from data values
  .then((data) => {
      const meetups = [];

      for(const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };
        //New data from meetup variable is pushed into the meetupS array
        meetups.push(meetup);
      }
      //then the state of loading is set to false and the pages conditions change
    setIsLoading(false);
    setLoadedMeetups(meetups);
  });
  }, []);

  
// If statement for when the loading state is set to true. 'Loading...' will be displayed
  if(isLoading) {
    <section>
      <p>Loading...</p>
    </section>
  }
  
    return <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
      </section>;
  }
  
  export default AllMeetupsPage;