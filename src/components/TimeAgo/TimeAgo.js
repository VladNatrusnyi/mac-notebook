import {useEffect, useState} from "react";

export const TimeAgo = ({myTime}) => {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    const calculateTimeAgo = () => {
      const currentDate = new Date();
      const pastDate = new Date(myTime); // Замініть на вашу дату

      const timeDifference = currentDate - pastDate;

      const millisecondsInDay = 24 * 60 * 60 * 1000;

      if (timeDifference >= millisecondsInDay) {
        setTimeAgo(pastDate.toLocaleDateString());
      } else {
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) {
          setTimeAgo(`${days} days ago`);
        } else if (hours > 0) {
          setTimeAgo(`${hours}h ago`);
        } else if (minutes > 0) {
          setTimeAgo(`${minutes}m ago`);
        } else {
          setTimeAgo(`${seconds}s ago`);
        }
      }
    };

    calculateTimeAgo();
  }, []);

  return (
    <>
      {timeAgo}
    </>
  );
}
