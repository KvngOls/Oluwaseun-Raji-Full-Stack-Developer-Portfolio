interface SkillCircleProps {
  name: string;
  percentage: number;
}

const SkillCircle = ({ name, percentage }: SkillCircleProps) => {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const progress = (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Circular Progress */}
      <div className="relative h-28 w-28">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
          {/* Background Circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="6"
          />

          {/* Progress Circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#030B20"
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            strokeLinecap="round"
          />
        </svg>

        {/* Percentage */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-[#030B20]">
            {percentage}%
          </span>
        </div>
      </div>

      {/* Skill Name */}
      <span className="text-sm font-semibold text-[#030B20]">{name}</span>
    </div>
  );
};

export default SkillCircle;
