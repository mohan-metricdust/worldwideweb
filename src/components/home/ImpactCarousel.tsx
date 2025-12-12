import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { CheckCircle } from 'lucide-react';
import { FaLaptopCode, FaHospital, FaUniversity, FaShoppingCart } from 'react-icons/fa';

interface ImpactCardProps {
  businessType: string;
  challenge: string;
  solution: string;
  impact: string;
  quote?: string;
  author?: string;
  authorRole?: string;
  authorImage?: string;
  icon?: React.ReactNode;
  cardImage?: string;
}

const ImpactCard: React.FC<ImpactCardProps> = ({
  businessType,
  challenge,
  solution,
  impact,
  quote,
  author,
  authorRole,
  authorImage,
  icon,
  cardImage
}) => {
  return (
    <Card className="bg-gray-50 border border-gray-200 shadow-lg h-full">
      <CardHeader>
        <div className="flex flex-col items-center mb-2">
          <div className="text-lg font-semibold text-[#3F321F] text-center">{businessType}</div>
        </div>
        {cardImage && (
          <div className="mb-4 flex justify-center">
            <img 
              src={cardImage} 
              alt={businessType} 
              className="w-16 h-16 object-contain"
            />
          </div>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold mb-1 text-gray-900">Challenge:</h4>
          <p className="text-gray-700">{challenge}</p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-1 text-gray-900">Our Solution:</h4>
          <p className="text-gray-700">{solution}</p>
        </div>
        
        <div className="flex items-start gap-2">
          <div>
            <h4 className="font-semibold mb-1 text-gray-900">Impact:</h4>
            <p className="text-gray-700">{impact}</p>
          </div>
        </div>
        
        {quote && (
          <div>
            <Separator className="my-4" />
            <div className="italic text-gray-800 text-sm">"{quote}"</div>
            {author && (
              <div className="flex justify-center gap-3 mt-3">
                {authorImage && (
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img 
                      src={authorImage} 
                      alt={author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <div className="font-medium text-sm text-gray-900">{author}</div>
                  {authorRole && (
                    <div className="text-gray-600 text-xs">{authorRole}</div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const ImpactCarousel = () => {
  const impactCards: ImpactCardProps[] = [
    {
      businessType: "Tech Startup",
      challenge: "Needed skilled data analysts fast",
      solution: "Matched 3 certified analysts in 48 hours",
      impact: "Reduced backlog by 70% in 3 months",
      quote: "The quality of talent we received exceeded our expectations and transformed our data operations.",
      author: "Sarah Chen",
      authorRole: "CTO, InnovateTech",
      authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
      icon: <FaLaptopCode size={24} />,
      cardImage: "/lovable-uploads/e6bfc380-d042-46a5-abbf-0993500366b3.png"
    },
    {
      businessType: "Healthcare Network",
      challenge: "Required IT security specialists during expansion",
      solution: "Provided a team of 5 certified cybersecurity experts",
      impact: "Zero security incidents during critical system transition",
      quote: "Their specialists seamlessly integrated with our team during a challenging infrastructure upgrade.",
      author: "Dr. James Wilson",
      authorRole: "CISO, MediCare Systems",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      icon: <FaHospital size={24} />,
      cardImage: "/lovable-uploads/561530f6-c1e5-4626-9a39-ea86d4a6a30e.png"
    },
    {
      businessType: "Financial Services Firm",
      challenge: "Struggling to find qualified project managers",
      solution: "Connected them with 2 PMP-certified professionals with fintech experience",
      impact: "Completed digital transformation 2 months ahead of schedule",
      quote: "The project managers they provided had exactly the industry knowledge we needed.",
      author: "Michelle Rodriguez",
      authorRole: "COO, FinancePlus",
      authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
      icon: <FaUniversity size={24} />,
      cardImage: "/lovable-uploads/2600ff82-e479-49ac-a114-f080789f6597.png"
    },
    {
      businessType: "E-Commerce Platform",
      challenge: "Urgent need for UX designers during product redesign",
      solution: "Placed 4 senior UX specialists within one week",
      impact: "New design increased conversion rate by 32%",
      quote: "Their talent didn't fill positions – they directly contributed to our bottom line.",
      author: "Alex Thompson",
      authorRole: "Product Director, ShopEase",
      authorImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
      icon: <FaShoppingCart size={24} />
    }
  ];

  return (
    <div className="w-full py-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {impactCards.map((card, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="h-full">
                <ImpactCard {...card} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <div className="flex justify-center mt-6 gap-2">
          <CarouselPrevious className="static transform-none mx-1 hover:scale-110 transition-transform duration-300" />
          <CarouselNext className="static transform-none mx-1 hover:scale-110 transition-transform duration-300" />
        </div> */}
      </Carousel>
    </div>
  );
};

export default ImpactCarousel;
