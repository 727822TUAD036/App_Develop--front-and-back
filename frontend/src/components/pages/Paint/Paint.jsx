import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import './Paint.css';

const Paint = () => {
  const [carColor, setCarColor] = useState('#ffffff'); // Default color: white
  const [scene, setScene] = useState(null);
  const [car, setCar] = useState(null);

  useEffect(() => {
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    setScene(scene);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('three-js-container').appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load('/path/to/your/bmw-model.glb', (gltf) => {
      const model = gltf.scene;
      model.traverse((child) => {
        if (child.isMesh) {
          child.material.color.set(carColor);
        }
      });
      scene.add(model);
      setCar(model);
      camera.position.z = 5;
    });

    const animate = () => {
      requestAnimationFrame(animate);
      if (car) {
        car.rotation.x += 0.01;
        car.rotation.y += 0.01;
      }
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on component unmount
    return () => {
      if (car) {
        scene.remove(car);
        car.traverse((child) => {
          if (child.isMesh) {
            child.material.dispose();
          }
        });
      }
      if (renderer) {
        renderer.dispose();
      }
      const container = document.getElementById('three-js-container');
      if (container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [carColor]);

  useEffect(() => {
    if (car) {
      car.traverse((child) => {
        if (child.isMesh) {
          child.material.color.set(carColor);
        }
      });
    }
  }, [carColor, car]);

  const handleColorChange = (event) => {
    setCarColor(event.target.value);
  };

  const handleColorSelect = (color) => {
    setCarColor(color);
  };

  // List of predefined colors
  const colorOptions = [
    { name: 'White', color: '#ffffff' },
    { name: 'Red', color: '#ff0000' },
    { name: 'Blue', color: '#0000ff' },
    { name: 'Green', color: '#00ff00' },
    { name: 'Black', color: '#000000' },
    { name: 'Gray', color: '#808080' }
  ];

  return (
    <div className="paint-container">
      <header className="paint-header">
        <h1>Paint Your BMW</h1>
        <p>Select a color to see how your car would look!</p>
      </header>
      <section className="paint-body">
        <div id="three-js-container" className="car-display"></div>
        <div className="color-picker">
          <label htmlFor="color">Choose a color:</label>
          <input
            type="color"
            id="color"
            name="color"
            value={carColor}
            onChange={handleColorChange}
          />
        </div>
        <div className="predefined-colors">
          <p>Or choose from predefined colors:</p>
          <div className="color-options">
            {colorOptions.map((option) => (
              <div
                key={option.name}
                className="color-swatch"
                style={{ backgroundColor: option.color }}
                onClick={() => handleColorSelect(option.color)}
                title={option.name}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Paint;
