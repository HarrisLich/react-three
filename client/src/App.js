import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { ScrollControls, Sky, useScroll, useAnimations } from '@react-three/drei'

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
    <Canvas id="canvas" camera={{ fov: 75, near: 0.1, far: 1000, position: [2, 1, 2] }} style={{ backgroundColor: "transparent" }}>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <ScrollControls pages={3}>
        <Donut position={[0, 0, 0]}></Donut>
      </ScrollControls>

    </Canvas>
  )
}

function App() {


  return (
    <div id="container" className="w-screen relative flex" style={{ height: "calc(100vh)" }}>
      <div className="w-screen fixed h-screen pointer-events-none">
        <ThreeDCanvas></ThreeDCanvas>
      </div>
      <div className="w-full flex flex-col h-full bg-[#E06FE7]">
        {/* Navbar */}
        <div id="grid1" className="w-full h-[5rem] grid grid-cols-3">
          <div className='relative'>
            <div className="absolute font-[coop] text-4xl w-full h-full flex flex-row items-center justify-center">
              The Donut
            </div>
          </div>
          <div className='relative'>
            <div className="absolute w-full h-full flex flex-row items-center justify-center">

            </div>
          </div>
          <div className='relative'>
            <div className="absolute w-full h-full flex flex-row items-center justify-center">

            </div>
          </div>
        </div>
        {/* End Navbar */}

      </div>
    </div>
  );
}

export default App;
