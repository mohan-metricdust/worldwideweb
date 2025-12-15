
import React from 'react';

const ClientLogosSection: React.FC = () => {
  const logoRows = [
    // Row 1 - 5 logos
    [
      { name: 'Fidelity', logo: 'https://www.beaninfosys.com/img/fidelity-min.png' },
      { name: 'Benefit', logo: 'https://www.beaninfosys.com/img/benefit-min.png' },
      { name: 'Toyota', logo: 'https://www.beaninfosys.com/img/toyato.png' },
      { name: 'Santander', logo: 'https://www.beaninfosys.com/img/santander-min.png' },
      { name: 'Bristlecone', logo: 'https://www.beaninfosys.com/img/bristlecone-min.png' },
    ],
    // Row 2 - 5 logos
    [
      { name: 'Eliassen', logo: 'https://www.beaninfosys.com/img/eliassen-min.png' },
      { name: 'Lions', logo: 'https://www.beaninfosys.com/img/lions-min.png' },
      { name: 'Oooig', logo: 'https://www.beaninfosys.com/img/oooig-min.png' },
      { name: 'Apex', logo: 'https://www.beaninfosys.com/img/apex-min.png' },
      { name: 'Orcasio', logo: 'https://www.beaninfosys.com/img/orcasio-min.png' },
    ],
    // Row 3 - 5 logos
    [
      { name: 'Beccon', logo: 'https://www.beaninfosys.com/img/beccon-min.png' },
      { name: 'Turnery', logo: 'https://www.beaninfosys.com/img/turnery-min.png' },
      { name: 'SGT', logo: 'https://www.beaninfosys.com/img/sgt.png' },
      { name: 'Shipium', logo: 'https://www.beaninfosys.com/img/shipium.png' },
      { name: 'Metricdust', logo: 'https://www.beaninfosys.com/img/metricdust.png' },
    ],
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're proud to partner with innovative companies across industries
          </p>
        </div>
        
        <div className="logo-section">
          {logoRows.map((row, rowIndex) => (
            <div key={rowIndex} className="logo-strip">
              <div className="logo-track">
                {/* Duplicate the logos for seamless infinite loop */}
                {row.concat(row).map((client, index) => (
                  <img 
                    key={`${rowIndex}-${index}`}
                    src={client.logo} 
                    alt={client.name}
                    className="logo-img"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .logo-section {
          overflow: hidden;
          padding: 20px 0;
          background-color: #f9fafb;
        }

        .logo-strip {
          overflow: hidden;
          white-space: nowrap;
          margin-bottom: 20px;
        }

        .logo-strip:last-child {
          margin-bottom: 0;
        }

        .logo-track {
          display: inline-block;
          white-space: nowrap;
          animation: scroll-track 30s linear infinite;
        }

        .logo-track .logo-img {
          display: inline-block;
          padding: 0 40px;
          height: 100px;
          width: auto;
          vertical-align: middle;
          filter: none !important;
          opacity: 1 !important;
          transition: transform 0.3s ease;
        }

        .logo-track .logo-img:hover {
          transform: scale(1.1);
        }

        .logo-strip:hover .logo-track {
          animation-play-state: paused;
        }

        @keyframes scroll-track {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default ClientLogosSection;
