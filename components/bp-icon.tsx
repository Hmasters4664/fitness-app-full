import type React from "react"

interface BPIconProps {
  className?: string
}

export const BPIcon: React.FC<BPIconProps> = ({ className = "h-8 w-8" }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="48" height="48" rx="12" fill="currentColor" fillOpacity="0.1" />
      <path
        d="M14 10C14 9.44772 14.4477 9 15 9H24C28.4183 9 32 12.5817 32 17C32 19.2543 31.0144 21.2891 29.4346 22.7054C31.6301 24.1741 33 26.6543 33 29.5C33 34.1944 29.1944 38 24.5 38H15C14.4477 38 14 37.5523 14 37V10Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M22 23H15V37.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 9V23" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M22 23C25.866 23 29 26.134 29 30C29 33.866 25.866 37 22 37"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 9C25.866 9 29 12.134 29 16C29 19.866 25.866 23 22 23"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
