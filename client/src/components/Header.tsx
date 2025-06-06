import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import {solutions} from "../data/solutions";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEvaluationDropdownOpen, setIsEvaluationDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleEvaluationDropdown = () => {
    setIsEvaluationDropdownOpen(!isEvaluationDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsEvaluationDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-gray-800">AI Image Generation Solutions Benchmark</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#overview" className="text-gray-700 hover:text-primary font-medium">Overview</a>
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={toggleEvaluationDropdown}
                className="text-gray-700 hover:text-primary font-medium flex items-center"
              >
                Evaluation
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isEvaluationDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isEvaluationDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
                  <a href="#evaluation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Evaluation
                  </a>
                  <div className="border-t border-gray-100 my-1"></div>
                  {solutions.map((solution) => (
                    <a key={solution.id} href={`#${solution.id}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      <div className="font-medium">{solution.name}</div>
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="#recommendations" className="text-gray-700 hover:text-primary font-medium">Recommendations</a>
          </nav>
          <button className="md:hidden text-gray-700" onClick={toggleMenu} aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu 
      <div className={`md:hidden bg-white shadow-md ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 py-3 space-y-3">
          <a href="#overview" className="block text-gray-700 hover:text-primary font-medium">Overview</a>
          <a href="#evaluation" className="block text-gray-700 hover:text-primary font-medium">Evaluation</a>
          <a href="#recommendations" className="block text-gray-700 hover:text-primary font-medium">Recommendations</a>
        </div>
      </div>*/}
    </header>
  );
}
