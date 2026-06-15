import type { SystemService } from './types';

export const fetchServices = async (): Promise<SystemService[]> => {
  return [
    { 
      id: '1', 
      title: 'I.T. Consultancy', 
      description: 'Strategic technology guidance to optimize your business processes and digital transformation.',
      fullDescription: 'Our expert consultants work closely with your team to analyze current technology infrastructure, identify optimization opportunities, and develop comprehensive strategies for digital transformation.',
      keyFeatures: ['Business Process Analysis', 'Systems Integration', 'Enterprise Architecture', 'I.T. Modernization']
    },
    { 
      id: '2', 
      title: 'Software Solutions', 
      description: 'Tailored software solutions designed specifically for your unique business requirements.',
      fullDescription: 'We develop custom software solutions that perfectly match your business needs, from web applications to mobile platforms and cloud-based services.',
      keyFeatures: ['Web Development', 'Software as a Service', 'Mobile Solutions', 'Process Automation']
    },
    { 
      id: '3', 
      title: 'Data Analytics', 
      description: 'Transform your data into actionable insights with our comprehensive analytics solutions.',
      fullDescription: 'Unlock the power of your data with our advanced analytics and business intelligence solutions. We help organizations collect, process, and analyze large volumes of data.',
      keyFeatures: ['Data Warehousing', 'Business Intelligence', 'Predictive Analytics', 'Dashboard Design']
    },
    { 
      id: '4', 
      title: 'Managed Services', 
      description: 'Comprehensive support and maintenance to keep your systems running smoothly 24/7.',
      fullDescription: 'Our managed services provide comprehensive IT support and maintenance, ensuring your technology infrastructure operates at peak performance around the clock.',
      keyFeatures: ['24/7 Monitoring', 'Technical Support', 'System Maintenance', 'Performance Optimization']
    },
    { 
      id: '5', 
      title: 'AI Enablement', 
      description: 'Artificial intelligence integration and development services to enhance your business capabilities.',
      fullDescription: 'Harness the transformative power of artificial intelligence to automate processes, enhance decision-making, and drive innovation across your organization.',
      keyFeatures: ['AI Strategy & Consulting', 'Machine Learning Models', 'Automation Solutions', 'AI Integration']
    },
    { 
      id: '6', 
      title: 'Digital Marketing', 
      description: 'Comprehensive digital marketing strategies to boost your online presence and drive growth.',
      fullDescription: 'Accelerate your business growth with our comprehensive digital marketing strategies designed to increase brand visibility, engage target audiences, and drive measurable results.',
      keyFeatures: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'PPC Campaigns']
    }
  ];
};