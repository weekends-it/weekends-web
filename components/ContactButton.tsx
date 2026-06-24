"use client";

import { show, showNewMessage } from "@intercom/messenger-js-sdk";

// Opens the Intercom messenger. If `message` is provided, opens a NEW
// conversation with that text pre-filled in the composer so different CTAs
// can start the chat with different context (e.g. "Schedule a consultation").
export default function ContactButton({
  className,
  children,
  message,
}: {
  className?: string;
  children: React.ReactNode;
  message?: string;
}) {
  const open = () => {
    if (message) {
      showNewMessage(message);
    } else {
      show();
    }
  };

  return (
    <button type="button" className={className} onClick={open}>
      {children}
    </button>
  );
}
