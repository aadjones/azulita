import { Hero } from '@/components/Hero';
import { ServicesOverview } from '@/components/ServicesOverview';
import { BookingCTA } from '@/components/BookingCTA';

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesOverview />
      <BookingCTA />
    </div>
  );
}
