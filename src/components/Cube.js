import React, { useRef } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'

function Cube(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Rotate the mesh every frame
  useFrame(() => {
    mesh.current.rotation.x += 0.01
    mesh.current.rotation.y += 0.01
  })

  return (
    <mesh {...props} ref={mesh} scale={[3, 3, 3]}>
      <boxBufferGeometry />
      <meshStandardMaterial color="blue" />
    </mesh>
  )
}



export default Cube
