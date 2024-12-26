export const soundsData: ISoundData[] = [
  {
    id: '1',
    file: 'summer.mp3',
    icon: 'sun.svg',
    bg: 'summer-bg.jpg',
  },
  {
    id: '2',
    file: 'rain.mp3',
    icon: 'cloud-rain.svg',
    bg: 'rainy-bg.jpg',
  },

  {
    id: '3',
    file: 'winter.mp3',
    icon: 'cloud-snow.svg',
    bg: 'winter-bg.jpg',
  },
]

export type ISoundData = {
  id: string
  file: string
  icon: string
  bg: string
}
