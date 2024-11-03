import React from 'react';
import { SnowflakeChart } from './SnowflakeChart';
import { ParallaxBanner } from './ParallaxBanner';
import { CommentSection } from './CommentSection';
import { sampleComments } from '../data/comments';
import type { CountryMetrics } from '../types';
import { ChevronRight, AlertTriangle, TrendingUp } from 'lucide-react';

interface CountryAnalysisProps {
  country: CountryMetrics;
}

export const CountryAnalysis: React.FC<CountryAnalysisProps> = ({ country }) => {
  return (
    <div className="min-h-screen bg-[#1a1f25] text-gray-100">
      {/* Parallax Banner */}
      <ParallaxBanner imageUrl={country.imageUrl} countryName={country.name} />

      {/* Header */}
      <header className="border-b border-gray-800 bg-[#1e242c]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>Countries</span>
            <ChevronRight size={16} />
            <span>{country.name}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 -mt-20 relative z-10">
        {/* Country Header */}
        <div className="flex items-center justify-between mb-8 bg-[#1e242c] p-6 rounded-lg shadow-xl">
          <div className="flex items-center space-x-4">
            <span className="text-4xl">{country.flag}</span>
            <div>
              <h1 className="text-2xl font-bold">{country.name}</h1>
              <p className="text-gray-400">FIRE Freedom Analysis</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Add to Watchlist
          </button>
        </div>

        {/* Analysis Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left Column */}
          <div className="lg:col-span-1">
            <div className="bg-[#1e242c] rounded-lg p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Snowflake Analysis</h2>
                <button className="text-blue-400 hover:text-blue-300">Learn More</button>
              </div>
              <div className="flex justify-center mb-4">
                <SnowflakeChart metrics={country.metrics} size={300} />
              </div>
              <p className="text-gray-400 text-sm">
                Exceptional quality of life with strong healthcare and safety metrics.
              </p>
            </div>
          </div>

          {/* Center and Right Columns */}
          <div className="lg:col-span-2">
            {/* Rewards Section */}
            <div className="bg-[#1e242c] rounded-lg p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">FIRE Benefits</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="text-green-400" size={20} />
                  <div>
                    <p className="font-medium">High Quality Healthcare</p>
                    <p className="text-gray-400 text-sm">Ranked in top 10% globally for healthcare quality and accessibility</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="text-green-400" size={20} />
                  <div>
                    <p className="font-medium">Tax Benefits</p>
                    <p className="text-gray-400 text-sm">Special tax programs for retirees and passive income</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Risk Analysis */}
            <div className="bg-[#1e242c] rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Risk Analysis</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="text-yellow-400" size={20} />
                  <div>
                    <p className="font-medium">Property Market Volatility</p>
                    <p className="text-gray-400 text-sm">Housing prices have increased 15% year over year</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mb-8">
          <CommentSection comments={sampleComments} />
        </div>
      </main>
    </div>
  );
};