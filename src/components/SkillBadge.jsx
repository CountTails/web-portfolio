import React from 'react';

const SkillBadge = ({ percentage, color, label }) => {
  const radius = 80;
  const strokeWidth = 15;
  const circumference = 2 * Math.PI * radius;
  const gap = 3
  const offset = circumference - (circumference * percentage) / 100 + gap;

  const getColor = (percentage) => {
    if (percentage >= 90) return '#34C759'; // Vibrant green
    if (percentage >= 80) return '#8BC34A'; // Pale green
    if (percentage >= 70) return '#F7DC6F'; // Pale yellow
    if (percentage >= 60) return '#FF9800'; // Vibrant orange
    return '#FF3737'; // Vibrant red
  };

  return (
    <div className="flex flex-col items-center justify-center w-56 h-56">
      <svg className="w-full h-full">
        <circle
          cx="120"
          cy="120"
          r={radius}
          fill="none"
          stroke="#ccc"
          strokeWidth={strokeWidth}
        />
        <circle
          cx="120"
          cy="120"
          r={radius}
          fill="none"
          stroke={getColor(percentage)}
          strokeWidth={`${strokeWidth - gap}`}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 120 120)"
        />
      </svg>
      <span className="absolute text-lg font-bold">{label}</span>
    </div>
  );
};

export default SkillBadge;
