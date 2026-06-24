"use client";

import { show } from "@intercom/messenger-js-sdk";

export default function ContactButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button type="button" className={className} onClick={() => show()}>
      {children}
    </button>
  );
}
