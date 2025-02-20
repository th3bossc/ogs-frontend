import { getEvents } from "@/lib/events";
import { Event } from "@/types";
import { resolve } from "path";
import { useEffect, useState } from "react";

interface VenueCardProps {
  name: string;
  image: string;
}

const dummyEvents = ["Prodezza", "I-ink", "Informals", "Proshow"];

const VenueCard = ({ name, image }: VenueCardProps) => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const getAllEvents = async () => {
      const response = await getEvents();
      console.log(response);

      const selectedEvents = response.filter(
        (event) => event.venue.name === name
      );

      const activeEvents = selectedEvents
        .filter((event) => event.completed === true)
        .sort((a, b) => {
          if (a.priority && !b.priority) return -1;
          if (!a.priority && b.priority) return 1;
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        });

      setEvents(activeEvents);
    };

    getAllEvents();
  }, []);

  return (
    <>
      <div className="relative w-fit my-6">
        <div className="w-[330px] h-[200px] overflow-hidden">
          <img
            src={image}
            className="w-[330px] h-[220px] object-cover"
            alt={name}
          />
        </div>
        <div className="absolute top-0 w-full h-full bg-[linear-gradient(to_top,#000_10%,transparent_40%)]"></div>
        <div className="absolute bottom-0 p-2">
          <span className="text-2xl">{name}</span>
        </div>
        <div className="backdrop-blur-md absolute top-0 right-0 w-fit h-full p-4">
          <span className="-ml-4 bg-black px-2 py-1 rounded-r-full">
            Events
          </span>
          <ul>
            {events.map((event, idx) => (
              <li key={idx}>
                {event.title}
                {idx !== dummyEvents.length - 1 && (
                  <div className="border-t border-white"></div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default VenueCard;
