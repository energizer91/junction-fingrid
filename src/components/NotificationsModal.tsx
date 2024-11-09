import { Button, Dialog, DialogPanel, Switch, Text } from "@tremor/react";

interface NotificationModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const NotificationsModal = ({
  isOpen,
  setIsOpen,
}: NotificationModalProps) => {
  return (
    <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
      <DialogPanel>
        <h3 className="text-2xl font-semibold text-tremor-content-strong mb-6">
          Your notifications
        </h3>
        <div className="flex flex-col gap-6">
          <div className="flex flex-row justify-between">
            <Text className="font-bold">Push notifications</Text>
            <Switch checked />
          </div>
          <div className="flex flex-row justify-between">
            <Text className="font-bold">
              Notifications Notify me when my feature request is released
            </Text>
            <Switch />
          </div>
          <div className="flex flex-row justify-between">
            <Text className="font-bold">Enable Smart Updates</Text>
            <Switch />
          </div>
        </div>
        <div className="flex flex-row justify-end">
          <Button
            variant="secondary"
            className="mt-8 text-right"
            onClick={() => setIsOpen(false)}
          >
            Close
          </Button>
        </div>
      </DialogPanel>
    </Dialog>
  );
};
