import { StaticImage } from 'gatsby-plugin-image'

export const Image1 = () => (
  <div className="flex flex-row gap-y-4 sm:flex-column">
    <h1 className="text-3xl font-bold underline">
      Tailwind css not working...
    </h1>
    <div>
      <StaticImage
        src="../../images/portfolio/martina-kimchi.jpeg"
        alt="Martina and Kimchi"
        placeholder="dominantColor"
        width={300}
      />
    </div>
    <div>
      <StaticImage
        src="../../images/portfolio/circle-eyes-1.jpeg"
        alt="Circle Eye 1"
        placeholder="dominantColor"
        width={300}
      />
    </div>
    <div>
      <StaticImage
        src="../../images/portfolio/circle-eyes-2.jpeg"
        alt="Circle Eye 2"
        placeholder="dominantColor"
        width={300}
      />
    </div>
    <div>
      <StaticImage
        src="../../images/portfolio/tree-eye.png"
        alt="Tree eyes"
        placeholder="dominantColor"
        width={300}
      />
    </div>
  </div>
)
