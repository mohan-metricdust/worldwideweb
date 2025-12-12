
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, UserRound, User, UserCheck, UserPlus } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Building from '@/components/ui/Building';
import MapPin from '@/components/ui/MapPin';
import PageSection from '@/components/layout/PageSection';

interface CareersSectionProps {
  invertColors?: boolean;
}

const CareersSection = ({ invertColors = false }: CareersSectionProps) => {
  const jobOpenings = [
    {
      title: "Senior Full-Stack Developer",
      location: "San Francisco, CA",
      type: "Full-time",
      department: "Engineering",
      id: "job-1",
      icon: <User className="text-black" size={20} />
    },
    {
      title: "UX/UI Designer",
      location: "Remote",
      type: "Full-time",
      department: "Design",
      id: "job-2",
      icon: <UserRound className="text-[#3F321F]" size={20} />
    },
    {
      title: "Product Manager",
      location: "New York, NY",
      type: "Full-time",
      department: "Product",
      id: "job-3",
      icon: <UserCheck className="text-[#3F321F]" size={20} />
    },
    {
      title: "DevOps Engineer",
      location: "Austin, TX",
      type: "Full-time",
      department: "Operations",
      id: "job-4",
      icon: <UserPlus className="text-[#3F321F]" size={20} />
    }
  ];

  return (
    <PageSection 
      title="Career Opportunities" 
      subtitle="Join our team and help shape the future of technology"
      invertColors={invertColors}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {jobOpenings.map((job) => (
          <Card
            key={job.id}
            className="p-6 bg-gray-200 backdrop-blur-sm border border-gray-300 text-gray-900 group hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="p-2 rounded-lg bg-gray-300 group-hover:scale-110 transition-transform duration-300">
                  {job.icon}
                </div>
                <span className="text-sm font-medium text-gray-900 px-3 py-1 rounded-full bg-gray-300">
                  {job.type}
                </span>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 text-[#3F321F]">{job.title}</h3>
                <div className="space-y-2">
                  <div className="flex justify-center text-sm text-gray-700">
                    <Building className="w-4 h-4 mr-2 text-black" />
                    {job.department}
                  </div>
                  <div className="flex justify-center text-sm text-gray-700">
                    <MapPin className="w-4 h-4 mr-2 text-black" />
                    {job.location}
                  </div>
                </div>
              </div>

              <Link 
                to={`/careers/${job.id}`} 
                className="inline-flex items-center text-sm font-medium text-[#3F321F] opacity-50 group-hover:opacity-100 transition-all duration-300"
              >
                View Position
                <ArrowRight size={16} color='black' className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="text-center">
        <Link 
          to="/careers" 
          className="inline-flex items-center justify-center px-6 py-3 bg-[#3F321F] text-white font-medium rounded-md hover:bg-[#2D2417] transition-colors hover:scale-105 transition-transform duration-300"
        >
          View All Positions
          <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </PageSection>
  );
};

export default CareersSection;
