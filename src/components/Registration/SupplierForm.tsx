import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(1, 'Supplier name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  services: z.string().min(1, 'Services offered is required'),
  yearsInBusiness: z.number().min(0, 'Years in business must be 0 or greater'),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: FormData) => void;
}

const SupplierForm: React.FC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block mb-1">Supplier Name</label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block mb-1">Email</label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="password" className="block mb-1">Password</label>
        <input
          id="password"
          type="password"
          {...register('password')}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      </div>
      <div>
        <label htmlFor="services" className="block mb-1">Services Offered</label>
        <textarea
          id="services"
          {...register('services')}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.services && <p className="text-red-500">{errors.services.message}</p>}
      </div>
      <div>
        <label htmlFor="yearsInBusiness" className="block mb-1">Years in Business</label>
        <input
          id="yearsInBusiness"
          type="number"
          {...register('yearsInBusiness', { valueAsNumber: true })}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.yearsInBusiness && <p className="text-red-500">{errors.yearsInBusiness.message}</p>}
      </div>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Register Supplier
      </button>
    </form>
  );
};

export default SupplierForm;