
import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageSection from '@/components/layout/PageSection';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import serviceAdvisoryConsulting from '@/assets/service-advisory-consulting.jpg';
import {
  UsersBlobIcon,
  TargetBlobIcon,
  LightbulbBlobIcon,
  ShieldBlobIcon,
  ArrowRightBlobIcon,
  TrendingUpBlobIcon,
  AwardBlobIcon,
  CheckCircleBlobIcon
} from '@/components/ui/BlobIcons';

const AdvisoryConsulting = () => {
  const services = [
    {
      title: "Strategic Technology Planning",
      description: "Develop comprehensive technology strategies aligned with your business objectives and long-term vision.",
      icon: <TargetBlobIcon size="sm" />
    },
    {
      title: "Digital Transformation",
      description: "Guide your organization through successful digital transformation initiatives with proven methodologies.",
      icon: <TrendingUpBlobIcon size="sm" />
    },
    {
      title: "Innovation Consulting",
      description: "Identify emerging technologies and innovation opportunities to maintain your competitive advantage.",
      icon: <LightbulbBlobIcon size="sm" />
    },
    {
      title: "Risk Assessment",
      description: "Comprehensive technology risk assessments to protect your business from potential threats and vulnerabilities.",
      icon: <ShieldBlobIcon size="sm" />
    },
    {
      title: "Team Development",
      description: "Build and develop high-performing technology teams with the right skills and capabilities.",
      icon: <UsersBlobIcon size="sm" />
    },
    {
      title: "Best Practices Implementation",
      description: "Implement industry best practices and standards to optimize your technology operations.",
      icon: <AwardBlobIcon size="sm" />
    }
  ];

  const advantages = [
    {
      title: "Proven Track Record",
      description: "Years of experience helping businesses across industries achieve their technology and strategic goals.",
      icon: <CheckCircleBlobIcon size="sm" />
    },
    {
      title: "Industry Expertise",
      description: "Deep knowledge across multiple industries and technology domains to provide relevant, actionable advice.",
      icon: <AwardBlobIcon size="sm" />
    },
    {
      title: "Collaborative Approach",
      description: "We work as an extension of your team, ensuring knowledge transfer and sustainable long-term success.",
      icon: <UsersBlobIcon size="sm" />
    }
  ];

  return (
    <>
      <PageHero 
        title="Advisory & Consulting Services" 
        subtitle="Strategic guidance to optimize your technology investments and business processes"
      />

      {/* Overview Section */}
      <PageSection>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Strategic Guidance for Technology Excellence</h2>
            <p className="text-foreground/70 mb-4">
              In today's rapidly evolving technology landscape, making the right strategic decisions can be the 
              difference between success and stagnation. Our advisory and consulting services provide you with 
              the expertise and insights needed to navigate complex technology challenges.
            </p>
            <p className="text-foreground/70 mb-4">
              Our seasoned consultants bring decades of combined experience across industries, helping organizations 
              optimize their technology investments, streamline operations, and achieve sustainable growth through 
              strategic technology initiatives.
            </p>
            <p className="text-foreground/70">
              Whether you're planning a digital transformation, evaluating new technologies, or optimizing existing 
              systems, we provide actionable recommendations tailored to your unique business context.
            </p>
          </div>
          <div className="relative">
            <img 
              src={serviceAdvisoryConsulting} 
              alt="Advisory & Consulting - Business professionals in strategic planning meeting" 
              className="w-full h-auto rounded-xl shadow-lg object-cover aspect-video"
            />
          </div>
        </div>
      </PageSection>

      {/* Services */}
      <PageSection dark title="Our Consulting Services" subtitle="Comprehensive advisory solutions for your business">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:border-bean/30 transition-all duration-300">
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-foreground/70">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </PageSection>

      {/* Why Choose Us */}
      <PageSection title="Why Choose Our Advisory Services" subtitle="The Bean Infosystem advantage in consulting">
        <div className="grid md:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <Card key={index} className="p-6">
              <div className="mb-4">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
              <p className="text-foreground/70">
                {advantage.description}
              </p>
            </Card>
          ))}
        </div>
      </PageSection>

      {/* CTA Section */}
      <PageSection dark>
        <div className="bg-gradient-to-br from-bean/10 to-transparent rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Strategic Technology Guidance?</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
            Connect with our expert consultants to explore how we can help optimize your technology strategy 
            and drive business growth through strategic initiatives.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Schedule a Consultation
            <ArrowRightBlobIcon size="sm" />
          </Link>
        </div>
      </PageSection>
    </>
  );
};

export default AdvisoryConsulting;
