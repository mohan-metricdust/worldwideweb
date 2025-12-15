import React from 'react';

interface BlobIconProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeMap = {
  sm: 'w-12 h-12',
  md: 'w-16 h-16',
  lg: 'w-20 h-20',
  xl: 'w-24 h-24'
};

// Single brown color for all blob icons (#3F321F = hsl(35, 35%, 18%))
const createBrownBlob = (id: string) => ({
  gradient1: `${id}BlobGradient`,
  gradient2: `${id}BlobGradient2`,
  shadow: `${id}Shadow`,
  coloredShadow: `${id}ColoredShadow`,
  glassmorphic: `${id}Glassmorphic`,
  backBlur: `${id}BackBlur`,
  color1: '#3F321F',
  color2: '#3F321F',
  shadowColor: 'rgba(63, 50, 31, 0.3)'
});

// Keep legacy function names pointing to brown blob for compatibility
const createPurpleBlob = createBrownBlob;
const createTealBlob = createBrownBlob;
const createOrangeBlob = createBrownBlob;
const createBlueBlob = createBrownBlob;
const createRedBlob = createBrownBlob;
const createGreenBlob = createBrownBlob;
const createGoldBlob = createBrownBlob;

interface BlobSVGProps {
  config: ReturnType<typeof createPurpleBlob>;
  iconPath: React.ReactNode;
  size: string;
  className?: string;
}

const BlobSVG = ({ config, iconPath, size, className }: BlobSVGProps) => (
  <div className={`drop-shadow-xl ${className || ''}`}>
    <svg viewBox="0 0 80 80" className={size} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id={config.gradient1} cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.6)" />
          <stop offset="50%" stopColor="rgba(255, 255, 255, 0.4)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0.2)" />
        </radialGradient>
        <radialGradient id={config.gradient2} cx="70%" cy="70%" r="60%">
          <stop offset="0%" stopColor={config.color1} />
          <stop offset="100%" stopColor={config.color2} />
        </radialGradient>
        <filter id={config.shadow} x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="rgba(0, 0, 0, 0.1)" />
        </filter>
        <filter id={config.coloredShadow} x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor={config.shadowColor} />
        </filter>
        <filter id={config.glassmorphic}>
          <feGaussianBlur stdDeviation="1" />
        </filter>
        <filter id={config.backBlur}>
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>
      <path d="M25 45 C25 30, 35 20, 50 22 C65 24, 75 35, 73 50 C71 65, 60 75, 45 73 C30 71, 25 60, 25 45 Z" fill={`url(#${config.gradient2})`} opacity="0.7" filter={`url(#${config.backBlur})`} />
      <path d="M15 35 C15 20, 25 10, 40 12 C55 14, 70 25, 68 40 C66 55, 55 68, 40 66 C25 64, 15 50, 15 35 Z" fill={`url(#${config.gradient1})`} stroke="rgba(255, 255, 255, 0.6)" strokeWidth="2" filter={`url(#${config.shadow}) url(#${config.glassmorphic}) url(#${config.coloredShadow})`} />
      {iconPath}
    </svg>
  </div>
);

// Brain Icon (AI, ML)
export const BrainBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createPurpleBlob('brain')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 24) scale(1.2)">
        <path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4z" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="M12 11v2M8 7H6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h2M16 7h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2M9 22v-6M15 22v-6M12 13v9" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <circle cx="12" cy="5" r="1.5" fill="rgba(255, 255, 255, 0.95)" />
      </g>
    }
  />
);

// Users Icon (Team, Consulting)
export const UsersBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createTealBlob('users')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <circle cx="9" cy="5" r="3" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="M3 19v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <circle cx="17" cy="7" r="2.5" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="M21 19v-1.5a3 3 0 0 0-3-3h-1" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
      </g>
    }
  />
);

// Chart Icon (BI, Analytics)
export const ChartBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createOrangeBlob('chart')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <path d="M3 3v18h18" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 16l4-4 4 4 5-6" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    }
  />
);

// Code Icon (Development)
export const CodeBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createBlueBlob('code')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <polyline points="16 18 22 12 16 6" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="8 6 2 12 8 18" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    }
  />
);

// Monitor Icon (Web Apps)
export const MonitorBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createBlueBlob('monitor')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <line x1="8" y1="21" x2="16" y2="21" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="17" x2="12" y2="21" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    }
  />
);

// Smartphone Icon (Mobile Apps)
export const SmartphoneBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createBlueBlob('smartphone')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(28, 24) scale(1.2)">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <line x1="12" y1="18" x2="12.01" y2="18" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="2" strokeLinecap="round" />
      </g>
    }
  />
);

// Laptop Icon (Desktop Apps)
export const LaptopBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createBlueBlob('laptop')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <rect x="3" y="4" width="18" height="12" rx="2" ry="2" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <line x1="2" y1="20" x2="22" y2="20" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    }
  />
);

// Layers Icon (Enterprise)
export const LayersBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createBlueBlob('layers')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <polygon points="12 2 2 7 12 12 22 7 12 2" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="2 17 12 22 22 17" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="2 12 12 17 22 12" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    }
  />
);

// Database Icon
export const DatabaseBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createBlueBlob('database')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 24) scale(1.2)">
        <ellipse cx="12" cy="5" rx="9" ry="3" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
      </g>
    }
  />
);

// Shield Icon
export const ShieldBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createGreenBlob('shield')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 24) scale(1.2)">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    }
  />
);

// Globe Icon
export const GlobeBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createTealBlob('globe')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <circle cx="12" cy="12" r="10" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <line x1="2" y1="12" x2="22" y2="12" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
      </g>
    }
  />
);

// Lightbulb Icon
export const LightbulbBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createGoldBlob('lightbulb')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 24) scale(1.2)">
        <path d="M9 18h6M10 22h4M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    }
  />
);

// Target Icon
export const TargetBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createGreenBlob('target')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <circle cx="12" cy="12" r="10" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="6" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="2" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
      </g>
    }
  />
);

// Heart Icon
export const HeartBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createRedBlob('heart')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    }
  />
);

// Zap Icon
export const ZapBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createGoldBlob('zap')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(28, 24) scale(1.2)">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    }
  />
);

// Award Icon
export const AwardBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createGoldBlob('award')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 24) scale(1.2)">
        <circle cx="12" cy="8" r="7" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    }
  />
);

// TrendingUp Icon
export const TrendingUpBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createGreenBlob('trendingUp')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 28) scale(1.2)">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="17 6 23 6 23 12" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    }
  />
);

// Bot Icon
export const BotBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createPurpleBlob('bot')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <rect x="3" y="11" width="18" height="10" rx="2" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <circle cx="12" cy="5" r="2" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="M12 7v4" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <line x1="8" y1="16" x2="8" y2="16" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="16" x2="16" y2="16" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="2" strokeLinecap="round" />
      </g>
    }
  />
);

// Cog/Settings Icon
export const CogBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createPurpleBlob('cog')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.1)">
        <circle cx="12" cy="12" r="3" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.2" />
      </g>
    }
  />
);

// BarChart Icon
export const BarChartBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createOrangeBlob('barChart')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <line x1="12" y1="20" x2="12" y2="10" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="2" strokeLinecap="round" />
        <line x1="18" y1="20" x2="18" y2="4" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="2" strokeLinecap="round" />
        <line x1="6" y1="20" x2="6" y2="14" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="2" strokeLinecap="round" />
      </g>
    }
  />
);

// PieChart Icon
export const PieChartBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createOrangeBlob('pieChart')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
      </g>
    }
  />
);

// Eye Icon
export const EyeBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createOrangeBlob('eye')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 28) scale(1.2)">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
      </g>
    }
  />
);

// SearchCheck Icon
export const SearchCheckBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createTealBlob('searchCheck')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <circle cx="11" cy="11" r="8" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 11l2 2 4-4" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    }
  />
);

// LineChart Icon
export const LineChartBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createTealBlob('lineChart')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <path d="M3 3v18h18" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 9l-5 5-4-4-6 6" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    }
  />
);

// Building Icon
export const BuildingBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createBlueBlob('building')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 24) scale(1.2)">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <line x1="9" y1="22" x2="9" y2="18" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <line x1="15" y1="22" x2="15" y2="18" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <line x1="9" y1="6" x2="9" y2="6.01" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="2" strokeLinecap="round" />
        <line x1="15" y1="6" x2="15" y2="6.01" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="2" strokeLinecap="round" />
        <line x1="9" y1="10" x2="9" y2="10.01" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="2" strokeLinecap="round" />
        <line x1="15" y1="10" x2="15" y2="10.01" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="2" strokeLinecap="round" />
        <line x1="9" y1="14" x2="9" y2="14.01" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="2" strokeLinecap="round" />
        <line x1="15" y1="14" x2="15" y2="14.01" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="2" strokeLinecap="round" />
      </g>
    }
  />
);

// Rocket Icon
export const RocketBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createPurpleBlob('rocket')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 24) scale(1.1)">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
      </g>
    }
  />
);

// BookOpen Icon
export const BookOpenBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createTealBlob('bookOpen')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 28) scale(1.2)">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
      </g>
    }
  />
);

// Calendar Icon
export const CalendarBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createBlueBlob('calendar')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <line x1="16" y1="2" x2="16" y2="6" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="8" y1="2" x2="8" y2="6" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="3" y1="10" x2="21" y2="10" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
      </g>
    }
  />
);

// Edit Icon
export const EditBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createPurpleBlob('edit')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
      </g>
    }
  />
);

// Map Icon
export const MapBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createTealBlob('map')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="8" y1="2" x2="8" y2="18" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <line x1="16" y1="6" x2="16" y2="22" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
      </g>
    }
  />
);

// Wrench Icon
export const WrenchBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createOrangeBlob('wrench')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    }
  />
);

// Share2 Icon
export const Share2BlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createTealBlob('share2')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <circle cx="18" cy="5" r="3" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <circle cx="6" cy="12" r="3" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <circle cx="18" cy="19" r="3" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
      </g>
    }
  />
);

// MapPin Icon
export const MapPinBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createRedBlob('mapPin')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 24) scale(1.2)">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <circle cx="12" cy="10" r="3" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
      </g>
    }
  />
);

// Phone Icon
export const PhoneBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createGreenBlob('phone')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
      </g>
    }
  />
);

// Mail Icon
export const MailBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createBlueBlob('mail')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 28) scale(1.2)">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <polyline points="22,6 12,13 2,6" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
      </g>
    }
  />
);

// Clock Icon
export const ClockBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createOrangeBlob('clock')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <circle cx="12" cy="12" r="10" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <polyline points="12 6 12 12 16 14" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    }
  />
);

// Send Icon
export const SendBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createBlueBlob('send')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <line x1="22" y1="2" x2="11" y2="13" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    }
  />
);

// RefreshCw Icon
export const RefreshCwBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createTealBlob('refreshCw')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <polyline points="23 4 23 10 17 10" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="1 20 1 14 7 14" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    }
  />
);

// CheckCircle Icon
export const CheckCircleBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createGreenBlob('checkCircle')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <polyline points="22 4 12 14.01 9 11.01" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    }
  />
);

// Briefcase Icon
export const BriefcaseBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createBlueBlob('briefcase')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
      </g>
    }
  />
);

// Star Icon
export const StarBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createGoldBlob('star')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    }
  />
);

// ThumbsUp Icon
export const ThumbsUpBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createGreenBlob('thumbsUp')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.1)">
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    }
  />
);

// Activity Icon
export const ActivityBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createPurpleBlob('activity')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 28) scale(1.2)">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    }
  />
);

// HeartHandshake Icon
export const HeartHandshakeBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createRedBlob('heartHandshake')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.1)">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="m18 15-2-2" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="m15 18-2-2" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    }
  />
);

// HandCoins Icon
export const HandCoinsBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createGoldBlob('handCoins')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.1)">
        <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="m2 16 6 6" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="9" r="2.9" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <circle cx="6" cy="5" r="3" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
      </g>
    }
  />
);

// Building2 Icon
export const Building2BlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createBlueBlob('building2')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 24) scale(1.2)">
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="M10 6h4" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="M10 10h4" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="M10 14h4" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="M10 18h4" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
      </g>
    }
  />
);

// ArrowRight Icon
export const ArrowRightBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createBrownBlob('arrowRight')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <line x1="5" y1="12" x2="19" y2="12" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" />
        <polyline points="12 5 19 12 12 19" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    }
  />
);

// User Icon
export const UserBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createBrownBlob('user')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <circle cx="12" cy="7" r="4" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
      </g>
    }
  />
);

// UserRound Icon
export const UserRoundBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createBrownBlob('userRound')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <circle cx="12" cy="8" r="5" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="M20 21a8 8 0 1 0-16 0" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
      </g>
    }
  />
);

// UserCheck Icon
export const UserCheckBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createBrownBlob('userCheck')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <circle cx="9" cy="7" r="4" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <polyline points="16 11 18 13 22 9" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    }
  />
);

// UserPlus Icon
export const UserPlusBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createBrownBlob('userPlus')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <circle cx="9" cy="7" r="4" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <line x1="19" y1="8" x2="19" y2="14" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="22" y1="11" x2="16" y2="11" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    }
  />
);

// LaptopCode Icon (for Tech Startup)
export const LaptopCodeBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createBrownBlob('laptopCode')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <rect x="3" y="4" width="18" height="12" rx="2" ry="2" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <line x1="2" y1="20" x2="22" y2="20" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" />
        <polyline points="8 9 6 11 8 13" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="16 9 18 11 16 13" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    }
  />
);

// Hospital Icon (for Healthcare)
export const HospitalBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createBrownBlob('hospital')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 24) scale(1.2)">
        <path d="M12 2v4" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 12v10" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 6h16v16H4z" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="M9 10h6" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 7v6" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    }
  />
);

// University Icon (for Financial Services)
export const UniversityBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createBrownBlob('university')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.1)">
        <path d="M22 10v12H2V10l10-8 10 8z" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="M6 10v12" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="M10 10v12" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="M14 10v12" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="M18 10v12" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="M2 22h20" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    }
  />
);

// ShoppingCart Icon (for E-Commerce)
export const ShoppingCartBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createBrownBlob('shoppingCart')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <circle cx="9" cy="21" r="1" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <circle cx="20" cy="21" r="1" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    }
  />
);

// Search Icon
export const SearchBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createBrownBlob('search')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <circle cx="11" cy="11" r="8" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    }
  />
);

// Cpu Icon
export const CpuBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createBrownBlob('cpu')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.1)">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <rect x="9" y="9" width="6" height="6" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <line x1="9" y1="1" x2="9" y2="4" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="15" y1="1" x2="15" y2="4" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="9" y1="20" x2="9" y2="23" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="15" y1="20" x2="15" y2="23" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="9" x2="23" y2="9" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="14" x2="23" y2="14" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="1" y1="9" x2="4" y2="9" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="1" y1="14" x2="4" y2="14" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    }
  />
);

// BarChart3 Icon (same as BarChart but with 3 bars)
export const BarChart3BlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createBrownBlob('barChart3')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <path d="M3 3v18h18" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 17V9" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="2" strokeLinecap="round" />
        <path d="M13 17V5" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 17v-4" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="2" strokeLinecap="round" />
      </g>
    }
  />
);

// ArrowRightCircle Icon (for CTA buttons)
export const ArrowRightCircleBlobIcon = ({ size = 'lg', className }: BlobIconProps) => (
  <BlobSVG
    config={createBrownBlob('arrowRightCircle')}
    size={sizeMap[size]}
    className={className}
    iconPath={
      <g transform="translate(26, 26) scale(1.2)">
        <circle cx="12" cy="12" r="10" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" />
        <polyline points="12 16 16 12 12 8" fill="none" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="8" y1="12" x2="16" y2="12" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    }
  />
);
