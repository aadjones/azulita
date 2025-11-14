import { Hero } from '@/components/Hero';
import { ServicesOverview } from '@/components/ServicesOverview';
import { BookingCTA } from '@/components/BookingCTA';
import { StructuredData } from '@/components/StructuredData';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata('home', 'en');

export default function Home() {
  return (
    <>
      <StructuredData type="home" lang="en" />
      <div>
        <Hero />
        <ServicesOverview />
        <BookingCTA />
      </div>
    </>
  );
}
