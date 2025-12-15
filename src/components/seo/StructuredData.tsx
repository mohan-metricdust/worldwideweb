import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://beaninfosystems.com';
const LOGO_URL = `${BASE_URL}/lovable-uploads/89a4aefd-919e-431d-ae0d-d8592da0dca3.png`;

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Bean InfoSystems",
  "alternateName": "Bean Infosystems",
  "url": BASE_URL,
  "logo": LOGO_URL,
  "description": "Bean InfoSystems is a professional software development company specializing in AI solutions, application development, consulting services, and digital advisory for clients worldwide.",
  "foundingDate": "2016",
  "founders": [{
    "@type": "Organization",
    "name": "Bean InfoSystems"
  }],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "contact@beaninfosystems.com"
  },
  "sameAs": [
    "https://www.linkedin.com/company/bean-infosystems",
    "https://twitter.com/BeanInfoSystems"
  ]
};

// SoftwareApplication Schema
const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Bean InfoSystems",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "AI-enabled technology solutions, expert staff augmentation, and full life-cycle support for organizations across the public and private sectors.",
  "featureList": [
    "Software Development",
    "AI Solutions",
    "Client Advisory",
    "Application Development",
    "Business Intelligence",
    "Data Analytics",
    "Consulting Services"
  ],
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Contact us for custom pricing based on your project requirements"
  },
  "provider": {
    "@type": "Organization",
    "name": "Bean InfoSystems",
    "url": BASE_URL
  }
};

// WebSite Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Bean InfoSystems",
  "url": BASE_URL,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${BASE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

interface StructuredDataProps {
  pageType?: 'home' | 'service' | 'about' | 'contact' | 'default';
  additionalSchema?: Record<string, unknown>;
}

const StructuredData: React.FC<StructuredDataProps> = ({ 
  pageType = 'default',
  additionalSchema 
}) => {
  // Use Record<string, unknown> for flexible schema types
  const schemas: Record<string, unknown>[] = [organizationSchema];

  // Add website schema for home page
  if (pageType === 'home') {
    schemas.push(websiteSchema);
    schemas.push(softwareApplicationSchema);
  }

  // Add additional custom schema if provided
  if (additionalSchema) {
    schemas.push(additionalSchema);
  }

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Helmet>
  );
};

export default StructuredData;
