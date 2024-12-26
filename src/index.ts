import './styles.scss'
import { type ISoundData, soundsData } from './sounds-data'

const DATASET_ID = 'soundId'

const root = document.getElementById('app')
const body = document.querySelector('body')

let currentSound: ISoundData | undefined
let currentIcon: HTMLImageElement | undefined
let inited = false

const $player = createDomElement<HTMLAudioElement>('audio')
render($player)

const $title = createDomElement('h1')
$title.textContent = 'Weather sound'
render($title)

const $soundsContainer = createDomElement('h1', 'sounds-container')
$soundsContainer.addEventListener('click', event => handleSoundClick(event))
soundsData.forEach(sound => {
  const $sound = createSoundElement(sound)
  $soundsContainer.appendChild($sound)
})
render($soundsContainer)

const $volume = createVolumeControlElement()
$volume.addEventListener('input', event => setVolume((event.target as HTMLInputElement).value))
render($volume)

function createSoundElement(sound: ISoundData) {
  const wraper = createDomElement('div', 'sound')
  wraper.style.backgroundImage = `url(/assets/${sound.bg})`

  const img = createDomElement<HTMLImageElement>('img', 'icon')
  img.src = `/assets/icons/${sound.icon}`
  img.dataset[DATASET_ID] = sound.id

  wraper.appendChild(img)

  return wraper
}

function createVolumeControlElement() {
  const volume = createDomElement<HTMLInputElement>('input')

  volume.setAttribute('type', 'range')
  volume.setAttribute('min', '0')
  volume.setAttribute('max', '1')
  volume.setAttribute('step', '0.1')

  return volume
}

function createDomElement<T extends HTMLElement>(tagName: string, classes: string | undefined = undefined): T {
  const el = document.createElement(tagName) as T

  if (classes) {
    el.classList.add(classes)
  }

  return el
}

function render(domElement: HTMLElement) {
  if (root) {
    root.append(domElement)
  }
}

function handleSoundClick(event: MouseEvent) {
  event.preventDefault()
  event.stopPropagation()

  const soundId = (event.target as HTMLElement).dataset[DATASET_ID]

  if (!soundId) return

  const soundData = soundsData.find(data => data.id === soundId)

  const $soundIcon = event.target as HTMLImageElement

  if (soundData) {
    playSound(soundData, $soundIcon)
  }
}

function playSound(sound: ISoundData, img: HTMLImageElement) {
  const isPaused = $player.paused

  if (!currentSound) {
    currentSound = sound
  }

  if (!currentIcon) {
    currentIcon = img
  }

  if (currentSound.file !== sound.file || inited === false) {
    inited = true

    currentIcon.src = `/assets/icons/${currentSound.icon}`

    currentSound = sound
    currentIcon = img

    $player.src = `assets/sounds/${sound.file}`
    img.src = `/assets/icons/pause.svg`
    changeBackground(sound)
    $player.play()
    return
  }

  if (isPaused) {
    $player.play()
    img.src = `/assets/icons/pause.svg`
  } else {
    $player.pause()
    img.src = `/assets/icons/${sound.icon}`
  }
}

function setVolume(volume: string) {
  $player.volume = parseFloat(volume)
}

function changeBackground(sound: ISoundData) {
  if (body) {
    body.style.backgroundImage = `url('./assets/${sound.bg}')`
  }
}
