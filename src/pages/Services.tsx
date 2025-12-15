import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/layout/PageHero';
import PageSection from '@/components/layout/PageSection';
import { ArrowRight } from 'lucide-react'; 
import { Card } from '@/components/ui/card';
import AiServicesSection from '@/components/home/AiServicesSection';
import {
  CodeBlobIcon,
  UsersBlobIcon,
  BarChartBlobIcon,
  LightbulbBlobIcon,
  DatabaseBlobIcon,
  BrainBlobIcon,
  ChartBlobIcon,
  TargetBlobIcon,
  ThumbsUpBlobIcon,
  StarBlobIcon
} from '@/components/ui/BlobIcons';
import appDevImage from '@/assets/service-application-development.jpg';
import consultingImage from '@/assets/service-consulting.jpg';
import advisoryImage from '@/assets/service-advisory.jpg';

const Services = () => {
    const services = [
        {
            title: "Application Development",
            description: "Custom software applications designed to meet your unique business requirements and drive digital transformation.",
            icon: <CodeBlobIcon size="md" />,
            link: "/services/application-development",
            image: appDevImage,
            benefits: [
                "Tailored solutions that perfectly match your needs",
                "Scalable architecture to grow with your business",
                "User-centric design for exceptional experiences",
                "Continuous support and maintenance for users"
            ]
        },
        {
            title: "Consulting Services",
            description: "Strategic guidance from industry experts to optimize your technology investments and improve business processes.",
            icon: <UsersBlobIcon size="md" />,
            link: "/services/consulting-services",
            image: consultingImage,
            benefits: [
                "Expert analysis of your current technology landscape",
                "Strategic roadmaps for digital transformation",
                "Technology selection and implementation guidance",
                "Process optimization recommendations"
            ]
        },
        {
            title: "Advisory Services",
            description: "Insights and recommendations to help you navigate digital trends and make informed business decisions.",
            icon: <BarChartBlobIcon size="md" />,
            link: "/services/advisory-services",
            image: advisoryImage,
            benefits: [
                "Industry trend analysis and insights",
                "Competitive landscape evaluation",
                "Risk assessment and mitigation strategies",
                "Innovation opportunity identification"
            ]
        }
    ];

    const caseStudies = [
        {
            image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=800&auto=format&fit=crop",
            title: "Enterprise Digital Transformation",
            description: "Helping a Fortune 500 company modernize their legacy systems and adopt cloud technologies",
            category: "Application Development"
        },
        {
            image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=800&auto=format&fit=crop",
            title: "Data-Driven Decision Making",
            description: "Implementing analytics solutions to help businesses leverage their data for strategic insights",
            category: "Advisory Services"
        },
        {
            image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=800&auto=format&fit=crop",
            title: "Process Optimization",
            description: "Streamlining operations for a healthcare provider to improve patient care and reduce costs",
            category: "Consulting Services"
        }
    ];

    const aiCaseStudies = [
        {
            image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800&auto=format&fit=crop",
            title: "Predictive Maintenance System",
            description: "Implementing machine learning models to predict equipment failures before they occur, reducing downtime by 67%",
            category: "Machine Learning"
        },
        {
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
            title: "Real-time Data Analytics Platform",
            description: "Building a scalable analytics platform that processes over 10TB of data daily for actionable business insights",
            category: "Data Engineering"
        },
        {
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop",
            title: "Intelligent Customer Service Bot",
            description: "Developing an AI-powered chatbot that reduced customer service response times by 85% while maintaining high satisfaction",
            category: "Artificial Intelligence"
        }
    ];

    return (
        <>
            <PageHero 
                title="Our Services" 
                subtitle="Comprehensive solutions to drive your digital success"
            />

            {/* Services Philosophy */}
            <PageSection>
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Our Service Philosophy</h2>
                        <p className="text-foreground/70 mb-4">
                            At Bean InfoSystems, we believe that technology should serve as an enabler for 
                            business success. Our services are designed with this philosophy at the core, 
                            focusing on delivering solutions that drive tangible business outcomes.
                        </p>
                        <p className="text-foreground/70 mb-4">
                            We take a collaborative approach, working closely with our clients to understand 
                            their unique challenges and objectives. This enables us to develop tailored 
                            solutions that address specific needs rather than offering one-size-fits-all options.
                        </p>
                        <p className="text-foreground/70">
                            Whether you're looking to develop a custom application, optimize your technology 
                            investments, or gain strategic insights, our team of experts is ready to help you 
                            navigate the complex digital landscape and achieve your goals.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4 pt-4">
                            <Card className="p-4 flex items-center glass-card">
                                <div className="mr-3">
                                    <LightbulbBlobIcon size="sm" />
                                </div>
                                <span className="font-medium">Innovative</span>
                            </Card>
                            <Card className="p-4 flex items-center glass-card translate-y-6">
                                <div className="mr-3">
                                    <LightbulbBlobIcon size="sm" />
                                </div>
                                <span className="font-medium">Strategic</span>
                            </Card>
                        </div>
                        <div className="space-y-4 pt-4">
                            <Card className="p-4 flex items-center glass-card">
                                <div className="mr-3">
                                    <LightbulbBlobIcon size="sm" />
                                </div>
                                <span className="font-medium">Collaborative</span>
                            </Card>
                            <Card className="p-4 flex items-center glass-card translate-y-6">
                                <div className="mr-3">
                                    <LightbulbBlobIcon size="sm" />
                                </div>
                                <span className="font-medium">Results-Driven</span>
                            </Card>
                        </div>
                    </div>
                </div>
            </PageSection>

            {/* Services Cards */}
            <PageSection dark title="Our Core Services" subtitle="Explore how we can help your business thrive">
                <div className="space-y-12">
                    {services.map((service, index) => (
                        <Card key={index} className={`p-8 ${index % 2 === 0 ? '' : ''}`}>
                            <div className="grid md:grid-cols-2 gap-8 ">
                                <div className={`${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                                    <div className="mb-4 flex justify-start">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 flex justify-start">{service.title}</h3>
                                    <p className="text-foreground/70 mb-6 text-justify">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-2 mb-6">
                                        {service.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-center justify-start">
                                                <div className="bg-bean/20 p-1 rounded text-bean mr-3 mt-1">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </div>
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link 
                                        to={service.link} 
                                        className="btn-primary inline-flex flex items-center"
                                    >
                                        Learn More
                                        <ArrowRight size={18} className="ml-2" />
                                    </Link>
                                </div>
                                <div className={`${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                                    <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                                        <img 
                                            src={service.image} 
                                            alt={service.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </PageSection>

            {/* AI & Data Services Section */}
            <PageSection title="AI & Data Services" subtitle="Unlock the potential of your data with our advanced AI solutions">
                <div className="mb-8">
                    <p className="text-foreground/70 max-w-4xl mx-auto text-center mb-12">
                        In today's data-driven world, organizations that effectively harness the power of AI and data analytics gain 
                        significant competitive advantages. Our specialized team of data scientists, engineers, and AI specialists 
                        delivers solutions that transform raw data into strategic assets.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        <Card className="p-6 border-l-4 border-l-bean">
                            <div className="mb-4 flex justify-center">
                                <DatabaseBlobIcon size="md" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Data Engineering</h3>
                            <p className="text-foreground/70">
                                Our data engineering team builds robust, scalable data pipelines and infrastructure to ensure your data is accessible, reliable, and ready for analysis.
                            </p>
                        </Card>
                        
                        <Card className="p-6 border-l-4 border-l-bean">
                            <div className="mb-4 flex justify-center">
                                <BrainBlobIcon size="md" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Machine Learning & AI</h3>
                            <p className="text-foreground/70">
                                We develop and deploy machine learning models and AI solutions that automate processes, generate insights, and create new business opportunities.
                            </p>
                        </Card>
                        
                        <Card className="p-6 border-l-4 border-l-bean">
                            <div className="mb-4 flex justify-center">
                                <ChartBlobIcon size="md" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Data Analytics & Visualization</h3>
                            <p className="text-foreground/70">
                                Transform complex datasets into clear, actionable insights through advanced analytics and intuitive visual representations.
                            </p>
                        </Card>
                    </div>
                </div>
            </PageSection> 

            {/* --- VALUE PROPOSITION SECTION --- */}
            <PageSection> 
                <div className="container mx-auto text-center max-w-5xl">
                    
                    {/* Main Heading and Sub-text */}
                    <h2 className="text-3xl md:text-3xl font-bold mb-4 text-gray-900">
                    <span className="text-[#3F321F]">Bean Infosystems is a preferred partner for</span>
                    <br className="hidden sm:inline" />
                    <span className="text-[#3F321F]">Fortune 100 companies</span>
                    </h2>
                    
                    <p className="text-foreground/70">
                    Engineered for the complex demands of global enterprises: merging cutting-edge AI with governance precision, operational resilience, and uncompromising accountability.
                    </p>
                    
                    {/* Three Value Pillars Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
                    
                    {/* 1. Obsessive Customer Focus */}
                    <div className="p-4">
                        <div className="flex justify-center mb-4">
                          <TargetBlobIcon size="lg" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Obsessive customer focus</h3>
                        <p className="text-gray-600 text-sm">
                        Intuitively designed to align effortlessly within your existing workflows & environment
                        </p>
                    </div>

                    {/* 2. Proven Value - Delivery */}
                    <div className="p-4">
                        <div className="flex justify-center mb-4">
                          <ThumbsUpBlobIcon size="lg" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Proven value- delivery</h3>
                        <p className="text-gray-600 text-sm">
                        Proven track record of delivering Mn$ value to our enterprise customers.
                        </p>
                    </div>

                    {/* 3. Industry Leading Expertise */}
                    <div className="p-4">
                        <div className="flex justify-center mb-4">
                          <StarBlobIcon size="lg" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Industry leading expertise</h3>
                        <p className="text-gray-600 text-sm">
                        Extensive experience with AI/ML technologies, long before AI became mainstream.
                        </p>
                    </div>
                    </div>

                </div>
            </PageSection>
        </>
    );
};

export default Services;