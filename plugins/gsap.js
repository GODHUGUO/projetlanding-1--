import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Enregistre ScrollTrigger uniquement côté client
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

export default gsap