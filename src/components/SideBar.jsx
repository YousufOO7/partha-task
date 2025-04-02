"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FiChevronRight, FiX, FiChevronDown } from 'react-icons/fi';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isManageBatchOpen, setIsManageBatchOpen] = useState(false); 

  return (
    <div className="">
      {/* Sidebar */}
      <div
        className={` border-t  h-screen bg-white shadow-lg transition-all duration-300 ${
          isOpen ? "w-56" : "w-0 overflow-hidden"
        }`}
      >
        <ul className="menu flex flex-col h-full text-gray-700">
          {/* Header with Close Button */}
          <div className="flex justify-between items-center mb-4 px-4 py-3 border-b">
            <h4 className="font-semibold">Teach</h4>
            <button onClick={() => setIsOpen(false)} className="text-xl">
              <FiX />
            </button>
          </div>

          {/* Navigation Links */}
          <li className="px-4 py-2 font-medium">Dashboard</li>

          <li className="relative">
            <button
              className="w-full flex justify-between items-center px-4 py-2 hover:bg-gray-100 rounded"
              onClick={() => setIsManageBatchOpen(!isManageBatchOpen)}
            >
              Manage Batch{" "}
              <FiChevronDown
                className={`transition-transform ${
                  isManageBatchOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isManageBatchOpen && (
              <ul className="pl-6 space-y-2">
                <li>
                  <Link
                    href="/dashboard/all-batches"
                    className="block py-2 px-4 bg-blue-100 rounded"
                  >
                    All Batches
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard/resources"
                    className="block py-2 px-4 hover:bg-gray-100 rounded"
                  >
                    Resources
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              href="/dashboard/earnings"
              className="px-4 block py-2 hover:bg-gray-100 rounded"
            >
              My Earnings
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/timetable"
              className="px-4 block py-2 hover:bg-gray-100 rounded"
            >
              Timetable
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/analytics"
              className="px-4 block py-2 hover:bg-gray-100 rounded"
            >
              Analytics
            </Link>
          </li>
          <div className="mt-auto">
            <li>
              <Link
                href="/dashboard/profile"
                className="px-4 block py-2 hover:bg-gray-100 rounded -mt-40"
              >
                Manage Profile
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/settings"
                className="px-4 block py-2 hover:bg-gray-100 rounded -mt-32"
              >
                Settings
              </Link>
            </li>
          </div>
        </ul>
      </div>

      {/* Show Button when Sidebar is Hidden */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-7 left-2 bg-white shadow-md rounded-r-lg px-3 py-2 flex items-center mt-12"
        >
          <FiChevronRight size={20} />
        </button>
      )}
    </div>
  );
};

export default SideBar;