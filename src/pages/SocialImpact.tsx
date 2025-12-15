import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageSection from '@/components/layout/PageSection';
import { Card } from '@/components/ui/card';
import {
  HeartHandshakeBlobIcon,
  UsersBlobIcon,
  Building2BlobIcon
} from '@/components/ui/BlobIcons';

const FlowStep = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string; }) => (
  <Card className="p-6 md:p-8 text-center border-2 hover:border-[#D4A76A]/40 transition-all duration-300">
    <div className="flex items-center justify-center mb-4">
      {icon}
    </div>
    <h4 className="text-xl font-semibold text-gray-900 mb-2">{title}</h4>
    <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
  </Card>
);

const SocialImpact = () => {
  return (
    <>
      <PageHero
        title="Social Impact"
        subtitle="SocialBirds fundraising software gives you the power to raise more money online. Create beautifully branded fundraising pages in minutes."
      />

      <PageSection>
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3F321F]">
            Social Impact Through Technology: Empowering Social Enterprises and NGOs
          </h2>
          <div className="space-y-4 text-foreground/70">
            <p>
              Bean Infosystems devotes a portion of its time augmenting social impact with Nonprofits and Social Enterprises. We believe in the need for social impact activities at the core of our business and not just another CSR initiative.
            </p>
            <p>
              Bean Infosystems works with Nonprofits for subsidized development together with introductions to fundraising to support their work, with an aim to help Nonprofits with a more social enterprise model for predictable income and better planning. Nonprofits and social enterprises are on the front lines trying to make this a reality and our ability to help people support these efforts has never been more important.
            </p>
          </div>
        </div>
      </PageSection>

      {/* Flow Diagram Section */}
      <PageSection dark>
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-black mb-12">How Our Social Impact Flow Works</h3>

          {/* Connected steps */}
          <div className="relative">
            {/* horizontal connector line on md+ */}
            <div className="hidden md:block absolute left-0 right-0 top-1/2 h-0.5 bg-white/30"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              <FlowStep
                icon={<Building2BlobIcon size="md" />}
                title="Nonprofits"
                description="Organizations on the frontlines seeking sustainable support and tools."
              />
              <FlowStep
                icon={<HeartHandshakeBlobIcon size="md" />}
                title="Bean Infosystems"
                description="Subsidized development + strategic guidance to maximize impact."
              />
              <FlowStep
                icon={<UsersBlobIcon size="md" />}
                title="SocialBirds Community"
                description="Brings donors, volunteers, and supporters together to act."
              />
            </div>
          </div>

          {/* Second row with SocialBirds logo card center */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="hidden md:block"></div>
            <Card className="p-8 text-center border-2 border-[#D4A76A]/50 bg-white/95">
              <img src="https://www.beaninfosys.com/img/social-bird.png" className="w-40 mx-auto mb-4" alt="SocialBirds" />
              <p className="text-gray-800">Create beautifully branded fundraising pages in minutes.</p>
            </Card>
            <div className="hidden md:block"></div>
          </div>

          {/* Outcomes */}
          
        </div>
      </PageSection>
    </>
  );
};

export default SocialImpact;