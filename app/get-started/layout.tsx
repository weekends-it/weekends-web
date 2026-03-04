import Navigation from "@/components/Navigation";

export default function GetStartedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 bg-brand-green flex flex-col overflow-y-auto">
      <Navigation />
      {children}
    </div>
  );
}
