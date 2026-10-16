'use client';

import { useState, useEffect } from 'react';
import { Play, Link, Link2 } from 'lucide-react';
import MouseGrid from './MouseGrid';

interface ProjectDetailProps {
  project: any; // Using any for now since we extended the interface
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [blinkState, setBlinkState] = useState(true);

  // Set up blinking effect for status indicator
  useEffect(() => {
    if (project.status === 'Live') {
      const interval = setInterval(() => {
        setBlinkState(prev => !prev);
      }, 1000); // Blink every second
      return () => clearInterval(interval);
    }
  }, [project.status]);

  return (
    <div className="relative min-h-[500px]">
      {/* Mouse Grid Background Effect */}
      
      {/* Main Content */}
      <div className="relative top-2 bg-black/30">
        {/* Header with Project Number and Status Indicator */}
        <div className="mb-6 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              {project.title}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            {/* Project Number (top right corner as requested) */}
            <div className="text-5xl font-bold text-emerald-400/50">
              {project.num}
            </div>
            {/* Blinking Status Indicator */}
            <div className="flex items-center gap-2">
              <div className={`h-2.5 w-2.5 rounded-full ${blinkState && project.status === 'Live' ? 'bg-emerald-400 animate-blink' : 'bg-emerald-400/20'}`} />
              <span className="font-mono text-[9px] tracking-widest">
                {project.status || 'Live'}
              </span>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Project Image */}
          <div className="aspect-w-16 aspect-h-9 bg-neutral-800 rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} project`}
              className="h-full w-full object-cover"
            />
            {/* Video overlay if videoUrl exists */}
            {project.videoUrl && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity hover:opacity-100 cursor-pointer">
                <Play size={32} className="text-white" />
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="space-y-4">
            {/* Information Table with Visible Borders */}
            <div className="border border-neutral-700/50 rounded-lg p-4">
              <div className="space-y-3">
                <div className="flex w-full items-start pb-2 border-b border-neutral-700/30">
                  <span className="w-[30%] text-emerald-400 font-mono text-xs tracking-wider">
                    PROJECT NAME
                  </span>
                  <span className="w-[70%] text-neutral-200 font-mono text-xs">
                    {project.title}
                  </span>
                </div>
                <div className="flex w-full items-start pb-2 border-b border-neutral-700/30">
                  <span className="w-[30%] text-emerald-400 font-mono text-xs tracking-wider">
                    YEAR
                  </span>
                  <span className="w-[70%] text-neutral-200 font-mono text-xs">
                    {project.year}
                  </span>
                </div>
                <div className="flex w-full items-start pb-2 border-b border-neutral-700/30">
                  <span className="w-[30%] text-emerald-400 font-mono text-xs tracking-wider">
                    PROJECT TYPE
                  </span>
                  <span className="w-[70%] text-neutral-200 font-mono text-xs">
                    {project.category}
                  </span>
                </div>
                <div className="flex w-full items-start pb-2 border-b border-neutral-700/30">
                  <span className="w-[30%] text-emerald-400 font-mono text-xs tracking-wider">
                    ROLE
                  </span>
                  <span className="w-[70%] text-neutral-200 font-mono text-xs">
                    {project.role}
                  </span>
                </div>
                <div className="flex w-full items-start">
                  <span className="w-[30%] text-emerald-400 font-mono text-xs tracking-wider">
                    STATUS
                  </span>
                  <span className={`w-[70%] text-neutral-200 font-mono text-xs ${
                    project.status === 'Live'
                      ? 'text-emerald-400'
                      : project.status === 'Shipped'
                        ? 'text-blue-400'
                        : 'text-yellow-400'
                  }`}>
                    {project.status || 'Live'}
                  </span>
                </div>
              </div>
            </div>

            {/* Expertise Section with Visible Box */}
            <div className="border border-neutral-700/50 rounded-lg p-4">
              <h3 className="font-mono text-[10px] tracking-[0.3em] text-emerald-400 mb-2">
                EXPERTISE
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool: string, index: number) => (
                  <span key={index} className="bg-neutral-700/50 px-2 py-1 rounded text-xs font-mono">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Video Section (if available) */}
            {project.videoUrl && (
              <div className="mt-6 border border-neutral-700/50 rounded-lg">
                <h3 className="font-mono text-[10px] tracking-[0.3em] text-emerald-400 mb-2">
                  PROJECT VIDEO
                </h3>
                <div className="aspect-w-16 aspect-h-9 bg-neutral-800 rounded-lg overflow-hidden pb-4">
                  {/* In a real implementation, this would be a video player */}
                  <div className="h-full w-full flex items-center justify-center bg-neutral-800">
                    <Play size={48} className="text-emerald-400" />
                    <p className="mt-2 text-neutral-500 text-center">
                      Click to play video
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons (bottom right as requested) */}
            <div className="mt-8 flex justify-end gap-4">
              {/* Visit Live Site Link */}
              <a
                href={project.liveSiteUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-[9px] tracking-[0.2em] text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
              >
                Visit Live Site
                <Link size={16} />
              </a>

              {/* View Code / Repository Link */}
              <a
                href={project.repositoryUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-[9px] tracking-[0.2em] text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
              >
                View Code
                <Link2 size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}