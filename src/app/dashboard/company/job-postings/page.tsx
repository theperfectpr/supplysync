"use client";
import React, { useState } from 'react';

interface JobPosting {
  id: number;
  title: string;
  department: string;
  location: string;
  description: string;
  requirements: string[];
  postedDate: string;
  applications: number;
}

const CompanyJobPostings = () => {
  const [jobPostings, setJobPostings] = useState<JobPosting[]>([
    {
      id: 1,
      title: "E-commerce Specialist",
      department: "Marketing",
      location: "Remote",
      description: "We're looking for an experienced e-commerce specialist to help grow our online presence.",
      requirements: ["3+ years of e-commerce experience", "Proficient in SEO and SEM", "Strong analytical skills"],
      postedDate: "2023-06-01",
      applications: 12
    },
    {
      id: 2,
      title: "Supply Chain Manager",
      department: "Operations",
      location: "New York, NY",
      description: "Seeking a supply chain manager to optimize our logistics and inventory management processes.",
      requirements: ["5+ years in supply chain management", "Experience with ERP systems", "Strong leadership skills"],
      postedDate: "2023-06-05",
      applications: 8
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newJob, setNewJob] = useState<Omit<JobPosting, 'id' | 'applications'>>({
    title: '',
    department: '',
    location: '',
    description: '',
    requirements: [],
    postedDate: new Date().toISOString().split('T')[0]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewJob(prev => ({ ...prev, [name]: value }));
  };

  const handleRequirementsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const requirements = e.target.value.split('\n').filter(req => req.trim() !== '');
    setNewJob(prev => ({ ...prev, requirements }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = jobPostings.length + 1;
    setJobPostings(prev => [...prev, { ...newJob, id, applications: 0 }]);
    setShowModal(false);
    setNewJob({
      title: '',
      department: '',
      location: '',
      description: '',
      requirements: [],
      postedDate: new Date().toISOString().split('T')[0]
    });
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Job Postings</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Post New Job
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobPostings.map(job => (
          <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
            <p className="text-gray-600 mb-2">{job.department} - {job.location}</p>
            <p className="text-sm text-gray-500 mb-2">Posted on: {job.postedDate}</p>
            <p className="mb-4">{job.description}</p>
            <h3 className="font-semibold mb-2">Requirements:</h3>
            <ul className="list-disc list-inside mb-4">
              {job.requirements.map((req, index) => (
                <li key={index} className="text-sm text-gray-600">{req}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-500">Applications: {job.applications}</p>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Post New Job</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2">Job Title</label>
                <input
                  type="text"
                  name="title"
                  value={newJob.title}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Department</label>
                <input
                  type="text"
                  name="department"
                  value={newJob.department}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Location</label>
                <input
                  type="text"
                  name="location"
                  value={newJob.location}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Description</label>
                <textarea
                  name="description"
                  value={newJob.description}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Requirements (one per line)</label>
                <textarea
                  name="requirements"
                  value={newJob.requirements.join('\n')}
                  onChange={handleRequirementsChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 text-black px-4 py-2 rounded mr-2 hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Post Job
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyJobPostings;