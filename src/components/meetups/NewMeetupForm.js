import classes from "./NewMeetupForm.module.css";
import { Card } from "../ui/Card";

export const NewMeetupForm = () => {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <input type="text" required id="description" />
          <textarea id="decription" required rows="5"></textarea>
        </div>
        <div className={classes.actions}>
          <button type="button">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};
