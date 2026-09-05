import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

/**
 * Logo bileşeni.
 * Logo dosyasını `public/logo.png` olarak ekleyin (şeffaf arka plan, siyah çizim).
 * Koyu zeminlerde (footer, mobil menü, hero üzerindeki şeffaf navbar) otomatik
 * olarak beyaza çevrilir (brightness-0 invert). Dilerseniz daha net sonuç için
 * ayrı bir beyaz sürüm de kullanabilirsiniz — aşağıdaki nota bakın.
 */
export function Logo({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={cn('inline-flex items-center', className)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt={siteConfig.legalName}
        className={cn('h-14 w-auto md:h-16', light && 'brightness-0 invert')}
      />
    </Link>
  );
}
