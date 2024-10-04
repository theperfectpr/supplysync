"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();
  const userType = pathname.split('/')[2];

  const menuItems = {
    company: [
      { label: 'Overview', href: '/dashboard/company' },
      { label: 'Suppliers', href: '/dashboard/company/suppliers' },
      { label: 'Current Business', href: '/dashboard/company/current-business' },
      { label: 'Request', href: '/dashboard/company/request' },
      { label: 'Products', href: '/dashboard/company/products' },
      { label: 'Auction', href: '/dashboard/company/auction' },
      { label: 'Job Postings', href: '/dashboard/company/job-postings' },
      { label: 'Job Applications', href: '/dashboard/company/job-applications' },
    ],
    supplier: [
      { label: 'Overview', href: '/dashboard/supplier' },
      { label: 'Companies', href: '/dashboard/supplier/companies' },
      { label: 'Products', href: '/dashboard/supplier/products' },
      { label: 'Orders', href: '/dashboard/supplier/orders' },
      { label: 'Request(7)', href: '/dashboard/supplier/requests' },
      { label: 'Current Business', href: '/dashboard/supplier/current-business' },
      { label: 'Auction', href: '/dashboard/supplier/auction' },
      { label: 'Messages', href: '/dashboard/supplier/messages' },
    ],
    'job-seeker': [
      { label: 'Overview', href: '/dashboard/job-seeker' },
      { label: 'Job Search', href: '/dashboard/job-seeker/job-search' },
      { label: 'Applications', href: '/dashboard/job-seeker/applications' },
    ],
  };

  return (
    <aside className="w-64 bg-gray-100 p-4">
      <nav>
        <ul>
          {menuItems[userType].map((item) => (
            <li key={item.href} className="mb-2">
              <Link
                href={item.href}
                className={`block p-2 rounded-md transition-colors duration-200 ${
                  pathname === item.href
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;