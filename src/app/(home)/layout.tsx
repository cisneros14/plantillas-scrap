import { NavbarDesktop } from "@/components/layout/NavbarDesktop";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";
import { Footer } from "@/components/layout/Footer";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavbarDesktop />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileBottomBar />
    </>
  );
}
