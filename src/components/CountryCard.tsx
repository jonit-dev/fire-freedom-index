import React from 'react';
import { RadialChart } from './RadialChart';
import type { CountryMetrics } from '../types';
import { ExternalLink } from 'lucide-react';

interface CountryCardProps {
  country: CountryMetrics;
}

export const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48 overflow-hidden">
        <img
          src={country.imageUrl}
          alt={country.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="text-2xl mr-2">{country.flag}</span>
          <span className="font-semibold">{country.name}</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-6">
          <div className="prose">
            <p className="text-gray-600 leading-relaxed">{country.description}</p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <RadialChart metrics={country.metrics} />
        </div>
        
        <div className="mt-6 flex justify-between items-center">
          <div className="flex space-x-2">
            {Object.entries(country.metrics).map(([key, value]) => (
              <span
                key={key}
                className="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                title={key.replace(/([A-Z])/g, ' $1').charAt(0).toUpperCase() + key.replace(/([A-Z])/g, ' $1').slice(1)}
              >
                {value}%
              </span>
            ))}
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            <ExternalLink size={16} />
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};