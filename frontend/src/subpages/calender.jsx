import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calender.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const events = {
  "2024-10-16": [
    {
      id: "1",
      title: "Historical Controversies",
      time: "6:30 PM - 8:00 PM",
      detail: "How (Not) to Handle Them RSVP...",
      imageURL:
        "https://res.cloudinary.com/duozomapm/image/upload/v1728099355/vangoghmuseum-s0067V1962-800_sqfmi1.jpg",
    },
    {
      id: "2",
      title: "आनंदओवरी | Anandowari",
      time: "7:00 pm - 8:30 pm",
      detail:
        "A Devotee Seeks God, a Man His Brother, and a Writer the Poet Tukaram RSVP..",
      imageURL:
        "https://res.cloudinary.com/duozomapm/image/upload/v1728099347/vangoghmuseum-s0113V1962-800_zwr3t1.jpg",
    },
  ],
  "2024-10-17": [
    {
      id: "1",
      title: "Guardians of the River",
      time: "6:30 PM - 8:00 PM",
      detail: "Saving India's Elusive Otters RSVP...",
      imageURL:
        "https://res.cloudinary.com/duozomapm/image/upload/v1728099347/vangoghmuseum-s0113V1962-800_zwr3t1.jpg",
    },
  ],

  "2024-10-18": [
    {
      id: "1",
      title: "Action or Despair: What Does India Need From Her Citizens?",
      time: "6:30 PM - 8:00 PM",
      detail: "The Annual Vijay Nambisan Lecture 2024 RSVP...",
      imageURL:
        "https://res.cloudinary.com/duozomapm/image/upload/v1728099347/vangoghmuseum-s0113V1962-800_zwr3t1.jpg",
    },
  ],
  "2024-10-19": [
    {
      id: "1",
      title: "Melodic Revolution",
      time: "7:00 PM - 8:30 PM",
      detail: "Social Reformation through Music RSVP..",
      imageURL:
        "https://res.cloudinary.com/duozomapm/image/upload/v1728099347/vangoghmuseum-s0113V1962-800_zwr3t1.jpg",
    },
  ],
  "2024-10-20": [
    {
      id: "1",
      title: "Mela Chiraagaa’n | ਮੇਲਾ ਚਿਰਾਗਾਂ | میلہ چراغاں",
      time: "6:00 PM - 7:45 PM",
      detail: "Sufi Poetry of Madho Lal Hussain RSVPs Read more...",
      imageURL:
        "https://res.cloudinary.com/duozomapm/image/upload/v1728099347/vangoghmuseum-s0113V1962-800_zwr3t1.jpg",
    },
    {
      id: "2",
      title: "Cultural Intersections",
      time: "10:00 AM - 6:00 PM",
      detail: "Mapping India’s Cultural Sectors Read more...",
      imageURL:
        "https://res.cloudinary.com/duozomapm/image/upload/v1728099387/vangoghmuseum-s0065V1962-800_xjut4d.jpg",
    },
  ],

  "2024-10-28": [
    {
      id: "1",
      title: "Whisky Unscripted",
      time: "6:30 PM - 8:00 PM",
      detail: "India's Liquid Legacy Read more..",
      imageURL:
        "https://res.cloudinary.com/duozomapm/image/upload/v1728099339/vangoghmuseum-s0097V1962v-800_qlcqlc.jpg",
    },
    {
      id: "2",
      title: "Dasamahavidya",
      time: "7:00 PM - 8:30 PM",
      detail: "A Bharatnatyam Duet RSVP...",
      imageURL:
        "https://res.cloudinary.com/duozomapm/image/upload/v1728099387/vangoghmuseum-s0065V1962-800_xjut4d.jpg",
    },
  ],
};

const formatDate = (date) => {
  return date.toLocaleDateString("en-CA", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const eventFunction = (date) => {
  const eventDate = date.toLocaleDateString("en-CA");
  if (events[eventDate]) {
    return (
      <>
        <h4 className="event-day">Events on {formatDate(date)}</h4>
        <div className="event-contents">
          {events[eventDate].map((eve, index) => (
            <Link to={`/events/${eve.id}`} key={index} className="event-marker">
              <div className="events-details">
                <h2 className="event-title">{eve.title}</h2>
                <h4 className="event-time">{eve.time}</h4>
                <p className="event-para">{eve.detail}</p>
              </div>
              <div className="events-image">
                <img src={eve.imageURL} alt="" />
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  }
};

const CustomCalender = () => {
  const [date, setdate] = useState(new Date());
  const [activeDate, setactiveDate] = useState(null);

  const onchangeDate = (newDate) => {
    setdate(newDate);
    setactiveDate(newDate);
  };

  const hasEvent = (date) => {
    const eventDate = date.toLocaleDateString("en-CA");
    return events[eventDate] ? true : false;
  };

  return (
    <div className="react-calendar-section">
      <Calendar
        onChange={onchangeDate}
        value={date}
        tileClassName={({ date }) => {
          const today = new Date();

          if (hasEvent(date)) {
            return "event-date";
          }

          if (activeDate && date.toDateString() === activeDate.toDateString()) {
            return "active-date";
          }

          if (!activeDate && date.toDateString() === today.toDateString()) {
            return "today-date";
          }

          if (today < date) {
            return "future-date";
          } else if (today > date) {
            return "past-date";
          }
        }}
        tileContent={({ date, view }) => {
          const today = new Date();

          if (view === "month") {
            if (today > date) {
              return <div className="data-circle past-circle"></div>;
            } else if (today == date) {
              return <div className="data-circle today-circle"></div>;
            } else {
              return <div className="data-circle future-circle"></div>;
            }
          }
        }}
      />

      <div className="calender-events">{eventFunction(date)}</div>
    </div>
  );
};

export default CustomCalender;
