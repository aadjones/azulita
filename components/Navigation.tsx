'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/i18n/useLanguage';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { content, language, setLanguage } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'es' : 'en';
    setLanguage(newLang);

    // Convert current path to new language
    if (newLang === 'es') {
      // Going to Spanish
      if (!pathname.startsWith('/es')) {
        const newPath = pathname === '/' ? '/es' : `/es${pathname}`;
        router.push(newPath);
      }
    } else {
      // Going to English
      if (pathname.startsWith('/es')) {
        const newPath = pathname.replace(/^\/es/, '') || '/';
        router.push(newPath);
      }
    }
  };

  const getLocalizedPath = (path: string) => {
    return language === 'es' ? `/es${path}` : path;
  };

  return (
    <nav className="bg-gradient-to-r from-secondary to-primary text-white sticky top-0 z-50 shadow-md">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href={getLocalizedPath('/')}
            className="text-xl md:text-2xl font-semibold tracking-wide hover:opacity-90 transition-opacity"
          >
            Azulita Holistics
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href={getLocalizedPath('/')}
              className="hover:opacity-80 transition-opacity font-medium"
            >
              {content.nav.home}
            </Link>
            <Link
              href={getLocalizedPath('/about')}
              className="hover:opacity-80 transition-opacity font-medium"
            >
              {content.nav.about}
            </Link>
            <Link
              href={getLocalizedPath('/services')}
              className="hover:opacity-80 transition-opacity font-medium"
            >
              {content.nav.services}
            </Link>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 border-2 border-white rounded-full hover:bg-white hover:text-primary transition-all font-semibold text-sm"
              aria-label={language === 'en' ? 'Switch to Spanish' : 'Switch to English'}
            >
              {language === 'en' ? '🇲🇽 ES' : '🇺🇸 EN'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col gap-4">
              <Link
                href={getLocalizedPath('/')}
                className="hover:opacity-80 transition-opacity font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {content.nav.home}
              </Link>
              <Link
                href={getLocalizedPath('/about')}
                className="hover:opacity-80 transition-opacity font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {content.nav.about}
              </Link>
              <Link
                href={getLocalizedPath('/services')}
                className="hover:opacity-80 transition-opacity font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {content.nav.services}
              </Link>
              <button
                onClick={() => {
                  toggleLanguage();
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-2 border-2 border-white rounded-full hover:bg-white hover:text-primary transition-all font-semibold text-sm w-fit"
              >
                {language === 'en' ? '🇲🇽 ES' : '🇺🇸 EN'}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
