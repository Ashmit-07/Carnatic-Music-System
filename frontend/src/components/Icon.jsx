import React from 'react'

export default function Icon({ name, className = '' }) {
  const sharedProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.8',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    'aria-hidden': 'true'
  }

  const iconName = String(name || '').toLowerCase().replace(/_/g, '-').replace(/\s+/g, '-')

  switch (iconName) {
    case 'arrow-forward':
      return (
        <svg {...sharedProps}>
          <path d="M5 12h14" />
          <path d="M13 5l7 7-7 7" />
        </svg>
      )
    case 'home':
      return (
        <svg {...sharedProps}>
          <path d="M4 10.5 12 4l8 6.5" />
          <path d="M6 9.5V19h12v-9.5" />
        </svg>
      )
    case 'search':
      return (
        <svg {...sharedProps}>
          <circle cx="11" cy="11" r="5.5" />
          <path d="M16 16l4 4" />
        </svg>
      )
    case 'school':
      return (
        <svg {...sharedProps}>
          <path d="M3 10.5L12 5l9 5.5-9 5.5-9-5.5Z" />
          <path d="M7 12.5v4.5c1.7 1.4 4 2.1 5 2.1s3.3-.7 5-2.1v-4.5" />
        </svg>
      )
    case 'graphic-eq':
      return (
        <svg {...sharedProps}>
          <path d="M4 15V9" />
          <path d="M8 17V7" />
          <path d="M12 18V6" />
          <path d="M16 16V8" />
          <path d="M20 14V10" />
        </svg>
      )
    case 'album':
      return (
        <svg {...sharedProps}>
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      )
    case 'music-note':
      return (
        <svg {...sharedProps}>
          <path d="M9 18V6l10-2v12" />
          <circle cx="9" cy="18" r="3" />
          <circle cx="19" cy="16" r="3" />
        </svg>
      )
    case 'piano':
      return (
        <svg {...sharedProps}>
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <path d="M8 5v14M12 5v14M16 5v14M4 10h16M4 15h16" />
        </svg>
      )
    case 'play':
      return (
        <svg {...sharedProps}>
          <path d="M8 5l11 7-11 7V5Z" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'play-arrow':
      return (
        <svg {...sharedProps}>
          <path d="M8 5l11 7-11 7V5Z" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'pause':
      return (
        <svg {...sharedProps}>
          <path d="M8 5v14M16 5v14" />
        </svg>
      )
    case 'prev':
    case 'skip-previous':
      return (
        <svg {...sharedProps}>
          <path d="M6 5v14" />
          <path d="M18 5l-9 7 9 7V5Z" />
        </svg>
      )
    case 'next':
    case 'skip-next':
      return (
        <svg {...sharedProps}>
          <path d="M18 5v14" />
          <path d="M6 5l9 7-9 7V5Z" />
        </svg>
      )
    case 'settings':
      return (
        <svg {...sharedProps}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.6 1.6 0 0 0 .3 1.7l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.7-.3 1.6 1.6 0 0 0-1 1.5V20a2 2 0 1 1-4 0v-.2a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.7.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.7 1.6 1.6 0 0 0-1.5-1H4a2 2 0 1 1 0-4h.2a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.7l-.1-.1a2 2 0 0 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.7.3h.1A1.6 1.6 0 0 0 10 4.2V4a2 2 0 1 1 4 0v.2a1.6 1.6 0 0 0 1 1.5h.1a1.6 1.6 0 0 0 1.7-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.7v.1a1.6 1.6 0 0 0 1.5 1H20a2 2 0 1 1 0 4h-.2a1.6 1.6 0 0 0-1.5 1Z" />
        </svg>
      )
    case 'lock':
      return (
        <svg {...sharedProps}>
          <rect x="5" y="11" width="14" height="9" rx="2" />
          <path d="M8 11V8a4 4 0 1 1 8 0v3" />
        </svg>
      )
    case 'queue-music':
      return (
        <svg {...sharedProps}>
          <path d="M4 7h10" />
          <path d="M4 12h10" />
          <path d="M4 17h7" />
          <path d="M18 6v10.5a2.5 2.5 0 1 1-2.5-2.5H18Z" />
        </svg>
      )
    case 'hourglass':
      return (
        <svg {...sharedProps}>
          <path d="M7 4h10v3.5a4 4 0 0 1-1.2 2.8L12 12l3.8 1.7A4 4 0 0 1 17 16.5V20H7v-3.5a4 4 0 0 1 1.2-2.8L12 12l-3.8-1.7A4 4 0 0 1 7 7.5V4Z" />
        </svg>
      )
    case 'library-music':
      return (
        <svg {...sharedProps}>
          <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4H18a2 2 0 0 1 2 2v10.5A2.5 2.5 0 0 1 17.5 19H6.5A2.5 2.5 0 0 1 4 16.5V6.5Z" />
          <path d="M9 8v7.5" />
          <path d="M9 8l8-1v6.5l-8 1V8Z" />
        </svg>
      )
    case 'share':
      return (
        <svg {...sharedProps}>
          <circle cx="18" cy="5" r="2" />
          <circle cx="6" cy="12" r="2" />
          <circle cx="18" cy="19" r="2" />
          <path d="M8 11l8-5M8 13l8 5" />
        </svg>
      )
    case 'wind':
      return (
        <svg {...sharedProps}>
          <path d="M4 9h10a3 3 0 0 1 0 6H7" />
          <path d="M4 15h13a3 3 0 0 0 0-6H7" />
          <path d="M4 6h15" />
        </svg>
      )
    case 'drum':
      return (
        <svg {...sharedProps}>
          <ellipse cx="12" cy="15" rx="7" ry="4" />
          <path d="M5 15V9a7 7 0 0 1 14 0v6" />
          <path d="M8 9h8" />
        </svg>
      )
    default:
      return null
  }
}
