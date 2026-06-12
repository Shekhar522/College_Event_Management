import { Calendar, Clock, MapPin, Trash2, IdCard } from "lucide-react";

import Button from "../components/ui/Button";
import { categoryStyles, statusStyles } from "../data/mockdata";
import { toast } from "sonner";

const UserEventCard = ({ event, registrations, setRegistrations }) => {
  const cat = categoryStyles[event.category] || categoryStyles.Technical;

  const status = statusStyles[event.status] || statusStyles.Confirmed;

  // const handleCancel = () => {
  //   toast.success(`Cancellation requested for ${event.title}`, {
  //     description: "This is a demo action — no data was changed.",
  //   });
  // };
  const cancelRegistration = (eventId) => {
    const saved = JSON.parse(localStorage.getItem("registrations")) || [];

    const updated = saved.filter((item) => item.eventId !== eventId);

    localStorage.setItem("registrations", JSON.stringify(updated));

    setRegistrations(updated);
  };
  return (
    <div
      className="group flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-2 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md md:flex-row md:gap-6 md:p-2"
      data-testid={`event-card-${event.id}`}
    >
      {/* Image */}
      <div className="h-20 w-full overflow-hidden rounded-xl md:w-32 lg:w-36">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col  gap-2">
        <div>
          <span
            className={`inline-flex rounded-full px-2.5 py-1 text-[8px] font-bold uppercase ${cat.bg} ${cat.text}`}
          >
            {event.category}
          </span>

          <h3 className="mt-0.5 text-[14px] font-bold text-[#1e1b4b]">
            {event.title}
          </h3>

          <p className="text-[12px] text-gray-500">{event.subtitle}</p>
        </div>

        <div className="flex flex-wrap gap-x-2 gap-y-1 text-[10px] text-gray-600">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-2 w-2 text-gray-400" />
            {event.date}
          </span>

          <span className="flex items-center gap-1.5">
            <Clock className="h-2 w-2 text-gray-400" />
            {event.time}
          </span>

          <span className="flex items-center gap-1.5">
            <MapPin className="h-2 w-2 text-gray-400" />
            {event.location}
          </span>
        </div>
      </div>

      {/* <div>
        {registrations.map((reg) => (
          <div key={reg.eventId}>
            <h2>{reg.eventTitle}</h2>

            <p>{reg.fullName}</p>

            <p>{reg.rollNumber}</p>

            <p>{reg.status}</p>
          </div>
        ))}
      </div> */}

      <div className="space-y-1">
        <h2 className="font-semibold text-gray-800 mb-2">{event.fullName}</h2>

        <p className="text-[10px] text-gray-500">Roll No: {event.rollNo}</p>

        <p className="text-[10px] text-gray-500">Email: {event.email}</p>

        <p className="text-[10px] text-gray-500">Phone: {event.phone}</p>
      </div>
      {/* Side Info */}
      <div className="flex w-full flex-col justify-between gap-2 border-t border-gray-100 pt-2 md:w-auto md:border-l md:border-t-0 md:pl-6 md:pt-0">
        <div className="space-y-1 text-xs">
          {/* <div className="flex justify-between">
            <span className="text-gray-500">Registration Date</span>
            <span className="font-semibold text-[#1e1b4b]">
              {event.registrationDate}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Roll Number</span>
            <span className="font-semibold text-[#1e1b4b]">
              {event.rollNumber}
            </span>
          </div> */}

          <div className="flex justify-between">
            <h4 className="text-gray-500 text-[16px]">Status</h4>
            <span
              className={`rounded-md px-2 py-0.5 text-[15px] font-bold ${status.bg} ${status.text}`}
            >
              {event.status}
            </span>
          </div>
        </div>

        <Button
          onClick={() => cancelRegistration(event.eventId)}
          variant="outline"
          // onClick={handleCancel}
          className="mt-1 w-full border border-[#ed314d] text-[#ff5c74] hover:bg-[#f89fac] text-[12px]"
        >
          <Trash2 className="mr-1.5 h-3 w-3" />
          Cancel Registration
        </Button>
      </div>
    </div>
  );
};

export default UserEventCard;
