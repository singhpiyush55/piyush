export default function Education() {
  return ( <div>
    <div>
      {/* <h2 className="text-2xl font-semibold mb-6">
        Education
      </h2> */}

      {/* Floating card */}
      <div className="
        bg-white/5
        backdrop-blur
        border border-white/10
        rounded-xl
        p-6
        shadow-lg
        max-w-xl
      ">
        {/* Degree */}
        <h3 className="text-lg font-medium mb-2">
          Master of Computer Applications
        </h3>

        {/* College */}
        <p className="text-white/80 mb-4">
          Banaras Hindu University
        </p>

        {/* Meta info */}
        <div className="space-y-3 text-sm text-white/70">
          
          {/* Session */}
          <div className="flex items-center gap-3">
            <CalendarIcon />
            <span>2024 – 2026</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <LocationIcon />
            <span>Varanasi, UP, India</span>
          </div>

          {/* CGPA
          <div className="flex items-center gap-3">
            <AcademicIcon />
            <span>CGPA: 8.5</span>
          </div> */}

        </div>
      </div>
    </div>

    <div>
      <div className="
        bg-white/5
        backdrop-blur
        border border-white/10
        rounded-xl
        p-6
        mt-3
        shadow-lg
        max-w-xl
      ">
        {/* Degree */}
        <h3 className="text-lg font-medium mb-2">
          Bachelor of Computer Applications
        </h3>

        {/* College */}
        <p className="text-white/80 mb-4">
          L. N. Mishra Institute of Economic Development & Social Change
        </p>

        {/* Meta info */}
        <div className="space-y-3 text-sm text-white/70">
          
          {/* Session */}
          <div className="flex items-center gap-3">
            <CalendarIcon />
            <span>2021 – 2024</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <LocationIcon />
            <span>Patna, Bihar, India</span>
          </div>

          {/* CGPA
          <div className="flex items-center gap-3">
            <AcademicIcon />
            <span>CGPA: 8.5</span>
          </div> */}

        </div>
      </div>
    </div>
  </div>);
}
function CalendarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
    </svg>
  );
}
function LocationIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 21s-6-5.33-6-10a6 6 0 1 1 12 0c0 4.67-6 10-6 10z" />
      <circle cx="12" cy="11" r="2" />
    </svg>
  );
}
function AcademicIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M22 10L12 4 2 10l10 6 10-6z" />
      <path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5" />
    </svg>
  );
}
