"use client";

import { BookingProvider } from "@/components/booking/booking-context";
import { BookingModal } from "@/components/booking/booking-modal";
import { RentalProvider } from "@/components/rental/rental-context";
import { RentalModal } from "@/components/rental/rental-modal";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Services } from "@/components/site/services";
import { Braiding } from "@/components/site/braiding";
import { Team } from "@/components/site/team";
import { Rentals } from "@/components/site/rentals";
import { Gallery } from "@/components/site/gallery";
import { Reviews } from "@/components/site/reviews";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { MobileDock } from "@/components/site/mobile-dock";
import { useTenant } from "@/components/tenant/tenant-context";

export function SiteShell() {
  const { features } = useTenant();

  return (
    <BookingProvider>
      <RentalProvider>
        <Header />
        <main>
          <Hero />
          <Services />
          {features.braiding ? <Braiding /> : null}
          <Team />
          {features.rentals ? <Rentals /> : null}
          <Gallery />
          <Reviews />
          <Contact />
        </main>
        <Footer />
        <MobileDock />
        <BookingModal />
        {features.rentals ? <RentalModal /> : null}
      </RentalProvider>
    </BookingProvider>
  );
}
