"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <section id="hero">
        <BillboardHero title="Welcome to Webild" subtitle="Your friendly SaaS solution for all your needs!" />
      </section>
      <section id="about" className="bg-gray-100 py-24">
        <SplitAbout description="We are a forward-thinking company dedicated to delivering innovative solutions." />
      </section>
      <section id="faq" className="bg-white py-24">
        <CentralFAQ items={[{ title: 'What is Webild?', content: 'Webild is a SaaS solution for all your needs.' }, { title: 'How do I sign up?', content: 'You can sign up on our website.' }]} />
      </section>
      <FooterBase logoSrc="/images/logo.svg" copyrightText="© 2025 Webild" columns={[{ title: 'Resources', items: [{ label: 'Blog', onClick: () => {} }, { label: 'Contact', onClick: () => {} }] }]}/>
    </SiteThemeProvider>
  );
}
