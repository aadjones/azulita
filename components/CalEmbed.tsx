'use client';

import { useState } from 'react';
import Script from 'next/script';
import { BOOKING_URL } from '@/lib/constants';

interface CalEmbedProps {
  calLink?: string;
  className?: string;
}

// Extract just the path from the full Cal.com URL
const DEFAULT_CAL_LINK = BOOKING_URL.replace('https://cal.com/', '');

export function CalEmbed({
  calLink = DEFAULT_CAL_LINK,
  className = '',
}: CalEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`cal-embed-container ${className}`}>
      <Script
        src="https://app.cal.com/embed/embed.js"
        strategy="lazyOnload"
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          console.error('Failed to load Cal.com embed script');
          setIsLoaded(false);
        }}
      />
      {!isLoaded && (
        <div className="cal-loading">
          <p>Loading booking calendar...</p>
        </div>
      )}
      <div
        data-cal-link={calLink}
        data-cal-config='{"layout":"month_view"}'
        style={{ width: '100%', height: '100%', overflow: 'scroll' }}
      />
    </div>
  );
}
