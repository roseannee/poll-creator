import { Variants } from "framer-motion"

export const item: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    x: 20,
  },
}

interface ProgressVariantsConfig {
  x: number | null | undefined
}
type ProgressVariantsType = (config: ProgressVariantsConfig) => Variants

export const progressVariants: ProgressVariantsType = (config) => {
  return {
    hidden: {
      transform: "translateX(-100%)",
    },
    visible: {
      transform: `translateX(-${100 - (config.x || 0)}%)`,
    },
  }
}
