import {SUPPORTED_DOMAINS} from "../constants";

const isItGoogleTranslator = (): boolean => {
  const { hostname } = window.location;

  return SUPPORTED_DOMAINS.some(item => hostname.startsWith(item));
};

const makeDark = (): void => {
  if(isItGoogleTranslator()) {
    const style = document.createElement("style")
    style.textContent = `
      html {
        filter: invert(90%) brightness(0.7) hue-rotate(180deg);
      }
      html img {
        filter: invert(100%) brightness(1) hue-rotate(-180deg) drop-shadow(0 0 10px black);
      }
      html svg {
        filter: invert(100%) brightness(1) hue-rotate(-180deg);
      }
    `
    document.head.appendChild(style)
  }
};

makeDark();

export {}
