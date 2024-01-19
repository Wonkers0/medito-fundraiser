import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer() {
  return (
    <footer className="bg-gray-100 flex flex-col py-12 w-full font-light justify-center items-center gap-12 mt-12">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-4 text-neutral-400 text-sm">
          <a href="https://meditofoundation.org/medito-app">App</a>
          <a href="https://meditofoundation.org/about">About</a>
          <a href="https://meditofoundation.org/blog">Blog</a>
          <a href="https://meditofoundation.org/resources">Resources</a>
          <a href="https://medito.notion.site/Together-we-can-make-mental-health-resources-accessible-to-all-1bc4f81c932d4e31996e45ad928c32a6">
            Volunteer
          </a>
        </div>

        <div className="flex gap-8 text-gray-400">
          <a href="https://www.instagram.com/meditohq">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com/meditohq">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="https://github.com/meditohq">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/company/meditofoundation">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.youtube.com/@Medito">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
      <p className="text-center text-neutral-500 text-xs">
        Non-profit organization registered in the Netherlands
        <br />
        <br />
        hi@meditofoundation.org
        <br />
        KvK-nummer: 75284251
        <br />
        RSIN: 860222627
      </p>
    </footer>
  )
}
