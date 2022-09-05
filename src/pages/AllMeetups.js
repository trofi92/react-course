import { MeetupList } from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

export const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://udemy-react-course-ac235-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(data);
      });
  }, []);

  /**@params useState 사용 이유 = promise 체인에 올라가 있는 힘수 전체에
   * async, await를 사용하게 되면 함수 전체가 promise를 반환하게 되므로
   * 유효한 React 컴포넌트로 받아들여지지 않음.(JSX를 반환하지 않게되므로) */

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};
