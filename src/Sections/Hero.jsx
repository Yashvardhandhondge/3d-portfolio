import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import HeroCamera from '../components/HeroCamera';
import { calculateSizes } from '../constants';
import Target from '../components/Target';
import ReactLogo from '../components/ReactLogo';
import Rings from '../components/Ring';
import Cube  from '../components/Cube';
import Button from '../components/Button';
function Hero() {

    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  
    const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className='min-h-screen  w-full flex flex-col relative'>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 '>
            <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans '>Hi, I am Yashvardhan  <span className='waving-hand'>👋
            </span></p>
            <p className='hero_tag text-gray_gradient'>Building Products</p>

        </div>

        <div className='w-full h-full absolute inset-0'>
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
        </div>
        <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#contact" className="w-fit">
          <Button name="Hire Me" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  )
}

export default Hero