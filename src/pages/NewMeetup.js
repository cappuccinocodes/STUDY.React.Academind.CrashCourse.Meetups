import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  function addMeetupHandler(meetupData) {
    fetch(
      "https://academind-react-meetup-a1cfc-default-rtdb.firebaseio.com/meetups.json",
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        } //default is GET
      }
    );
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
