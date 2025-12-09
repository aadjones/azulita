import { Hero } from '@/components/Hero';
import { StructuredData } from '@/components/StructuredData';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata('home', 'es');

export default function Home() {
  return (
    <>
      <StructuredData type="home" lang="es" />
      <div>
        <Hero />
      </div>
    </>
  );
}
