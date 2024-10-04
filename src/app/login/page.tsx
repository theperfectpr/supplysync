"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState('company');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin) {
      if (userType === 'company') {
        router.push('/register/company');
      } else if (userType === 'supplier') {
        router.push('/register/supplier');
      }
    } else {
      // Handle login logic here
      // Assuming login is successful and userType is determined
      if (userType === 'company') {
        router.push('/dashboard/company');
      } else if (userType === 'supplier') {
        router.push('/dashboard/supplier');
      }
    }
  };

  return (
    <div className="min-h-screen bg-pattern flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-repeat opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <Head>
        <title>SupplySync - {isLogin ? 'Login' : 'Register'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <Image
          src="https://cdn.discordapp.com/attachments/1287406928414249066/1289876184145989772/pikaso_texttoimage_Create-a-modern-and-professional-logo-for-SupplySy.jpeg?ex=66fa6a4f&is=66f918cf&hm=e5ee521fbc1d191622ca109852b0ab50e2a6b783fb4d89e385ac6ac34f6d4ba2"
          alt="SupplySync Logo"
          width={50}
          height={50}
          className="mx-auto"
        />
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-gradient-to-tr from-white to-blue-100 py-8 px-4 shadow-lg sm:rounded-lg sm:px-10 border border-blue-200">
          {/* Login/Register Slider */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-300 p-1 rounded-full inline-flex">
              <button
                className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ease-in-out ${
                  isLogin
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-400'
                }`}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
              <button
                className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ease-in-out ${
                  !isLogin
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-400'
                }`}
                onClick={() => setIsLogin(false)}
              >
                Register
              </button>
            </div>
          </div>

          {/* Registration Type Slider */}
          {!isLogin && (
            <div className="flex justify-center mb-6">
              <div className="bg-gray-300 p-1 rounded-full inline-flex">
                <button
                  className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ease-in-out ${
                    userType === 'company'
                      ? 'bg-green-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-400'
                  }`}
                  onClick={() => setUserType('company')}
                >
                  Company
                </button>
                <button
                  className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ease-in-out ${
                    userType === 'supplier'
                      ? 'bg-green-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-400'
                  }`}
                  onClick={() => setUserType('supplier')}
                >
                  Supplier
                </button>
              </div>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                />
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-green-600 hover:text-green-500 transition duration-150 ease-in-out">
                    Forgot your password?
                  </a>
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out transform hover:scale-105 active:scale-95"
              >
                {isLogin ? 'Log In' : `Register as ${userType.charAt(0).toUpperCase() + userType.slice(1)}`}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}