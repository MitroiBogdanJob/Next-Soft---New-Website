"use client";

import { useEffect } from 'react';

declare global {
  interface Window {
    particlesJS: any;
  }
}

export default function InteractiveParticles() {
  useEffect(() => {
    // Initialize particles if the script is already loaded
    if (window.particlesJS) {
      initParticles();
    } else {
      // If script is not loaded yet, wait for it
      const checkParticlesLoaded = setInterval(() => {
        if (window.particlesJS) {
          clearInterval(checkParticlesLoaded);
          initParticles();
        }
      }, 100);
      
      // Clear interval after 5 seconds to prevent infinite checking
      setTimeout(() => clearInterval(checkParticlesLoaded), 5000);
    }
    
    function initParticles() {
      try {
        window.particlesJS('particles-js', {
          "particles": {
            "number": {
              "value": 30, // Reduced for better performance
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": ["#3f9cb5", "#F26ED6", "#AF58EE", "#7E17CA", "#4F00F9"]
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              }
            },
            "opacity": {
              "value": 0.4,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.2,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 2, // Reduced for better performance
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "grab"
              },
              "onclick": {
                "enable": false,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 140,
                "line_linked": {
                  "opacity": 0.5
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": false // Disabled for better performance
        });
      } catch (error) {
        console.error("Error initializing particles.js:", error);
      }
    }
    
    // Cleanup on component unmount
    return () => {
      // We don't remove the script to prevent flickering when navigating between pages
    };
  }, []);
  
  return null; // This component doesn't render anything visible
}