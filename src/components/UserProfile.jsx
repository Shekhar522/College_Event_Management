import {
  Mail,
  BookOpen,
  GraduationCap,
  IdCard,
  Pencil,
} from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../components/ui/avatar";

import { Button } from "./ui/Button";
import { currentUser } from "../data/mockData";
import { toast } from "sonner";

const UserProfile = () => {
  const fields = [
    { label: "Email", value: currentUser.email, icon: Mail },
    { label: "Roll Number", value: currentUser.rollNumber, icon: IdCard },
    { label: "Branch", value: currentUser.branch, icon: BookOpen },
    { label: "Year", value: currentUser.year, icon: GraduationCap },
  ];

  return (
    <div className="mx-auto max-w-3xl py-2" data-testid="profile-page">
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
        <div className="h-28 bg-gradient-to-r from-[#ede9fe] via-[#f5f3ff] to-[#fae8ff]" />

        <div className="-mt-12 px-6 pb-8 md:px-10">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-end gap-4">
              <Avatar className="h-24 w-24 ring-4 ring-white">
                <AvatarImage
                  src={currentUser.avatar}
                  alt={currentUser.name}
                />
                <AvatarFallback className="bg-[#ede9fe] text-2xl text-[#6b4de0]">
                  {currentUser?.firstName?.[0] || "U"}
                </AvatarFallback>
              </Avatar>

              <div className="pb-2">
                <h2 className="text-2xl font-extrabold text-[#1e1b4b]">
                  {currentUser.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {currentUser.email}
                </p>
              </div>
            </div>

            <Button
              onClick={() => toast.info("Edit profile (demo)")}
              variant="outline"
              className="border-2 border-[#7c5cff] text-[#7c5cff] hover:bg-[#ede9fe]"
            >
              <Pencil className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {fields.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-[#f5f3ff] p-4"
                data-testid={`profile-${label
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                  <Icon className="h-4 w-4 text-[#7c5cff]" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-gray-500">{label}</p>
                  <p className="truncate font-semibold text-[#1e1b4b]">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;