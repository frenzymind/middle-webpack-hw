export const soundsData: ISoundData[] = [
  {
    file: 'summer.mp3',
    icon: 'sun.svg',
    bg: 'summer-bg.jpg',
  },
  {
    file: 'rain.mp3',
    icon: 'cloud-rain.svg',
    bg: 'rainy-bg.jpg',
  },

  {
    file: 'winter.mp3',
    icon: 'cloud-snow.svg',
    bg: 'winter-bg.jpg',
  },
]

export type ISoundData = {
  file: string
  icon: string
  bg: string
}
