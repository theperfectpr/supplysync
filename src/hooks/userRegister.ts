import { useState } from 'react';
import { api } from '@/lib/api';

const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = async (userType: string, data: any) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await api.post('/api/auth/register', { userType, ...data });
      setIsLoading(false);
      return true;
    } catch (err) {
      setIsLoading(false);
      setError('Registration failed. Please try again.');
      return false;
    }
  };

  return { register, isLoading, error };
};

export default useRegister;