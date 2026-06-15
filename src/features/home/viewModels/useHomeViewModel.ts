import { useState, useEffect } from 'react';
import { fetchServices } from '../../../shared/models/apiService';
import type { SystemService } from '../../../shared/models/types';

export const useHomeViewModel = () => {
  const [services, setServices] = useState<SystemService[]>([]);
  
  useEffect(() => {
    fetchServices().then(setServices);
  }, []);

  return { services };
};