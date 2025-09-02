import Container from './container'
import { GITHUB_PATH, MAINTAINER } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-14 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[1.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            {`Maintained by ${MAINTAINER}`}
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href={`https://github.com/${GITHUB_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              View this maintainer's GitHub profile
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
