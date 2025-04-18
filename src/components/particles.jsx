import Particles, { initParticlesEngine } from "@tsparticles/react";
import React from "react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };


  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent", // Use transparent to let your page background show through
        },
      },
      fullScreen: {
        enable: false, // Since you're using a container element
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: true
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          grab: {
            distance: 150,
            links: {
              opacity: 0.7
            }
          },
        },
      },
      particles: {
        color: {
          value: "#008000", // Matching your indigo theme
        },
        links: {
          color: "#008000",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "square",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (!init) {
    return null; // Wait until the particles are initialized
  }

  return (
    <Particles
      id={props.id || "tsparticles"}
      className={props.className}
      loaded={particlesLoaded}
      options={options}
    />
  );
};

export default ParticlesComponent;