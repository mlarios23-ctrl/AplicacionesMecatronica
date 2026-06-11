import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  ChevronUp,
  Play,
  Image as ImageIcon,
  BookOpen,
  Settings,
  Award,
  ExternalLink,
  Activity,
  Truck,
  Cpu,
  Navigation,
  ShieldAlert,
  Home,
  Scissors,
  Sprout,
  Printer,
  User
} from 'lucide-react';
import { mechatronicsApplications, bibliographyList } from './data/applications';

// Map icon names to Lucide components
const iconMap = {
  Activity: Activity,
  Truck: Truck,
  Cpu: Cpu,
  Navigation: Navigation,
  ShieldAlert: ShieldAlert,
  Home: Home,
  Scissors: Scissors,
  Sprout: Sprout,
  Printer: Printer,
  User: User
};

// Decorative circuit board SVG for hero right panel
function HeroCircuitArt() {
  const gearAngles = [0, 45, 90, 135, 180, 225, 270, 315];
  const chipPins = [100, 110, 120];

  return (
    <svg viewBox="0 0 400 400" className="hero-circuit-svg" aria-hidden="true">
      {/* Background rings */}
      <circle cx="200" cy="200" r="168" fill="none" stroke="rgba(99,102,241,0.05)" strokeWidth="1" />
      <circle cx="200" cy="200" r="138" fill="none" stroke="rgba(14,165,233,0.07)" strokeWidth="1" strokeDasharray="6 3" className="hero-ring-slow" />
      <circle cx="200" cy="200" r="98" fill="none" stroke="rgba(13,148,136,0.09)" strokeWidth="1.5" strokeDasharray="3 5" className="hero-ring-reverse" />

      {/* Main axis traces */}
      <line x1="32" y1="200" x2="102" y2="200" stroke="rgba(99,102,241,0.22)" strokeWidth="1.5" />
      <line x1="298" y1="200" x2="368" y2="200" stroke="rgba(99,102,241,0.22)" strokeWidth="1.5" />
      <line x1="200" y1="32" x2="200" y2="102" stroke="rgba(14,165,233,0.22)" strokeWidth="1.5" />
      <line x1="200" y1="298" x2="200" y2="368" stroke="rgba(14,165,233,0.22)" strokeWidth="1.5" />

      {/* Diagonal corner traces */}
      <line x1="82" y1="82" x2="142" y2="142" stroke="rgba(13,148,136,0.18)" strokeWidth="1.5" />
      <line x1="318" y1="82" x2="258" y2="142" stroke="rgba(13,148,136,0.18)" strokeWidth="1.5" />
      <line x1="82" y1="318" x2="142" y2="258" stroke="rgba(13,148,136,0.18)" strokeWidth="1.5" />
      <line x1="318" y1="318" x2="258" y2="258" stroke="rgba(13,148,136,0.18)" strokeWidth="1.5" />

      {/* L-bend traces */}
      <path d="M 102 200 L 102 160 L 142 160" fill="none" stroke="rgba(99,102,241,0.14)" strokeWidth="1.5" />
      <path d="M 298 200 L 298 240 L 258 240" fill="none" stroke="rgba(99,102,241,0.14)" strokeWidth="1.5" />
      <path d="M 200 102 L 240 102 L 240 142" fill="none" stroke="rgba(14,165,233,0.14)" strokeWidth="1.5" />
      <path d="M 200 298 L 160 298 L 160 258" fill="none" stroke="rgba(14,165,233,0.14)" strokeWidth="1.5" />

      {/* Inner axis nodes */}
      <circle cx="102" cy="200" r="5" fill="rgba(99,102,241,0.35)" />
      <circle cx="298" cy="200" r="5" fill="rgba(99,102,241,0.35)" />
      <circle cx="200" cy="102" r="5" fill="rgba(14,165,233,0.35)" />
      <circle cx="200" cy="298" r="5" fill="rgba(14,165,233,0.35)" />
      <circle cx="142" cy="142" r="4" fill="rgba(13,148,136,0.35)" />
      <circle cx="258" cy="142" r="4" fill="rgba(13,148,136,0.35)" />
      <circle cx="142" cy="258" r="4" fill="rgba(13,148,136,0.35)" />
      <circle cx="258" cy="258" r="4" fill="rgba(13,148,136,0.35)" />

      {/* L-bend corner nodes */}
      <circle cx="142" cy="160" r="3" fill="rgba(99,102,241,0.25)" />
      <circle cx="258" cy="240" r="3" fill="rgba(99,102,241,0.25)" />
      <circle cx="240" cy="142" r="3" fill="rgba(14,165,233,0.25)" />
      <circle cx="160" cy="258" r="3" fill="rgba(14,165,233,0.25)" />

      {/* Outer pulsing nodes */}
      <circle cx="32" cy="200" r="6" fill="var(--accent-cyan)" className="hero-pulse delay-0" />
      <circle cx="368" cy="200" r="6" fill="var(--accent-cyan)" className="hero-pulse delay-1" />
      <circle cx="200" cy="32" r="6" fill="var(--accent-purple)" className="hero-pulse delay-2" />
      <circle cx="200" cy="368" r="6" fill="var(--accent-purple)" className="hero-pulse delay-3" />
      <circle cx="82" cy="82" r="5" fill="rgba(13,148,136,0.7)" className="hero-pulse delay-4" />
      <circle cx="318" cy="82" r="5" fill="rgba(13,148,136,0.7)" className="hero-pulse delay-5" />
      <circle cx="82" cy="318" r="5" fill="rgba(13,148,136,0.7)" className="hero-pulse delay-6" />
      <circle cx="318" cy="318" r="5" fill="rgba(13,148,136,0.7)" className="hero-pulse delay-7" />

      {/* Central spinning gear */}
      <circle cx="200" cy="200" r="52" fill="rgba(99,102,241,0.03)" stroke="rgba(99,102,241,0.18)" strokeWidth="1.5" className="hero-center-spin" />
      <circle cx="200" cy="200" r="36" fill="rgba(99,102,241,0.05)" stroke="rgba(99,102,241,0.12)" strokeWidth="1" />
      <circle cx="200" cy="200" r="20" fill="rgba(99,102,241,0.08)" stroke="rgba(99,102,241,0.3)" strokeWidth="2" />
      <circle cx="200" cy="200" r="8" fill="var(--accent-purple)" opacity="0.9" />

      {gearAngles.map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <line
            key={`gt-${i}`}
            x1={200 + Math.cos(rad) * 52}
            y1={200 + Math.sin(rad) * 52}
            x2={200 + Math.cos(rad) * 64}
            y2={200 + Math.sin(rad) * 64}
            stroke="rgba(99,102,241,0.35)"
            strokeWidth="5"
            strokeLinecap="round"
            className="hero-center-spin"
          />
        );
      })}

      {/* MCU chip — top right */}
      <rect x="268" y="88" width="64" height="44" rx="4" fill="rgba(13,148,136,0.06)" stroke="rgba(13,148,136,0.28)" strokeWidth="1.5" />
      {chipPins.map((y, i) => (
        <React.Fragment key={`cp-${i}`}>
          <line x1="272" y1={y} x2="260" y2={y} stroke="rgba(13,148,136,0.35)" strokeWidth="1.5" />
          <line x1="328" y1={y} x2="340" y2={y} stroke="rgba(13,148,136,0.35)" strokeWidth="1.5" />
        </React.Fragment>
      ))}
      <text x="300" y="116" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="rgba(13,148,136,0.55)">MCU</text>

      {/* Capacitor — bottom left */}
      <line x1="72" y1="285" x2="72" y2="315" stroke="rgba(14,165,233,0.25)" strokeWidth="1.5" />
      <line x1="62" y1="295" x2="82" y2="295" stroke="rgba(14,165,233,0.45)" strokeWidth="2.5" />
      <line x1="62" y1="306" x2="82" y2="306" stroke="rgba(14,165,233,0.45)" strokeWidth="2.5" />

      {/* Resistor — top left */}
      <rect x="64" y="82" width="32" height="14" rx="2" fill="rgba(99,102,241,0.08)" stroke="rgba(99,102,241,0.3)" strokeWidth="1.5" />
      <line x1="54" y1="89" x2="64" y2="89" stroke="rgba(99,102,241,0.3)" strokeWidth="1.5" />
      <line x1="96" y1="89" x2="106" y2="89" stroke="rgba(99,102,241,0.3)" strokeWidth="1.5" />

      {/* Extra traces connecting components to the grid */}
      <line x1="106" y1="89" x2="142" y2="89" stroke="rgba(99,102,241,0.1)" strokeWidth="1" />
      <line x1="340" y1="110" x2="368" y2="110" stroke="rgba(13,148,136,0.14)" strokeWidth="1" />
      <line x1="72" y1="315" x2="72" y2="368" stroke="rgba(14,165,233,0.14)" strokeWidth="1" />
    </svg>
  );
}

// Interactive Canvas Particles Component
function InteractiveParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let particles = [];
    const particleCount = 40;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
        this.color = Math.random() > 0.5 ? 'rgba(99, 102, 241, 0.12)' : 'rgba(13, 148, 136, 0.12)';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;

        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.05 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -2, pointerEvents: 'none' }} />;
}

// ScrollReveal component using Intersection Observer for entrance animations
function ScrollReveal({ children, className = "" }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Reveal only once
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -80px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-element ${isVisible ? 'active' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeSection, setActiveSection] = useState('portada');

  // Venn interactive explanation modal state
  const [activeVennConcept, setActiveVennConcept] = useState(null);

  const vennConcepts = {
    mec: {
      title: "Mecánica (Soporte & Movilidad)",
      desc: "Representa el esqueleto y los músculos del sistema. Comprende el diseño estructural, la cinemática de articulaciones, los engranajes reductores y los actuadores que realizan el trabajo físico.",
      examples: "Chasis del AMR, articulaciones de fibra de carbono de la prótesis, engranajes Harmonic Drive del brazo robótico."
    },
    ele: {
      title: "Electrónica (Captación & Energía)",
      desc: "El sistema nervioso y circulatorio. Integra sensores (LiDAR, EMG, encoders) que capturan la información física, circuitos impresos (PCB) de acondicionamiento de señal y servocontroladores que suministran potencia a los actuadores.",
      examples: "Placas controladoras, sensores de efecto Hall del ABS, baterías de litio de alta densidad."
    },
    con: {
      title: "Control & Software (Cerebro)",
      desc: "El intelecto lógico. Diseña e implementa la programación de firmwares de tiempo real, algoritmos PID, lógica de seguridad crítica y modelos avanzados de computación (SLAM, visión artificial) para la toma de decisiones.",
      examples: "Filtro de Kalman para estabilizar drones, mapeo de nubes de puntos SLAM en robots móviles, firmware Marlin en impresoras 3D."
    }
  };

  // Track scroll percentage and active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollPercent(percent);

      setShowScrollTop(scrollTop > 400);

      const sections = ['portada', 'introduccion', 'aplicaciones', 'bibliografia'];
      const scrollPos = scrollTop + 220;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'portada', label: 'Portada' },
    { id: 'introduccion', label: 'Introducción' },
    { id: 'aplicaciones', label: 'Aplicaciones' },
    { id: 'bibliografia', label: 'Bibliografía' },
  ];

  // Render tech figure inline for each application
  const renderTechnicalFigure = (id) => {
    switch (id) {
      case 1: // Prótesis Biónicas (Mano Mecánica)
        return (
          <svg viewBox="0 0 100 100" className="svg-figure fig-bionics-hand">
            <path d="M10,40 L35,42 L35,58 L10,60 Z" fill="rgba(99, 102, 241, 0.1)" stroke="var(--text-secondary)" strokeWidth="1.5" />
            <rect x="20" y="45" width="10" height="10" fill="var(--accent-purple)" opacity="0.4" />
            <circle cx="42" cy="50" r="6" fill="var(--accent-cyan)" stroke="var(--text-primary)" strokeWidth="1.5" />
            <path d="M48,42 L68,44 L70,56 L48,58 Z" fill="none" stroke="var(--text-primary)" strokeWidth="2" />
            <path d="M52,45 L64,47 L65,53 L52,55 Z" fill="var(--accent-purple)" opacity="0.2" />
            <g className="bionic-finger finger-thumb">
              <line x1="55" y1="56" x2="62" y2="68" stroke="var(--accent-purple)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="62" y1="68" x2="72" y2="72" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" />
            </g>
            <g className="bionic-finger finger-index">
              <line x1="68" y1="44" x2="82" y2="42" stroke="var(--accent-purple)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="82" y1="42" x2="92" y2="42" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" />
            </g>
            <g className="bionic-finger finger-middle">
              <line x1="68" y1="48" x2="84" y2="48" stroke="var(--accent-purple)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="84" y1="48" x2="95" y2="48" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" />
            </g>
            <g className="bionic-finger finger-ring">
              <line x1="68" y1="52" x2="82" y2="54" stroke="var(--accent-purple)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="82" y1="54" x2="92" y2="56" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" />
            </g>
          </svg>
        );
      case 2: // AMR (Robot Móvil de Almacén)
        return (
          <svg viewBox="0 0 100 100" className="svg-figure fig-warehouse-amr">
            <line x1="10" y1="80" x2="90" y2="80" stroke="rgba(15, 23, 42, 0.05)" strokeWidth="1" />
            <line x1="10" y1="20" x2="90" y2="20" stroke="rgba(15, 23, 42, 0.05)" strokeWidth="1" />
            <rect x="25" y="25" width="50" height="50" rx="8" fill="#ffffff" stroke="var(--text-primary)" strokeWidth="2" />
            <rect x="28" y="28" width="44" height="44" rx="4" fill="rgba(14, 165, 233, 0.05)" stroke="none" />
            <rect x="20" y="32" width="5" height="18" rx="2" fill="var(--text-secondary)" />
            <rect x="75" y="32" width="5" height="18" rx="2" fill="var(--text-secondary)" />
            <circle cx="50" cy="67" r="4" fill="var(--text-muted)" />
            <circle cx="50" cy="45" r="14" fill="none" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="50" cy="45" r="8" fill="var(--accent-purple)" opacity="0.3" />
            <circle cx="50" cy="45" r="4" fill="var(--accent-purple)" />
            <line x1="50" y1="45" x2="85" y2="25" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" className="radar-sweep-beam" />
            <circle cx="85" cy="25" r="3.5" fill="var(--accent-cyan)" className="radar-detected-dot" />
          </svg>
        );
      case 3: // Brazos Robóticos (Brazo Articulado de Fábrica)
        return (
          <svg viewBox="0 0 100 100" className="svg-figure fig-industrial-manipulator">
            <path d="M15,85 L35,85 L30,75 L20,75 Z" fill="var(--text-secondary)" />
            <rect x="22" y="70" width="6" height="5" fill="var(--text-primary)" />
            <circle cx="25" cy="68" r="6" fill="var(--accent-purple)" stroke="var(--text-primary)" strokeWidth="1" />
            <g className="manipulator-link link-arm1">
              <rect x="22" y="38" width="6" height="30" rx="3" fill="var(--accent-purple)" stroke="none" />
              <circle cx="25" cy="38" r="5" fill="var(--accent-cyan)" />
              <g className="manipulator-link link-arm2">
                <rect x="22" y="8" width="6" height="30" rx="3" fill="var(--accent-cyan)" stroke="none" />
                <circle cx="25" cy="8" r="3.5" fill="var(--text-primary)" />
                <g className="manipulator-gripper">
                  <path d="M21,-2 L21,8 L29,8 L29,-2" fill="none" stroke="var(--text-primary)" strokeWidth="1.5" />
                  <path d="M18,-6 L18,-2 L21,-2" fill="none" stroke="var(--accent-purple)" strokeWidth="1.5" className="gripper-finger gripper-left" />
                  <path d="M32,-6 L32,-2 L29,-2" fill="none" stroke="var(--accent-purple)" strokeWidth="1.5" className="gripper-finger gripper-right" />
                  <rect x="21" y="-14" width="8" height="8" fill="var(--accent-cyan)" className="picked-box" />
                </g>
              </g>
            </g>
          </svg>
        );
      case 4: // Drones (Cuadricóptero)
        return (
          <svg viewBox="0 0 100 100" className="svg-figure fig-quadcopter-drone">
            <g className="drone-hover-physics">
              <line x1="22" y1="22" x2="78" y2="78" stroke="var(--text-secondary)" strokeWidth="3" />
              <line x1="78" y1="22" x2="22" y2="78" stroke="var(--text-secondary)" strokeWidth="3" />
              <circle cx="22" cy="22" r="5" fill="var(--text-primary)" />
              <circle cx="78" cy="22" r="5" fill="var(--text-primary)" />
              <circle cx="22" cy="78" r="5" fill="var(--text-primary)" />
              <circle cx="78" cy="78" r="5" fill="var(--text-primary)" />
              <g className="drone-prop-wrap prop-tl">
                <ellipse cx="22" cy="22" rx="15" ry="3" fill="none" stroke="var(--accent-cyan)" strokeWidth="1.5" />
              </g>
              <g className="drone-prop-wrap prop-tr">
                <ellipse cx="78" cy="22" rx="15" ry="3" fill="none" stroke="var(--accent-cyan)" strokeWidth="1.5" />
              </g>
              <g className="drone-prop-wrap prop-bl">
                <ellipse cx="22" cy="78" rx="15" ry="3" fill="none" stroke="var(--accent-cyan)" strokeWidth="1.5" />
              </g>
              <g className="drone-prop-wrap prop-br">
                <ellipse cx="78" cy="78" rx="15" ry="3" fill="none" stroke="var(--accent-cyan)" strokeWidth="1.5" />
              </g>
              <circle cx="50" cy="50" r="15" fill="#ffffff" stroke="var(--accent-purple)" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="10" fill="rgba(99, 102, 241, 0.05)" />
              <circle cx="50" cy="50" r="5" fill="var(--accent-cyan)" />
            </g>
          </svg>
        );
      case 5: // ABS/ESP (Ensamblaje de Disco y Mordaza)
        return (
          <svg viewBox="0 0 100 100" className="svg-figure fig-abs-wheel">
            <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(15, 23, 42, 0.04)" strokeWidth="4" />
            <circle cx="50" cy="50" r="28" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeDasharray="5 5" className="wheel-brake-disc" />
            <circle cx="50" cy="50" r="18" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="8" fill="#ffffff" stroke="var(--text-primary)" strokeWidth="2" />
            <path d="M 68,32 A 26 26 0 0 1 76,52" fill="none" stroke="var(--accent-purple)" strokeWidth="7" strokeLinecap="round" className="brake-caliper-clamp" />
            <line x1="50" y1="2" x2="50" y2="22" stroke="var(--accent-cyan)" strokeWidth="1.5" strokeDasharray="3 2" />
            <rect x="47" y="18" width="6" height="5" fill="var(--accent-cyan)" />
            <circle cx="50" cy="50" r="36" fill="none" stroke="var(--accent-cyan)" strokeWidth="1.5" className="abs-feedback-pulse" />
          </svg>
        );
      case 6: // Aspiradoras Robotizadas (Roomba Limpiando Partículas)
        return (
          <svg viewBox="0 0 100 100" className="svg-figure fig-robot-vacuum">
            <rect x="10" y="10" width="80" height="80" rx="4" fill="none" stroke="rgba(15, 23, 42, 0.05)" strokeWidth="2" />
            <circle cx="28" cy="28" r="2" fill="var(--accent-cyan)" className="dust-dot dust-1" />
            <circle cx="72" cy="32" r="2" fill="var(--accent-cyan)" className="dust-dot dust-2" />
            <circle cx="32" cy="68" r="2" fill="var(--accent-cyan)" className="dust-dot dust-3" />
            <circle cx="68" cy="72" r="2" fill="var(--accent-cyan)" className="dust-dot dust-4" />
            <g className="vacuum-cleaner-body">
              <circle cx="0" cy="0" r="13" fill="#ffffff" stroke="var(--accent-blue)" strokeWidth="2" />
              <path d="M-11,-7 A13 13 0 0 1 11,-7" fill="none" stroke="var(--text-primary)" strokeWidth="2" />
              <line x1="-10" y1="-8" x2="-16" y2="-14" stroke="var(--text-muted)" strokeWidth="1.5" className="sweeper-brush brush-l" />
              <line x1="10" y1="-8" x2="16" y2="-14" stroke="var(--text-muted)" strokeWidth="1.5" className="sweeper-brush brush-r" />
              <circle cx="0" cy="4" r="3.5" fill="var(--accent-purple)" />
            </g>
          </svg>
        );
      case 7: // Cirugía Robótica (Herramienta Quirúrgica en Tejido)
        return (
          <svg viewBox="0 0 100 100" className="svg-figure fig-surgical-tool">
            <circle cx="50" cy="70" r="10" fill="rgba(13, 148, 136, 0.08)" stroke="var(--accent-blue)" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="50" cy="70" r="5" fill="var(--accent-blue)" opacity="0.3" className="surgery-target-pulse" />
            <rect x="47" y="10" width="6" height="40" fill="var(--text-secondary)" />
            <circle cx="50" cy="50" r="4.5" fill="var(--text-primary)" />
            <g className="surgical-gripper jaw-left">
              <path d="M48,51 L36,68 L42,70" fill="none" stroke="var(--accent-purple)" strokeWidth="2" strokeLinecap="round" />
            </g>
            <g className="surgical-gripper jaw-right">
              <path d="M52,51 L64,68 L58,70" fill="none" stroke="var(--accent-purple)" strokeWidth="2" strokeLinecap="round" />
            </g>
            <line x1="50" y1="50" x2="50" y2="70" stroke="red" strokeWidth="1.5" strokeDasharray="2 2" className="surgical-laser" />
          </svg>
        );
      case 8: // Tractores Autónomos (Siembra en Surco y GPS)
        return (
          <svg viewBox="0 0 100 100" className="svg-figure fig-gps-tractor">
            <path d="M50,12 L25,82 L75,82 Z" fill="none" stroke="rgba(14, 165, 233, 0.08)" className="sat-beam-fill" />
            <line x1="10" y1="82" x2="90" y2="82" stroke="#b45309" strokeWidth="2" />
            <line x1="10" y1="88" x2="90" y2="88" stroke="#78350f" strokeWidth="2" />
            <g className="farming-sat">
              <rect x="42" y="6" width="16" height="8" rx="1.5" fill="var(--text-secondary)" />
              <line x1="38" y1="10" x2="62" y2="10" stroke="var(--accent-cyan)" strokeWidth="2" />
            </g>
            <g className="autonomous-tractor-group">
              <rect x="-18" y="-12" width="36" height="18" rx="2" fill="var(--accent-blue)" />
              <path d="M-8,-12 L4,-12 L8,-2 L-12,-2 Z" fill="rgba(15, 23, 42, 0.8)" stroke="none" />
              <line x1="-12" y1="-12" x2="-12" y2="-18" stroke="var(--text-primary)" strokeWidth="2.5" />
              <circle cx="-10" cy="8" r="8" fill="var(--text-primary)" stroke="#ffffff" strokeWidth="1.5" className="tractor-wheel-rot" />
              <circle cx="11" cy="9" r="6" fill="var(--text-primary)" stroke="#ffffff" strokeWidth="1.5" className="tractor-wheel-rot" />
            </g>
          </svg>
        );
      case 9: // Impresión 3D (Cámara con Pieza en Construcción)
        return (
          <svg viewBox="0 0 100 100" className="svg-figure fig-3d-print">
            <rect x="15" y="15" width="70" height="70" fill="none" stroke="rgba(15, 23, 42, 0.08)" strokeWidth="2" />
            <rect x="22" y="78" width="56" height="4" fill="var(--text-secondary)" />
            <path d="M 38,78 L 42,54 L 58,54 L 62,78 Z" fill="rgba(14, 165, 233, 0.15)" stroke="var(--accent-cyan)" strokeWidth="2" className="printed-vase-mesh" />
            <g className="printer-gantry-axis">
              <line x1="18" y1="52" x2="82" y2="52" stroke="var(--text-primary)" strokeWidth="2.5" />
              <g className="printer-nozzle-head">
                <rect x="-6" y="-10" width="12" height="10" fill="var(--accent-purple)" />
                <path d="M-3,0 L3,0 L0,5 Z" fill="var(--accent-purple)" />
                <circle cx="0" cy="5" r="1.5" fill="var(--accent-cyan)" className="extruder-glow-point" />
              </g>
            </g>
          </svg>
        );
      case 10: // Robots Humanoides (Esqueleto Mecánico y Gravedad)
        return (
          <svg viewBox="0 0 100 100" className="svg-figure fig-humanoid-posture">
            <circle cx="50" cy="48" r="42" fill="none" stroke="rgba(99, 102, 241, 0.05)" strokeWidth="1" />
            <circle cx="50" cy="48" r="32" fill="none" stroke="rgba(99, 102, 241, 0.05)" strokeWidth="1" strokeDasharray="3 2" />
            <line x1="25" y1="84" x2="75" y2="84" stroke="var(--text-secondary)" strokeWidth="1.5" />
            <g className="humanoid-torso-stabilizer">
              <circle cx="50" cy="22" r="5.5" fill="var(--text-primary)" />
              <line x1="50" y1="28" x2="50" y2="52" stroke="var(--text-primary)" strokeWidth="3.5" />
              <circle cx="50" cy="31" r="2.5" fill="var(--accent-purple)" />
              <g className="humanoid-limbs left-arm">
                <line x1="50" y1="31" x2="40" y2="46" stroke="var(--text-secondary)" strokeWidth="2" />
                <line x1="40" y1="46" x2="35" y2="58" stroke="var(--accent-cyan)" strokeWidth="1.5" />
              </g>
              <g className="humanoid-limbs right-arm">
                <line x1="50" y1="31" x2="60" y2="46" stroke="var(--text-secondary)" strokeWidth="2" />
                <line x1="60" y1="46" x2="66" y2="58" stroke="var(--accent-cyan)" strokeWidth="1.5" />
              </g>
              <circle cx="50" cy="52" r="3" fill="var(--accent-purple)" />
              <g className="humanoid-limbs left-leg">
                <line x1="50" y1="52" x2="44" y2="68" stroke="var(--text-primary)" strokeWidth="2.5" />
                <line x1="44" y1="68" x2="44" y2="84" stroke="var(--accent-purple)" strokeWidth="2" />
              </g>
              <g className="humanoid-limbs right-leg">
                <line x1="50" y1="52" x2="56" y2="68" stroke="var(--text-primary)" strokeWidth="2.5" />
                <line x1="56" y1="68" x2="62" y2="84" stroke="var(--accent-purple)" strokeWidth="2" />
              </g>
              <circle cx="50" cy="42" r="3.5" fill="var(--accent-cyan)" className="balance-dot-feedback" />
              <line x1="50" y1="42" x2="50" y2="84" stroke="var(--accent-cyan)" strokeWidth="1.5" strokeDasharray="3 3" className="balance-vector-vertical" />
            </g>
          </svg>
        );
      default:
        return <div className="fig-wrapper"></div>;
    }
  };

  return (
    <div className="app-viewport">

      {/* Interactive Background Particles */}
      <InteractiveParticles />

      {/* Scroll Progress Indicator */}
      <div className="scroll-progress-bar" style={{ width: `${scrollPercent}%` }}></div>

      {/* Floating Header Navbar — pill style */}
      <header className="navbar-header">
        <div className="logo-wrap" onClick={() => scrollToSection('portada')}>
          <Settings className="animate-spin" size={22} style={{ color: 'var(--accent-purple)', animationDuration: '20s' }} />
          <span className="logo-text">Mecatrónica</span>
        </div>

        <button
          className="mobile-nav-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`nav-menu-list ${mobileMenuOpen ? 'open' : ''}`}>
          {navItems.map(({ id, label }) => (
            <li key={id} className={`nav-menu-item ${activeSection === id ? 'active' : ''}`}>
              <a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollToSection(id); }}>{label}</a>
            </li>
          ))}
        </ul>
      </header>

      {/* Main Hub Container */}
      <main className="hub-container">

        {/* SECTION 1: PORTADA — Split Screen Hero */}
        <section id="portada">
          <ScrollReveal className="hero-split-panel glass-panel">
            <div className="hero-glow-blob"></div>

            {/* Left: Text content */}
            <div className="hero-left">
              <div className="hero-badges">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Escudo_de_la_Universidad_de_Colima.svg/240px-Escudo_de_la_Universidad_de_Colima.svg.png"
                  alt="Escudo Universidad de Colima"
                  className="hero-badge-logo"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <svg viewBox="0 0 100 100" className="hero-badge-fie">
                  <circle cx="50" cy="50" r="30" fill="none" stroke="var(--accent-purple)" strokeWidth="3.5" strokeDasharray="14 5" className="animate-spin" style={{ animationDuration: '30s', transformOrigin: 'center center' }} />
                  <circle cx="50" cy="50" r="20" fill="none" stroke="var(--accent-cyan)" strokeWidth="1.5" />
                  <circle cx="50" cy="30" r="3.5" fill="var(--accent-cyan)" />
                  <circle cx="30" cy="50" r="3.5" fill="var(--accent-cyan)" />
                  <text x="50" y="56" textAnchor="middle" fontFamily="var(--font-heading)" fontWeight="800" fontSize="17" fill="var(--text-primary)">FIE</text>
                </svg>
              </div>

              <p className="hero-institution">Universidad de Colima</p>
              <p className="hero-faculty">Facultad de Ingeniería Electromecánica (FIE)</p>

              <h1 className="hero-title">Aplicaciones de la Mecatrónica</h1>
              <p className="hero-subtitle">
                Un Hub interactivo y modular que explora la sinergia e interconexión práctica entre la mecánica, la electrónica, los sistemas de control y la programación.
              </p>

              <div className="hero-card-grid">
                <div className="hero-info-card">
                  <span className="hero-info-label">Alumno</span>
                  <span className="hero-info-val">María José L.</span>
                </div>
                <div className="hero-info-card">
                  <span className="hero-info-label">Carrera</span>
                  <span className="hero-info-val">Ing. Mecatrónica</span>
                </div>
                <div className="hero-info-card">
                  <span className="hero-info-label">Grado y Grupo</span>
                  <span className="hero-info-val">8° C</span>
                </div>
                <div className="hero-info-card">
                  <span className="hero-info-label">Fecha</span>
                  <span className="hero-info-val">10/06/2026</span>
                </div>
              </div>

              <button className="hero-cta-btn" onClick={() => scrollToSection('introduccion')}>
                <span>Comenzar Exploración</span>
                <Play size={16} fill="white" />
              </button>
            </div>

            {/* Right: Decorative circuit art */}
            <div className="hero-right">
              <HeroCircuitArt />
            </div>
          </ScrollReveal>
        </section>

        {/* SECTION 2: INTRODUCCION */}
        <section id="introduccion">
          <ScrollReveal className="glass-panel">
            <div className="intro-layout">
              <div className="intro-desc">
                <span className="section-tag">Fundamentación</span>
                <h2>Sinergia Multidisciplinaria</h2>
                <p>
                  La mecatrónica representa una <strong>filosofía ingenieril integradora</strong> en la que la mecánica, la electrónica, los sistemas de control y el desarrollo de software se unen de forma simultánea.
                </p>
                <p style={{ marginTop: '12px' }}>
                  <strong>Haz clic en las áreas del diagrama</strong> para descubrir cómo aporta cada pilar al desarrollo de estas tecnologías.
                </p>

                {/* Venn concept info panel — inline on left side */}
                {activeVennConcept && (
                  <div className="venn-info-panel" style={{ animation: 'fadeIn 0.3s ease-out' }}>
                    <div className="venn-info-header">
                      <h4>{vennConcepts[activeVennConcept].title}</h4>
                      <button onClick={() => setActiveVennConcept(null)} className="venn-close-btn" aria-label="Cerrar">
                        <X size={14} />
                      </button>
                    </div>
                    <p className="venn-info-desc">{vennConcepts[activeVennConcept].desc}</p>
                    <p className="venn-info-examples"><strong>Ejemplos:</strong> {vennConcepts[activeVennConcept].examples}</p>
                  </div>
                )}
              </div>

              <div className="venn-container">
                <div className="venn-chart">
                  <div className="venn-node mec" onClick={() => setActiveVennConcept('mec')}>
                    <span>Mecánica</span>
                  </div>
                  <div className="venn-node ele" onClick={() => setActiveVennConcept('ele')}>
                    <span>Electrónica</span>
                  </div>
                  <div className="venn-node con" onClick={() => setActiveVennConcept('con')}>
                    <span>Control &<br />Software</span>
                  </div>
                  <div className="venn-core" onClick={() => setActiveVennConcept(null)}>
                    <span>Meca-<br />trónica</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* SECTION 3: 10 APLICACIONES — Alternating layout */}
        <section id="aplicaciones">
          <div className="section-header-wrap">
            <span className="section-tag">Desarrollo</span>
            <h2 className="section-main-title">10 Aplicaciones Prácticas</h2>
          </div>

          {mechatronicsApplications.map((app) => {
            return (
              <ScrollReveal key={app.id} className={`glass-panel app-card ${app.id % 2 === 0 ? 'card-even' : 'card-odd'}`}>

                {/* Giant decorative background number */}
                <span className="app-card-big-number" aria-hidden="true">
                  {String(app.id).padStart(2, '0')}
                </span>

                {/* Info and pillars */}
                <div className="app-card-top">
                  <div className="app-card-info">
                    <span className="app-card-index">{String(app.id).padStart(2, '0')} / Aplicación</span>
                    <h3 className="app-card-title">{app.title}</h3>
                    <p className="app-card-desc">{app.fullDescription}</p>
                  </div>

                  <div className="app-card-pillars">
                    <h4 className="pillars-heading">Integración Mecatrónica</h4>
                    <div className="pillars-grid">
                      <div className="pillar-item">
                        <span className="pillar-title">Mecánica</span>
                        <p className="pillar-desc">{app.integration.mechanical}</p>
                      </div>
                      <div className="pillar-item">
                        <span className="pillar-title">Electrónica</span>
                        <p className="pillar-desc">{app.integration.electronic}</p>
                      </div>
                      <div className="pillar-item">
                        <span className="pillar-title">Control</span>
                        <p className="pillar-desc">{app.integration.control}</p>
                      </div>
                      <div className="pillar-item">
                        <span className="pillar-title">Software</span>
                        <p className="pillar-desc">{app.integration.software}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Media block — figure and video */}
                <div className="app-card-media-grid">

                  {/* Technical Figure */}
                  <div className="media-block figure-block">
                    <span className="media-block-title">
                      <ImageIcon size={14} />
                      <span>Figura Técnica</span>
                    </span>
                    <div className="media-display-box">
                      <div className="fig-canvas">
                        <div className="fig-blueprint-grid"></div>
                        <div className="fig-art-wrapper">
                          {renderTechnicalFigure(app.id)}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Video Demo */}
                  <div className="media-block video-block">
                    <span className="media-block-title">
                      <Play size={14} />
                      <span>Video Demostrativo (Máx. 3m)</span>
                    </span>
                    <div className="media-display-box">
                      <iframe
                        className="yt-iframe-wrap"
                        src={`https://www.youtube.com/embed/${app.youtubeId}?autoplay=0&rel=0`}
                        title={`Demostración de ${app.title}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>

                </div>

              </ScrollReveal>
            );
          })}
        </section>

        {/* SECTION 4: BIBLIOGRAFIA — Vertical Timeline */}
        <section id="bibliografia">
          <ScrollReveal className="glass-panel">
            <div className="section-header-wrap" style={{ marginBottom: '48px' }}>
              <span className="section-tag">Sustento Teórico</span>
              <h2 className="section-main-title">Bibliografía Académica</h2>
            </div>

            <div className="biblio-timeline">
              {bibliographyList.map((bib, index) => (
                <div key={bib.id} className={`biblio-timeline-item ${index % 2 === 0 ? 'tl-left' : 'tl-right'}`}>
                  <div className="biblio-tl-dot">
                    <span>{bib.id}</span>
                  </div>
                  <div className="biblio-tl-card">
                    <span className="biblio-cat">{bib.category}</span>
                    <p className="biblio-citation">
                      <strong>{bib.author}</strong> <em>{bib.title}</em> {bib.publisher}
                    </p>
                    <a
                      href={bib.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="biblio-link-btn"
                      title="Acceder al recurso académico"
                    >
                      <ExternalLink size={13} />
                      <span>Ver recurso</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

      </main>

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          className="back-to-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Volver al inicio"
        >
          <ChevronUp size={24} />
        </button>
      )}

      {/* Footer Bar */}
      <footer className="footer-bar">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '16px', opacity: 0.7 }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Escudo_de_la_Universidad_de_Colima.svg/240px-Escudo_de_la_Universidad_de_Colima.svg.png"
            alt="UCOL"
            style={{ height: '36px', objectFit: 'contain' }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <svg viewBox="0 0 100 100" style={{ width: '36px', height: '36px' }}>
            <circle cx="50" cy="50" r="30" fill="none" stroke="var(--accent-purple)" strokeWidth="4" strokeDasharray="14 6" />
            <text x="50" y="56" textAnchor="middle" fontFamily="var(--font-heading)" fontWeight="800" fontSize="18" fill="var(--text-primary)">FIE</text>
          </svg>
        </div>
        <p>© 2026 - María José Larios de la Cruz. Todos los derechos reservados.</p>
        <p style={{ marginTop: '8px', fontSize: '0.78rem', opacity: 0.7 }}>Facultad de Ingeniería Electromecánica - Universidad de Colima</p>
      </footer>

    </div>
  );
}
