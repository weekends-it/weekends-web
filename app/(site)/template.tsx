"use client";

export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter relative z-[1]">{children}</div>;
}
