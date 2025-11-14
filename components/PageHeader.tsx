'use client';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="page-header">
      <div className="container-custom">
        <h1 className="page-title">
          {title}
        </h1>
        <p className="page-subtitle">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
