export interface BaseUser {
    id: string;
    name: string;
    email: string;
    userType: 'company' | 'supplier' | 'jobSeeker';
  }
  
  export interface Company extends BaseUser {
    industry: string;
    size: string;
  }
  
  export interface Supplier extends BaseUser {
    services: string;
    yearsInBusiness: number;
  }
  
  export interface JobSeeker extends BaseUser {
    skills: string;
    experience: number;
  }
  
  export type User = Company | Supplier | JobSeeker;