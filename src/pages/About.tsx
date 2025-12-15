
import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageSection from '@/components/layout/PageSection';
import { Card } from '@/components/ui/card';
import {
  LightbulbBlobIcon,
  TargetBlobIcon,
  HeartBlobIcon,
  WrenchBlobIcon,
  EditBlobIcon,
  Share2BlobIcon,
  MapBlobIcon,
  CalendarBlobIcon,
  BuildingBlobIcon,
  GlobeBlobIcon,
  RocketBlobIcon,
  ZapBlobIcon,
  BookOpenBlobIcon
} from '@/components/ui/BlobIcons';
import aboutMissionImage from '@/assets/about-mission-image.webp';

const About = () => {
  const timeline = [
    {
      year: "2016",
      title: "Founding",
      description: "Bean Infosystems was founded with a clear vision to create innovative software that helps businesses work smarter and grow faster.",
      icon: <BuildingBlobIcon size="sm" />
    },
    {
      year: "2017",
      title: "Expansion",
      description: "Enhanced our services with consulting and advisory capabilities to better support client needs.",
      icon: <RocketBlobIcon size="sm" />
    },
    {
      year: "2018",
      title: "Global Presence",
      description: "Opened a technology-focused Offshore Development Center in India.",
      icon: <GlobeBlobIcon size="sm" />
    },
    {
      year: "2019",
      title: "SocialBirds Launch",
      description: "Rolled out \"SocialBirds.org,\" a platform built to bridge philanthropists and nonprofit organizations.",
      icon: <ZapBlobIcon size="sm" />
    },
    {
      year: "2023",
      title: "AI Transformation",
      description: "Pivoted to helping businesses navigate AI-driven digital transformation in a rapidly evolving landscape.",
      icon: <BookOpenBlobIcon size="sm" />
    },
    {
      year: "Current",
      title: "Shaping Tomorrow with AI",
      description: "Advancing with next-generation AI capabilities to better support our clients' changing demands.",
      icon: <CalendarBlobIcon size="sm" />
    }
  ];
  
  const officeImages = [
    {
      image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=800&auto=format&fit=crop",
      title: "USA Office",
      description: "Our headquarters driving innovation and client partnerships"
    },
    {
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop",
      title: "India Office",
      description: "Our technology-focused Offshore Development Center"
    },
    {
      image: "https://images.unsplash.com/photo-1622126807280-9b5b32b28e77?q=80&w=800&auto=format&fit=crop",
      title: "Remote",
      description: "Our global team collaborating across time zones"
    }
  ];

  return (
    <>
      <PageHero 
        title="About Bean Infosystems" 
        subtitle="Driving digital transformation through innovation and expertise"
      />

      {/* Company Overview */}
      <PageSection>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-foreground/70 mb-4">
              Founded in 2016, Bean Infosystems has evolved from a small development team into a global technology partner. Our growth is driven by a commitment to innovation, quality and measurable results.
            </p>
            <p className="text-foreground/70 mb-4">
              We have built a strong reputation for delivering high-performance software solutions that address complex business challenges. As our capabilities expanded, we incorporated AI-driven technologies, strategic consulting and digital advisory services, enabling organizations to navigate transformation with confidence.
            </p>
            <p className="text-foreground/70">
              Today, we continue to advance our expertise and leverage emerging technologies to help clients stay competitive in a rapidly evolving digital landscape.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src={aboutMissionImage} 
                alt="Our Mission - Team looking toward the future" 
                className="w-full h-[400px] object-contain rounded-xl"
              />
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[120%] max-h-[120%] bg-bean/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </PageSection>

      {/* Mission, Vision, Values */}
      <PageSection dark>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6">
            <div className="mb-4 flex justify-center">
              <LightbulbBlobIcon size="lg" />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Mission</h3>
            <p className="text-foreground/70">
              To empower businesses through innovative digital solutions that drive growth, efficiency, and 
              competitive advantage in an increasingly connected world.
            </p>
          </Card>
          <Card className="p-6">
            <div className="mb-4 flex justify-center">
              <TargetBlobIcon size="lg" />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Vision</h3>
            <p className="text-foreground/70">
              To be the leading catalyst for digital transformation, helping businesses harness the power 
              of technology to achieve their fullest potential.
            </p>
          </Card>
          <Card className="p-6">
            <div className="mb-4 flex justify-center">
              <HeartBlobIcon size="lg" />
            </div>
            <h3 className="text-xl font-bold mb-3">Our Values</h3>
            <p className='text-foreground/70'>
            Innovation First, Integrity Always, Excellence Delivered — your success is our success.
            </p>
          </Card>
        </div>
      </PageSection>

      {/* New Image Gallery Section */}
      <PageSection title="Our Workspaces" subtitle="Where innovation happens every day">
        <div className="grid md:grid-cols-3 gap-8">
          {officeImages.map((office, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={office.image} 
                  alt={office.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold mb-1 text-center">{office.title}</h3>
                    <p className="text-sm text-white/80 text-center">{office.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </PageSection>

      {/* Company Timeline */}
      <PageSection title="Our Journey" subtitle="A timeline of Bean Infosystem's growth and evolution">
        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className={`relative grid md:grid-cols-2 gap-6 items-center`}>
                {/* Icon marker instead of number */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  {item.icon}
                </div>
                
                {/* Content */}
                <div className={`md:text-right ${index % 2 === 0 ? 'md:pr-16' : 'md:order-2 md:pl-16 md:text-left'}`}>
                  <div className="bg-card border border-border rounded-lg p-6 hover:border-bean/30 transition-all duration-300">
                    <div className="text-bean text-sm font-semibold mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-foreground/70">{item.description}</p>
                  </div>
                </div>
                
                <div className={`${index % 2 === 0 ? 'md:order-2 md:pl-16' : 'md:pr-16'}`}>
                  {/* Empty space to maintain grid alignment */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Our Approach */}
      <PageSection dark title="Our Approach" subtitle="How we deliver exceptional results for our clients">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6">
            <div className="mb-4 flex justify-center">
              <EditBlobIcon size="md" />
            </div>
            <h3 className="text-lg font-bold mb-2">Discovery</h3>
            <p className="text-foreground/70">
              We begin with a thorough discovery process to understand your business objectives, challenges, and requirements.
            </p>
          </Card>
          <Card className="p-6">
            <div className="mb-4 flex justify-center">
              <MapBlobIcon size="md" />
            </div>
            <h3 className="text-lg font-bold mb-2">Strategy</h3>
            <p className="text-foreground/70">
              We develop a comprehensive strategy tailored to your unique needs and aligned with your business goals.
            </p>
          </Card>
          <Card className="p-6">
            <div className="mb-4 flex justify-center">
              <WrenchBlobIcon size="md" />
            </div>
            <h3 className="text-lg font-bold mb-2">Implementation</h3>
            <p className="text-foreground/70">
              Our expert team executes the strategy with precision, leveraging the latest technologies and best practices.
            </p>
          </Card>
          <Card className="p-6">
            <div className="mb-4 flex justify-center">
              <Share2BlobIcon size="md" />
            </div>
            <h3 className="text-lg font-bold mb-2">Optimization</h3>
            <p className="text-foreground/70">
              We continuously monitor, analyze, and optimize to ensure sustainable results and ongoing improvement.
            </p>
          </Card>
        </div>
      </PageSection>
    </>
  );
};

export default About;