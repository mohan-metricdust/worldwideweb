import React from 'react';
import PageHero from '@/components/layout/PageHero';
import PageSection from '@/components/layout/PageSection';
import { Card } from '@/components/ui/card';
import { 
  TrendingUp, 
  RefreshCw, 
  Users, 
  Target,
  BookOpen,
  Award,
  Zap,
  CheckCircle
} from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import { Link } from 'react-router-dom';
import CtaSection from '@/components/home/CtaSection';

const Training = () => {
  const trainingServices = [
    {
      title: "Upskilling",
      description: "Looking to fully build your in-house capabilities? We can provide the training and development you need to enhance your team's existing skills and take them to the next level.",
      icon: <TrendingUp size={32} />,
      features: [
        "Advanced technical skills development",
        "Industry-specific training programs",
        "Certification preparation",
        "Hands-on practical experience"
      ]
    },
    {
      title: "Reskilling",
      description: "Have the talent but lack the crucial skills they need to get your projects moving? We can help your team acquire new skills and transition into different roles effectively.",
      icon: <RefreshCw size={32} />,
      features: [
        "Career transition support",
        "New technology adoption",
        "Cross-functional training",
        "Role-specific skill development"
      ]
    },
    {
      title: "Human Skills Development",
      description: "We can facilitate the development of advanced cognitive capabilities, leadership skills, and soft skills that are essential for success in the modern workplace.",
      icon: <Users size={32} />,
      features: [
        "Leadership development programs",
        "Communication skills training",
        "Problem-solving methodologies",
        "Team collaboration techniques"
      ]
    }
  ];

  const benefits = [
    {
      title: "Customized Training Programs",
      description: "Tailored training solutions designed specifically for your organization's needs and objectives.",
      icon: <Target size={24} />
    },
    {
      title: "Expert Instructors",
      description: "Learn from industry experts with years of practical experience in their respective fields.",
      icon: <Award size={24} />
    },
    {
      title: "Flexible Learning Options",
      description: "Choose from in-person, online, or hybrid learning formats that fit your schedule and preferences.",
      icon: <BookOpen size={24} />
    },
    {
      title: "Certification Support",
      description: "Get assistance with industry certifications and professional development credentials.",
      icon: <CheckCircle size={24} />
    }
  ];

  return (
    <>
      <PageHero 
        title="Training" 
        subtitle="Looking to fully build your in-house capabilities? We can provide the training and development you need."
      />

      {/* Main Content Section */}
      <PageSection>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Upskilling & Reskilling Solutions For Individuals & Enterprises
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
          Bean Infosystems bridges the skills and opportunity gap by providing in-demand Technology skills training and ensures that everyone has the opportunity to succeed in the future of work, and beyond.
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Build The Expertise Your Business Needs
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether it's helping to foster and build a data-driven culture, upskill internal teams, or build talent pipelines through our Customized training. We can provide specialized training in those skills to help you reskill your team quickly and efficiently and get your projects up and running.
          </p>
        </div>

        {/* Three Column Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {trainingServices.map((service, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-[#D4A76A]/30">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-[#000000]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-[#000000]">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
              
              <div className="space-y-3">
  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>

  {service.features.map((feature, featureIndex) => (
    <div key={featureIndex} className="flex items-center justify-center">
      <CheckCircle
        size={16}
        className="text-[#D4A76A] mr-3 flex-shrink-0"
      />
      <span className="text-gray-700 text-sm">{feature}</span>
    </div>
  ))}
</div>

            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        
      </PageSection>

      {/* CTA Section */}
      <CtaSection />
    </>
  );
};

export default Training;
