import { CheckCircle2, Info, Bell } from "lucide-react";
import { notificationsData } from "../data/mockdata";

const iconFor = (type) => {
  if (type === "success")
    return {
      Icon: CheckCircle2,
      color: "text-emerald-600",
      bg: "bg-emerald-100",
    };

  return {
    Icon: Info,
    color: "text-[#7c5cff]",
    bg: "bg-violet-100",
  };
};

const Usernotifications = () => {
  return (
    <div
  className="min-h-screen flex items-center justify-center px-4"
  data-testid="notifications-page"
>
  <div className="w-full max-w-3xl">
    
    <div className="rounded-3xl border border-gray-100 bg-white p-2 shadow-sm md:p-4">
      
      {notificationsData.length === 0 ? (
        <div className="p-10 text-center text-gray-500">
          <Bell className="mx-auto mb-3 h-8 w-8 text-gray-300" />
          <p>You’re all caught up.</p>
        </div>
      ) : (
        <ul className="divide-y divide-gray-100">
          {notificationsData.map((n) => {
            const { Icon, color, bg } = iconFor(n.type);

            return (
              <li
                key={n.id}
                className="flex items-start gap-4 px-3 py-4 transition-colors hover:bg-[#f5f3ff]/60 md:px-4"
                data-testid={`notification-${n.id}`}
              >
                <div
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${bg}`}
                >
                  <Icon className={`h-5 w-5 ${color}`} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-bold text-[#1e1b4b]">
                      {n.title}
                    </p>
                    <span className="flex-shrink-0 text-xs text-gray-400">
                      {n.time}
                    </span>
                  </div>

                  <p className="mt-0.5 text-sm text-gray-600">
                    {n.message}
                  </p>
                </div>

                {n.unread && (
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#7c5cff]" />
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>

  </div>
</div>
  );
};

export default Usernotifications;