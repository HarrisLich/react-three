import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { ScrollControls, Sky, useScroll, useAnimations } from '@react-three/drei'
import { DonutCompanySVG } from './components/DonutCompanySVG'
import { motion, useInView } from 'framer-motion'
import oreoDonut from '../src/imgs/oreo_donut.png'
import strawbDonut from '../src/imgs/strawb_donut.png'
import hazelDonut from '../src/imgs/hazel_donut.png'
import cowboyDonut from '../src/imgs/cowboy_donut.png'
import carnivalDonut from '../src/imgs/carnival_donut.png'

function redirectEvent(eventType, fromElementSelector, toElementSelector) {
  const fromElement = document.querySelector(fromElementSelector)
  const toElement = document.querySelector(toElementSelector)
  fromElement.addEventListener(eventType, function (event) {
    toElement.dispatchEvent(new event.constructor('scroll', event));
    event.preventDefault();
    event.stopPropagation();
    //event.stopImmediatePropagation();
  });
}


function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function Donut({ ...props }) {
  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + '/test_donut6.glb')
  const scroll = useScroll()
  useFrame((state, delta) => {
    const offset = 1 - scroll.offset
    state.camera.position.set(Math.sin(offset) * -4, Math.atan(offset * Math.PI * 2) * 1.5, Math.cos((offset * Math.PI) / 3) * -3)
    state.camera.lookAt(0, 0, 0)
  })

  return <primitive object={gltf.scene} {...props} />
}

function ThreeDCanvas() {
  return (
    <Canvas id="canvas" camera={{ fov: 75, near: 0.1, far: 1000, position: [2, 1, 2] }} style={{ backgroundColor: 'transparent' }}>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <ScrollControls pages={3}>
        <Donut scale={[2, 2, 2]} position={[0, 0, 0]}></Donut>
      </ScrollControls>

    </Canvas>
  )
}

function App() {

  const oreoRef = React.useRef(null)
  const oreoIsInView = useInView(oreoRef, {once: true})
  const strawbRef = React.useRef(null)
  const strawbIsInView = useInView(strawbRef, {once: true})
  const carnivalRef = React.useRef(null)
  const carnivalIsInView = useInView(carnivalRef, {once: true})
  const hazelRef = React.useRef(null)
  const hazelIsInView = useInView(hazelRef, {once: true})
  const cowboyRef = React.useRef(null)
  const cowboyIsInView = useInView(cowboyRef, {once: true})


  return (
    <div id="container" className="w-full flex-col relative flex h-fit overflow-hidden">
      <button className="h-fit transition-all bg-[#E06FE7] duration-300 hover:bg-black p-3 w-full flex flex-row items-center justify-center bg-[#f1f1f1]">
        <motion.div className="spin-donut">🍩</motion.div>
        <div className="font-[helvetica] text-white">Download our App and get 5 Donut Dollars</div>
        <motion.div className="spin-donut">🍩</motion.div>
      </button>
      {/* Navbar */}
      <div className="h-[85vh] relative w-full">
        <div className="w-full absolute h-fit grid grid-cols-3 z-[9]">
          <motion.div initial={{translateY: 10, opacity: 0}} animate={{translateY: 0, opacity: 1, transition: {duration: 0.5}}} className="w-full h-full flex items-center text-[#E06FE7] justify-center py-4 text-2xl font-bold font-[coop] px-[4rem]">
            The Donut Company
          </motion.div>
          <motion.div initial={{translateY: 10, opacity: 0}} animate={{translateY: 0, opacity: 1, transition: {duration: 0.5, delay: 0.5}}} className="w-full font-[coop] text-xl py-4 text-[#E06FE7] h-full flex items-center justify-center gap-6">
            <button>Home</button>
            <button>Menu</button>
            <button>Catering</button>
            <button>About Us</button>
            <button>Contact</button>
          </motion.div>
          <div></div>
        </div>
        <div className="w-full h-full grid grid-cols-2">
          <div className="w-full h-full relative flex items-center justify-center">
            <motion.div className="w-[60%] h-[20rem] flex flex-col rounded">
              <motion.div initial={{translateY: 50, opacity: 0}} animate={{translateY: 0, opacity: 1, transition: {duration: 1}}} className="text-5xl font-[coop] font-bold text-[#E06FE7]">All You Need Is Love...</motion.div>
              <motion.div initial={{translateY: 50, opacity: 0}} animate={{translateY: 0, opacity: 1, transition: {duration: 1}}} className="text-5xl font-[coop] font-bold text-[#E06FE7]">And Donuts</motion.div>
              <motion.div initial={{translateY: 50, opacity: 0}} animate={{translateY: 0, opacity: 1, transition: {duration: 1, delay: 1}}} className="mt-8">
                <button className="rounded-full py-2 px-4 border border-4 text-[#E06FE7] hover:bg-[#E06FE7] transition-all hover:text-white duration-300 flex flex-row font-bold border-[#E06FE7]">
                  <div>M u n c h</div>
                  <div className="ml-4">N o w</div>
                </button>
              </motion.div>
            </motion.div>
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <ThreeDCanvas></ThreeDCanvas>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col bg-[#E06FE7] text-white h-fit">
        <div className="w-full flex items-center justify-center text-4xl font-[coop] text-white mt-[6rem]">
          Donut Rotation
        </div>
        <div className="w-full h-full grid grid-cols-2 px-[10rem]">
          <motion.div style={{ opacity: oreoIsInView ? 1 : 0, transform: oreoIsInView ? "translateX(0px)" : "translateX(-350px)", transition: "all 1s 0.5s" }} className="w-full transition-all h-full flex items-center justify-center">
            <img ref={oreoRef} src={oreoDonut}></img>
          </motion.div>
          <motion.div style={{ opacity: oreoIsInView ? 1 : 0, transform: oreoIsInView ? "translateX(0px)" : "translateX(-350px)", transition: "all 1s 0.5s" }} className="w-full h-full flex flex-col items-center justify-center pr-[12rem]">
            <div className='w-full h-fit flex flex-row text-5xl items-center font-[coop]'>
              <div className="">O r e o</div>
              <div className='ml-8'>D o n u t</div>
            </div>
            <div className="w-full h-fit flex items-center font-[helvetica] text-lg mt-4">Chocolate cake doughnut dipped in dark chocolate glaze and smushed in Oreo crumble & whipped cream center - a customer favorite!</div>
          </motion.div>
          <motion.div style={{ opacity: strawbIsInView ? 1 : 0, transform: strawbIsInView ? "translateX(0px)" : "translateX(350px)", transition: "all 1s 0.5s" }} className='w-full h-full flex flex-col items-center justify-center pl-[12rem]'>
            <div className='w-full h-fit flex flex-row text-5xl items-center font-[coop]'>
              <div className="">Strawberry Coconut Matcha</div>
            </div>
            <div className="w-full h-fit flex items-center font-[helvetica] text-lg mt-4">A vanilla cake doughnut with matcha glaze and shredded coconut</div>
          </motion.div>
          <motion.div style={{ opacity: strawbIsInView ? 1 : 0, transform: strawbIsInView ? "translateX(0px)" : "translateX(350px)", transition: "all 1s 0.5s" }} classNam="w-full h-full flex items-center justify-center">
            <img ref={strawbRef} src={strawbDonut}></img>
          </motion.div>
          <motion.div style={{ opacity: carnivalIsInView ? 1 : 0, transform: carnivalIsInView ? "translateX(0px)" : "translateX(-350px)", transition: "all 1s 0.5s" }} className="w-full h-full flex items-center justify-center">
            <img ref={carnivalRef} src={carnivalDonut}></img>
          </motion.div>
          <motion.div style={{ opacity: carnivalIsInView ? 1 : 0, transform: carnivalIsInView ? "translateX(0px)" : "translateX(-350px)", transition: "all 1s 0.5s" }} className='w-full h-full flex flex-col items-center justify-center pr-[12rem]'>
            <div className='w-full h-fit flex flex-row text-5xl items-center font-[coop]'>
              <div className="">C a r n i v a l</div>
            </div>
            <div className="w-full h-fit flex items-center font-[helvetica] text-lg mt-4">Funfetti cake batter filled doughnut with a Pink swirl glaze and non-peril sprinkles</div>
          </motion.div>
          <motion.div style={{ opacity: cowboyIsInView ? 1 : 0, transform: cowboyIsInView ? "translateX(0px)" : "translateX(350px)", transition: "all 1s 0.5s" }} className='w-full h-full flex flex-col items-center justify-center pl-[12rem]'>
            <div className='w-full h-fit flex flex-row text-5xl items-center font-[coop]'>
              <div className="">C o w b o y</div>
            </div>
            <div className="w-full h-fit flex items-center font-[helvetica] text-lg mt-4">A chocolate cake doughnut with toasted coconut, oats, cornflakes, and pretzel bits drizzled with caramel & chocolate</div>
          </motion.div>
          <motion.div style={{ opacity: cowboyIsInView ? 1 : 0, transform: cowboyIsInView ? "translateX(0px)" : "translateX(350px)", transition: "all 1s 0.5s" }} className="w-full h-full flex items-center justify-center">
            <img ref={cowboyRef} src={cowboyDonut}></img>
          </motion.div>
          <motion.div style={{ opacity: hazelIsInView ? 1 : 0, transform: hazelIsInView ? "translateX(0px)" : "translateX(-350px)", transition: "all 1s 0.5s" }} className="w-full h-full flex items-center justify-center">
            <img ref={hazelRef} src={hazelDonut}></img>
          </motion.div>
          <motion.div style={{ opacity: hazelIsInView ? 1 : 0, transform: hazelIsInView ? "translateX(0px)" : "translateX(-350px)", transition: "all 1s 0.5s" }} className='w-full h-full flex flex-col items-start justify-center pr-[12rem]'>
            <div className='w-full h-fit flex flex-row text-5xl items-start font-[coop]'>
              <div className="">Hazelnut Truffle</div>
            </div>
            <div className="w-full h-fit flex items-center font-[helvetica] text-lg mt-4">Nutella filled doughnut covered in a coco-sugar</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
