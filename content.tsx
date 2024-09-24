import type { PlasmoCSConfig } from "plasmo"

const CustomButton = () => {
  return <button>Custom button</button>
}

export default CustomButton

export const config: PlasmoCSConfig = {
    matches: ["<all_urls>"],
    all_frames: true
  }