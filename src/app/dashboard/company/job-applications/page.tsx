"use client";
import React, { useState } from "react";

interface JobApplication {
  id: number;
  applicantName: string;
  jobTitle: string;
  email: string;
  phone: string;
  resumeUrl: string;
  appliedDate: string;
  status: 'Pending' | 'Accepted' | 'Rejected';
}

const JobApplicationsPage = () => {
  const [applications, setApplications] = useState<JobApplication[]>([
    { id: 3, applicantName: "Random Name", jobTitle: "E-commerce Specialist", email: "test@anchanto.com", phone: "111-222-3333", resumeUrl: "/resumes/bob-johnson.pdf", appliedDate: "2024-29-10", status: 'Pending' },
    { id: 2, applicantName: "Test Data", jobTitle: "Supply Chain Manager", email: "test@example.com", phone: "098-765-4321", resumeUrl: "/resumes/jane-smith.pdf", appliedDate: "2023-06-11", status: 'Pending' },
    { id: 1, applicantName: "John Doe", jobTitle: "E-commerce Specialist", email: "john@example.com", phone: "123-456-7890", resumeUrl: "/resumes/john-doe.pdf", appliedDate: "2023-06-10", status: 'Pending' },
  ]);

  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);

  const handleViewResume = (application: JobApplication) => {
    setSelectedApplication(application);
  };

  const handleCloseModal = () => {
    setSelectedApplication(null);
  };

  const handleStatusChange = (id: number, newStatus: 'Accepted' | 'Rejected') => {
    setApplications(applications.map(app => 
      app.id === id ? { ...app, status: newStatus } : app
    ));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Job Applications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.map((application) => (
          <div key={application.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{application.applicantName}</h2>
            <p className="text-gray-600 mb-2">Applied for: {application.jobTitle}</p>
            <p className="text-sm text-gray-500 mb-2">Applied on: {application.appliedDate}</p>
            <p className="text-sm mb-2">Email: {application.email}</p>
            <p className="text-sm mb-4">Phone: {application.phone}</p>
            <div className="flex justify-between items-center">
              <button
                onClick={() => handleViewResume(application)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                View Resume
              </button>
              <span className={`py-1 px-3 rounded-full text-xs ${
                application.status === 'Pending' ? 'bg-yellow-200 text-yellow-800' :
                application.status === 'Accepted' ? 'bg-green-200 text-green-800' :
                'bg-red-200 text-red-800'
              }`}>
                {application.status}
              </span>
            </div>
            {application.status === 'Pending' && (
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => handleStatusChange(application.id, 'Accepted')}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Accept for Interview
                </button>
                <button
                  onClick={() => handleStatusChange(application.id, 'Rejected')}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedApplication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg max-w-2xl w-full">
            <h2 className="text-2xl font-bold mb-4">Resume: {selectedApplication.applicantName}</h2>
            <div className="mb-4 h-96 border border-gray-300 rounded">
              {/* In a real application, you would embed the actual resume here */}
              <iframe src={selectedApplication.resumeUrl} className="w-full h-full"></iframe>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleCloseModal}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobApplicationsPage;