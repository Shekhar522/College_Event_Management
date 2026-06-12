import { Ticket, CheckCircle2, Clock, XCircle } from "lucide-react";

const stats = [
  {
    key: "total",
    label: "Total Registrations",
    icon: Ticket,
    iconBg: "bg-violet-100",
    iconColor: "text-[#7c5cff]",
  },
  {
    key: "confirmed",
    label: "Confirmed",
    icon: CheckCircle2,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    key: "upcoming",
    label: "Upcoming",
    icon: Clock,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    key: "cancelled",
    label: "Cancelled",
    icon: XCircle,
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
  },
];

const StatsBar = ({ counts = {} }) => {
  return (
    <div
      className="grid grid-cols-2 gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm md:grid-cols-4 md:gap-6 md:p-5"
      data-testid="stats-bar"
    >
      {stats.map(({ key, label, icon: Icon, iconBg, iconColor }) => (
        <div
          key={key}
          className="flex items-center gap-3"
          data-testid={`stat-${key}`}
        >
          <div
            className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full ${iconBg}`}
          >
            <Icon className={`h-5 w-5 ${iconColor}`} strokeWidth={2.2} />
          </div>

          <div className="min-w-0">
            <p className="text-2xl font-extrabold leading-none text-[#1e1b4b]">
              {counts?.[key] ?? 0}
            </p>
            <p className="mt-1 truncate text-xs text-gray-500">{label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsBar;