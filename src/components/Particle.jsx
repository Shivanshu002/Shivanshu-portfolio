import { useEffect, useState } from "react"; // Importing React hooks
import Particles, { initParticlesEngine } from "@tsparticles/react"; // Importing Particles component and particles engine initializer
import { loadFull } from "tsparticles"; // Importing the full particles configuration loader

export default function Particle() {
  // State hook to track if the particles engine is initialized
  const [init, setInit] = useState(false);

  // useEffect hook to initialize particles engine when the component mounts
  useEffect(() => {
    console.log("init");
    
    // Initialize the particles engine and load all features
    initParticlesEngine(async (engine) => {
      await loadFull(engine); // Load the full set of particle configurations
    }).then(() => {
      setInit(true); // Set init to true once engine is loaded and ready
    });
  }, []); // Empty dependency array means this runs only once when the component mounts

  // Callback function to handle when particles have finished loading
  const particlesLoaded = (container) => {
    // You can perform additional actions here after particles have loaded (currently empty)
  };

  return (
    <>
      {/* Only render particles once the engine is initialized */}
      {init && (
        <Particles
          id="tsparticles" // Set the id for the particles container
          particlesLoaded={particlesLoaded} // Callback when particles are fully loaded
          style={{
            zIndex: -1, // Set z-index to -1 so particles appear behind other content
          }}
          options={{
            background: {
              color: {
                value: "#fff", // Set the background color to white
              },
            },
            fpsLimit: 120, // Limit the frames per second to 120 for smoother animation
            interactivity: {
              events: {
                onClick: {
                  enable: true, // Enable click interaction
                  mode: "push", // Add new particles when clicked
                },
                onHover: {
                  enable: true, // Enable hover interaction
                  mode: "repulse", // Repel particles when hovered
                },
                resize: true, // Adjust particles when the window is resized
              },
              modes: {
                push: {
                  quantity: 4, // When clicked, add 4 new particles
                },
                repulse: {
                  distance: 200, // Repulse particles from the cursor within 200px
                  duration: 0.4, // Repulsion effect lasts for 0.4 seconds
                },
              },
            },
            particles: {
              color: {
                value: "#ed2218", // Set particle color to red (#ed2218)
              },
              links: {
                color: "#f7655e", // Set link color between particles
                distance: 150, // Link distance between particles
                enable: true, // Enable particle links
                opacity: 0.5, // Set link opacity
                width: 1, // Set link width
              },
              move: {
                direction: "none", // No specific direction for particles
                enable: true, // Enable particle movement
                outModes: {
                  default: "bounce", // Particles will bounce when hitting edges
                },
                random: false, // Particles will not move randomly
                speed: 1.2, // Set particle movement speed
                straight: false, // Particles will not move in a straight line
              },
              number: {
                density: {
                  enable: true, // Enable density
                  area: 800, // Set the density area to 800px
                },
                value: 160, // Set the number of particles to 160
              },
              opacity: {
                value: 0.5, // Set particle opacity to 0.5 (semi-transparent)
              },
              shape: {
                type: "circle", // Set the shape of particles to circle
              },
              size: {
                value: { min: 1, max: 5 }, // Set the size range of particles between 1px and 5px
              },
            },
            detectRetina: true, // Enable retina display detection for high-DPI screens
          }}
        />
      )}
    </>
  );
}
