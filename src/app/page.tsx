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
      <section id="features" className="bg-white py-24">
        <h2 className="text-3xl font-bold text-center">Features</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {/* Feature Cards Placeholder */}
        </div>
      </section>
      <section id="benefits" className="bg-noise py-24">
        <h2 className="text-3xl font-bold text-center">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {/* Benefit Cards Placeholder */}
        </div>
      </section>
      <section id="about" className="bg-gray-100 py-24">
        <SplitAbout description="We are a forward-thinking company dedicated to delivering innovative solutions." />
      </section>
      <section id="testimonials" className="bg-white py-24">
        <h2 className="text-3xl font-bold text-center">What Our Users Say</h2>
        <div className="flex flex-col items-center mt-12">
          {/* Testimonials Placeholder */}
        </div>
      </section>
      <section id="pricing" className="bg-white py-24">
        <h2 className="text-3xl font-bold text-center">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {/* Pricing Table Placeholder */}
        </div>
      </section>
      <section id="contact" className="bg-gray-100 py-24">
        <h2 className="text-3xl font-bold text-center">Get In Touch</h2>
        <form className="mt-12 max-w-md mx-auto">
          <input type="text" className="border p-2 w-full" placeholder="Name" required />
          <input type="email" className="border p-2 w-full mt-4" placeholder="Email" required />
          <textarea className="border p-2 w-full mt-4" placeholder="Message" required></textarea>
          <button type="submit" className="bg-primary text-white mt-4 p-2 w-full rounded">Send Message</button>
        </form>
      </section>
      <FooterBase logoSrc="/images/logo.svg" logoText="Webild" copyrightText="© 2025 Webild" />
    </SiteThemeProvider>
  );
}
