import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(1, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  skills: z.string().min(1, 'Skills are required'),
  experience: z.number().min(0, 'Experience must be 0 or greater'),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: FormData) => void;
}

const JobSeekerForm: React.FC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block mb-1">Full Name</label>
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
        <label htmlFor="skills" className="block mb-1">Skills</label>
        <textarea
          id="skills"
          {...register('skills')}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.skills && <p className="text-red-500">{errors.skills.message}</p>}
      </div>
      <div>
        <label htmlFor="experience" className="block mb-1">Years of Experience</label>
        <input
          id="experience"
          type="number"
          {...register('experience', { valueAsNumber: true })}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.experience && <p className="text-red-500">{errors.experience.message}</p>}
      </div>
      <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded">
        Register Job Seeker
      </button>
    </form>
  );
};

export default JobSeekerForm;