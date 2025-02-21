"use client";

import Container from "@/components/Container";
import Section from "@/components/Section";
import Title from "@/components/Title";
import { getNotifications } from "@/lib/notifications";
import { Notification } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const getAllNotifications = async () => {
      const allNotifications = await getNotifications();
      setNotifications(allNotifications);
    };

    getAllNotifications();
  }, []);

  return (
    <>
        <Section className="flex-grow min-h-screen">
          <div>
            <Title title="Notifications"/>
            <ul className="flex flex-col gap-2">
              {notifications.map((notification, idx) => (
                <div key={idx} className="p-4 flex items-center gap-2">
                  <p>{notification.details}</p>
                  <span className="text-nowrap font-semibold text-gray-500">
                    {new Date(notification.time).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </span>
                </div>
              ))}
            </ul>
          </div>
        </Section>
    </>
  );
}
