
import Aurora from "@/components/Aurora";
import Eventcard from "@/components/Eventcard";
import SpecularButton from "@/components/SpecularButton";
import { events } from "@/lib/constants";





export default function Home() {
  return (
    <div >
      <h1 className=" text-center ">The Hub for Every Developer </h1>
      <h1 className=" text-center ">Event You Can't Miss </h1>
      <p className="text-center pt-4">Hackathons, Meetups, and Conferences, All in One Place</p>
      <div className="mt-4 flex justify-center items-center">
        <SpecularButton />
      </div>

      <div className="mt-20 space-y-7">
                <h3>Featured Events</h3>

                <ul className="events">
                    {events.map((event) => (
                        <li key={event.title} className="list-none">
                            <Eventcard {...event} />
                        </li>
                    ))}
                </ul>
            </div>
    </div>
  );
}
