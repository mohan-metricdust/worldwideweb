
import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageSection from '@/components/layout/PageSection';
import { Link } from 'react-router-dom';
import { Database, TrendingUp, BarChart3, Search, Cpu, ArrowRight, Zap, Shield, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';

const DataAnalytics = () => {
  const services = [
    {
      title: "Data Mining & Discovery",
      description: "Extract valuable patterns and insights from large datasets using advanced mining techniques and algorithms.",
      icon: <Search size={36} />
    },
    {
      title: "Statistical Analysis",
      description: "Apply rigorous statistical methods to understand data relationships and validate business hypotheses.",
      icon: <BarChart3 size={36} />
    },
    {
      title: "Machine Learning Analytics",
      description: "Leverage ML algorithms to build predictive models and automate complex analytical processes.",
      icon: <Cpu size={36} />
    },
    {
      title: "Data Processing & ETL",
      description: "Design efficient data pipelines for extraction, transformation, and loading of data from multiple sources.",
      icon: <Database size={36} />
    },
    {
      title: "Performance Analytics",
      description: "Monitor and analyze system performance, user behavior, and operational metrics for optimization.",
      icon: <TrendingUp size={36} />
    },
    {
      title: "Custom Analytics Solutions",
      description: "Develop tailored analytics solutions that address your specific business challenges and requirements.",
      icon: <Target size={36} />
    }
  ];

  const advantages = [
    {
      title: "Advanced Methodologies",
      description: "We employ cutting-edge analytical methods and tools to deliver the most accurate and actionable insights.",
      icon: <Zap size={32} />
    },
    {
      title: "Data Security & Privacy",
      description: "All analytics processes adhere to strict security standards and privacy regulations to protect your data.",
      icon: <Shield size={32} />
    },
    {
      title: "Scalable Solutions",
      description: "Our analytics infrastructure scales with your data volume and complexity as your business grows.",
      icon: <TrendingUp size={32} />
    }
  ];

  return (
    <>
      <PageHero 
        title="Data & Analytics Services" 
        subtitle="Comprehensive data analytics solutions to unlock insights and drive innovation"
      />

      {/* Overview Section */}
      <PageSection>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Advanced Analytics for Data-Driven Success</h2>
            <p className="text-foreground/70 mb-4">
              Data is the new oil, but raw data alone isn't valuable—it's the insights you extract that drive 
              business value. Our comprehensive data and analytics services help you unlock the full potential 
              of your data assets through advanced analytical techniques and technologies.
            </p>
            <p className="text-foreground/70 mb-4">
              From statistical analysis to machine learning, we provide end-to-end analytics solutions that 
              transform complex data into clear, actionable insights. Our team of data scientists and analysts 
              work with you to understand your business challenges and develop custom analytical approaches.
            </p>
            <p className="text-foreground/70">
              Whether you're looking to optimize operations, understand customer behavior, or predict market 
              trends, our analytics solutions provide the insights you need to make informed decisions.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-video bg-bean/5 rounded-xl p-8 flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute top-0 left-0 w-full h-full bg-card border border-border rounded-lg transform rotate-3 shadow-md"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-card border border-border rounded-lg transform -rotate-2 shadow-md"></div>
                <div className="relative w-full h-full bg-card border border-border rounded-lg shadow-md p-6">
                  <div className="text-bean mb-4">
                    <Database size={32} />
                  </div>
                  <div className="h-4 w-3/4 bg-bean/20 rounded mb-3"></div>
                  <div className="h-4 w-1/2 bg-bean/20 rounded mb-3"></div>
                  <div className="h-4 w-2/3 bg-bean/20 rounded mb-3"></div>
                  <div className="h-4 w-1/2 bg-bean/20 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Services */}
      <PageSection dark title="Our Analytics Services" subtitle="Comprehensive data analysis and insights generation">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:border-bean/30 transition-all duration-300">
              <div className="text-bean mb-4">
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

      {/* Advantages */}
      <PageSection title="Why Choose Our Data Analytics Services" subtitle="The Bean Infosystem analytics advantage">
        <div className="grid md:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <Card key={index} className="p-6">
              <div className="text-bean mb-4">
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
          <h2 className="text-3xl font-bold mb-4">Ready to Unlock Your Data's Value?</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
            Partner with our data analytics experts to transform your data into competitive advantages and 
            actionable insights that drive business growth.
          </p>
          <Link to="/contact" className="btn-primary inline-flex">
            Start Your Analytics Journey
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </PageSection>
    </>
  );
};

export default DataAnalytics;
