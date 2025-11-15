'use client';

import { useEffect, useState } from 'react';
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

  useEffect(() => {
    // Lazy load Cal.com embed script
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    script.onload = () => setIsLoaded(true);
    script.onerror = () => {
      console.error('Failed to load Cal.com embed script');
      setIsLoaded(false);
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className={`cal-embed-container ${className}`}>
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
