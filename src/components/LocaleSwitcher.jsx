'use client';
import {useLocale} from 'next-intl';
import {usePathname, useRouter} from 'next-intl/client';
import {ChangeEvent, useTransition, useState, useEffect} from 'react';

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  let lang =  isSmallScreen ?  locale.substring(0, 2).toUpperCase() : locale;

  function onSelectChange(event) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, {locale: nextLocale});
    });
  }

  useEffect(() => {
    // Detecta el ancho de la pantalla y actualiza isSmallScreen en función de tu lógica.
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Aquí se asume que 768px es el umbral para una pantalla pequeña.
    };

    // Agrega un event listener para detectar cambios en el tamaño de la pantalla.
    window.addEventListener('resize', handleResize);

    // Limpia el event listener al desmontar el componente.
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <label
    className={`
    'relative text-gray-400',
    ${isPending} && 'transition-opacity [&:disabled]:opacity-30'
    `}
    >
       <p className="sr-only">cambia</p>
      <select
        className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
        defaultValue={lang}
        disabled={isPending}
        onChange={onSelectChange}
      >
         {isSmallScreen ? (  
      <>
        <option key="es" value="es">ES</option>
        <option key="en" value="en">EN</option>
      </>
    ) : (
      <>
        <option key="es" value="es">Español</option>
        <option key="en" value="en">English</option>
      </>
    )}
      </select>
      <span className="pointer-events-none absolute right-6 top-[8px]">⌄</span>
    </label>
  );
}