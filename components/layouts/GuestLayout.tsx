import Navbar from "../Navbar";

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 sm:px-0">
      <Navbar />
      <main className="mt-4">
        {children}
        </main>
    </div>
  );
}
