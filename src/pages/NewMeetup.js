import { useHistory } from "react-router-dom";
import { NewMeetupForm } from "../components/meetups/NewMeetupForm";

export const NewMeetupPage = () => {
  const history = useHistory();
  function addMeetupHandler(meetupData) {
    fetch(
      "https://udemy-react-course-ac235-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1>Add New Meetups</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};
