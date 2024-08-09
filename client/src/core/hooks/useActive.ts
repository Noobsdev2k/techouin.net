import { useState } from 'react'

export interface UseActiveReturnType {
  isActive: boolean
  toggleActive: () => void
}

export const useActive = (): UseActiveReturnType => {
  const [isActive, setIsActive] = useState<boolean>(true) // Specify the type for useState

  const toggleActive = (): void => {
    setIsActive((currentActive) => !currentActive) // No change needed here, but reaffirming return type
  }
  return { isActive, toggleActive }
}
