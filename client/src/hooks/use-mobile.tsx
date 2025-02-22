// use-mobile.tsx - Mobile device detection hook
// This component helps determine if the website is being viewed on a mobile device
// It enables responsive design by tracking screen size changes

import * as React from "react"

// Screen width threshold for mobile devices (768px)
const MOBILE_BREAKPOINT = 768

// Custom hook that returns true when viewing on a mobile device
export function useIsMobile() {
  // Track whether the current device is mobile
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Create a media query to check screen width
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)

    // Update mobile status when screen size changes
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    // Listen for screen size changes
    mql.addEventListener("change", onChange)

    // Set initial mobile status
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)

    // Clean up event listener when component unmounts
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}