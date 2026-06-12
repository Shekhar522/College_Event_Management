
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import Button from "../components/ui/Button";
import Label from "../components/ui/Label";

import { toast } from "sonner";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields");
      return;
    }

    toast.success("Message sent!", {
      description: "We'll get back to you within 24 hours.",
    });

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" data-testid="contact-page">
  <div className="w-full max-w-5xl">
    
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 items-center">
      
      {/* Info */}
      <div className="lg:col-span-2">
        <div className="rounded-3xl bg-gradient-to-br from-[#7c5cff] to-[#6b4de0] p-8 text-white">
          <h2 className="text-2xl font-extrabold">Let's talk.</h2>
          <p className="mt-2 text-sm text-violet-100">
            Have a question, suggestion or want to host an event? Reach out.
          </p>

          <div className="mt-6 space-y-4 text-sm">
            <div className="flex gap-3">
              <Mail className="h-4 w-4" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-violet-100">events@college.edu</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Phone className="h-4 w-4" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-violet-100">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex gap-3">
              <MapPin className="h-4 w-4" />
              <div>
                <p className="font-semibold">Office</p>
                <p className="text-violet-100">
                  Student Activity Center, Block C
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={onSubmit}
        className="lg:col-span-3 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8"
      >
        <h3 className="text-xl font-bold text-[#1e1b4b]">
          Send a message
        </h3>

        <div className="mt-6 space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Your full name"
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="you@college.edu"
            />
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Tell us what's on your mind..."
            />
          </div>

          <Button type="submit">
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </Button>
        </div>
      </form>

    </div>
  </div>
</div>
  );
};

export default ContactUs;