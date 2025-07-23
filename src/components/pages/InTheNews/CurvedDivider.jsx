export default function CurvedDivider({ fillColor, path, className }) {
    return (
      <div className="relative">
        <svg className={`w-full h-24 fill-current ${className}`} viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d={path} />
        </svg>
      </div>
    );
  }