import * as React from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Button, ButtonProps, Card, Divider, Text } from "@tremor/react";
import { RiNotification2Line, RiSettings4Fill } from "@remixicon/react";
import { Notification } from "../types.ts";
import classnames from "classnames";
import { mockNotification, mockReadNotification } from "../mocks.ts";
import { formattedDate } from "../utils.ts";
import { NotificationsModal } from "./NotificationsModal.tsx";

const notifications: Notification[] = [
  mockNotification,
  mockNotification,
  mockReadNotification,
];

export const TriggerButton = ({ className, ...rest }: ButtonProps) => {
  return (
    <Button
      className={classnames("ml-3 text-tremor-text-primary", className)}
      size="xs"
      variant="light"
      {...rest}
    >
      <RiNotification2Line />
    </Button>
  );
};

interface NotificationIconProps {
  active: boolean;
}

const NotificationIcon = ({ active = false }: NotificationIconProps) => {
  return (
    <svg width="8" height="8" xmlns="http://www.w3.org/2000/svg">
      <circle
        className={active ? "fill-blue-800" : "fill-gray-400"}
        cx="4"
        cy="4"
        r="4"
        fill="black"
      />
    </svg>
  );
};

interface NotificationProps {
  notification: Notification;
}

const NotificationItem = ({ notification }: NotificationProps) => {
  return (
    <div>
      <div className="flex flex-row gap-1 items-center mb-1">
        <NotificationIcon active={!notification.read} />
        <span className="text-gray-400 text-sm">
          {formattedDate(notification.date)}
        </span>
      </div>
      <Text className="font-bold text-lg">{notification.title}</Text>
    </div>
  );
};

export const NotificationCenter = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const unreadNotifications = notifications.filter((n) => !n.read);
  const readNotifications = notifications.filter((n) => n.read);
  return (
    <Popover className="relative">
      <NotificationsModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <PopoverButton as={TriggerButton} className="relative" />
      <PopoverPanel
        as={Card}
        static={isOpen}
        className="absolute z-10 mt-2 bg-white p-8 rounded-tremor-small min-w-[420px] left-full -translate-x-full"
      >
        <div className="mb-8 flex flex-row justify-between items-center">
          <Text className="text-2xl font-semibold">Notifications</Text>
          <Button variant="light" onClick={() => setIsOpen(true)}>
            <RiSettings4Fill />
          </Button>
        </div>
        {notifications.length === 0 && (
          <Text className="text-gray-500">No new notifications</Text>
        )}
        {readNotifications.length > 0 && (
          <div className="flex flex-col gap-6">
            {unreadNotifications.map((notification: Notification) => (
              <NotificationItem
                notification={notification}
                key={notification.id}
              />
            ))}
          </div>
        )}
        {readNotifications.length > 0 && (
          <>
            <Divider />
            <div className="flex flex-col gap-6">
              {readNotifications.map((notification: Notification) => (
                <NotificationItem
                  notification={notification}
                  key={notification.id}
                />
              ))}
            </div>
          </>
        )}
      </PopoverPanel>
    </Popover>
  );
};
