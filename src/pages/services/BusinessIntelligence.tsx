
import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageSection from '@/components/layout/PageSection';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import serviceBusinessIntelligence from '@/assets/service-business-intelligence.jpg';
import {
  BarChartBlobIcon,
  PieChartBlobIcon,
  TrendingUpBlobIcon,
  DatabaseBlobIcon,
  EyeBlobIcon,
  ArrowRightBlobIcon,
  TargetBlobIcon,
  ZapBlobIcon,
  ShieldBlobIcon
} from '@/components/ui/BlobIcons';

const BusinessIntelligence = () => {
  const solutions = [
    {
      title: "Data Visualization",
      description: "Transform complex data into clear, interactive dashboards and reports that drive informed decision-making.",
      icon: <BarChartBlobIcon size="sm" />
    },
    {
      title: "Advanced Analytics",
      description: "Leverage statistical analysis and machine learning to uncover hidden patterns and insights in your data.",
      icon: <TrendingUpBlobIcon size="sm" />
    },
    {
      title: "Data Warehousing",
      description: "Design and implement robust data warehouse solutions for centralized data storage and management.",
      icon: <DatabaseBlobIcon size="sm" />
    },
    {
      title: "Real-time Reporting",
      description: "Access up-to-the-minute business metrics and KPIs through dynamic, real-time reporting systems.",
      icon: <EyeBlobIcon size="sm" />
    },
    {
      title: "Performance Metrics",
      description: "Develop comprehensive KPI frameworks to measure and track business performance across all areas.",
      icon: <TargetBlobIcon size="sm" />
    },
    {
      title: "Predictive Insights",
      description: "Forecast future trends and outcomes using advanced predictive modeling and analytics techniques.",
      icon: <PieChartBlobIcon size="sm" />
    }
  ];

  const benefits = [
    {
      title: "Data-Driven Decisions",
      description: "Make confident business decisions backed by comprehensive data analysis and actionable insights.",
      icon: <TargetBlobIcon size="sm" />
    },
    {
      title: "Operational Efficiency",
      description: "Identify inefficiencies and optimization opportunities through detailed operational analytics.",
      icon: <ZapBlobIcon size="sm" />
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead of market trends and competitors with advanced business intelligence capabilities.",
      icon: <ShieldBlobIcon size="sm" />
    }
  ];

  return (
    <>
      <PageHero 
        title="Business Intelligence Solutions" 
        subtitle="Transform your data into actionable insights for smarter business decisions"
      />

      {/* Overview Section */}
      <PageSection>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Unlock the Power of Your Data</h2>
            <p className="text-foreground/70 mb-4">
              In today's data-driven business environment, the ability to quickly extract meaningful insights from 
              your data can be a game-changer. Our business intelligence solutions help you transform raw data 
              into powerful insights that drive strategic decision-making.
            </p>
            <p className="text-foreground/70 mb-4">
              We specialize in creating comprehensive BI ecosystems that integrate seamlessly with your existing 
              systems, providing real-time visibility into your business operations, customer behavior, and 
              market trends.
            </p>
            <p className="text-foreground/70">
              From interactive dashboards to advanced analytics, our solutions empower your team to make 
              data-driven decisions with confidence and speed.
            </p>
          </div>
          <div className="relative">
            <img 
              src={serviceBusinessIntelligence} 
              alt="Business Intelligence - Data dashboards and analytics visualizations" 
              className="w-full h-auto rounded-xl shadow-lg object-cover aspect-video"
            />
          </div>
        </div>
      </PageSection>

      {/* Solutions */}
      <PageSection dark title="Our BI Solutions" subtitle="Comprehensive business intelligence capabilities">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <Card key={index} className="p-6 hover:border-bean/30 transition-all duration-300">
              <div className="mb-4">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-foreground/70">
                {solution.description}
              </p>
            </Card>
          ))}
        </div>
      </PageSection>

      {/* Benefits */}
      <PageSection title="Benefits of Our BI Solutions" subtitle="Why businesses choose our intelligence platforms">
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6">
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-foreground/70">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </PageSection>

      {/* CTA Section */}
      <PageSection dark>
        <div className="bg-gradient-to-br from-bean/10 to-transparent rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Harness Your Data's Potential?</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
            Let's discuss how our business intelligence solutions can transform your data into actionable insights 
            that drive growth and competitive advantage.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Explore BI Solutions
            <ArrowRightBlobIcon size="sm" />
          </Link>
        </div>
      </PageSection>
    </>
  );
};

export default BusinessIntelligence;
