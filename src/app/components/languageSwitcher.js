'use client';

import { useRouter, usePathname } from 'next/navigation';

const LanguageSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname();

    const switchLanguage = (lang) => {
        router.push( pathname, { locale: lang });
    };

    return (
        <div>
            <button onClick={() => switchLanguage('en')}>English</button>
            <button onClick={() => switchLanguage('de')}>Deutsch</button>
        </div>
    );
};

export default LanguageSwitcher;