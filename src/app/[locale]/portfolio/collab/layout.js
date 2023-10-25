import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';
 
const locales = ['en', 'es'];

export const metadata = {
  title: 'Collab.',
}
 
export default function LocaleLayout({children, params: {locale}}) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();
 
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}