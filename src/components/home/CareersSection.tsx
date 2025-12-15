
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { ArrowRightBlobIcon, UserBlobIcon, UserRoundBlobIcon, UserCheckBlobIcon, UserPlusBlobIcon, BuildingBlobIcon, MapPinBlobIcon } from '@/components/ui/BlobIcons';
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
      icon: <UserBlobIcon size="sm" />
    },
    {
      title: "UX/UI Designer",
      location: "Remote",
      type: "Full-time",
      department: "Design",
      id: "job-2",
      icon: <UserRoundBlobIcon size="sm" />
    },
    {
      title: "Product Manager",
      location: "New York, NY",
      type: "Full-time",
      department: "Product",
      id: "job-3",
      icon: <UserCheckBlobIcon size="sm" />
    },
    {
      title: "DevOps Engineer",
      location: "Austin, TX",
      type: "Full-time",
      department: "Operations",
      id: "job-4",
      icon: <UserPlusBlobIcon size="sm" />
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
            className="p-6 bg-white backdrop-blur-sm border border-gray-300 text-gray-900 group hover:shadow-lg transition-all duration-300 hover:scale-105"
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
                  <div className="flex justify-center items-center text-sm text-gray-700">
                    <BuildingBlobIcon size="sm" className="mr-2" />
                    {job.department}
                  </div>
                  <div className="flex justify-center items-center text-sm text-gray-700">
                    <MapPinBlobIcon size="sm" className="mr-2" />
                    {job.location}
                  </div>
                </div>
              </div>

              <Link 
                to={`/careers`} 
                className="inline-flex items-center text-sm font-medium text-[#3F321F] border border-[#3F321F] px-4 py-2 rounded-md hover:bg-[#3F321F] hover:text-white transition-all duration-300"
              >
                View Position
                <ArrowRightBlobIcon size="sm" className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
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
          <ArrowRightBlobIcon size="sm" className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </PageSection>
  );
};

export default CareersSection;
