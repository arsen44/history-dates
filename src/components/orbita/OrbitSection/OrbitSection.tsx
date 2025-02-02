import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import gsap from "gsap";
import styled from "styled-components";
import { OrbitCircleIcon } from "../Icon/OrbitCircleIcon";
import CenterCircleDate from "../CenterCircleDate/CenterCircleDate";
import Controller from "../Controller/Controller";
import { shouldForwardProp } from "@styled-system/should-forward-prop";

// Types remain the same
interface TimelineItem {
  id: number;
  title: string;
  start: number;
  end: number;
  data: TimelineData[];
}

interface TimelineData {
  year: number;
  text: string;
}

interface OrbitSectionProps {
  data: TimelineItem[];
  onSectionClick: (section: TimelineItem) => void;
  activeSection: TimelineItem | null;
}

// Constants
const ORBIT_RADIUS = 250;
const SMALL_BUTTON_SIZE = 12;
const LARGE_BUTTON_SIZE = 50;

// Styled Components
const OrbitContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const OrbitPath = styled.div`
  display: none;

  @media ${({ theme }) => theme.media.medium} {
    display: flex;
    justify-content: center;
  }
`;

const OrbitCircleIconWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface CircleButtonProps {
  isActive: boolean;
  isHovered: boolean;
  rotationAngle: number;
}

const CircleButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !["isActive", "isHovered", "rotationAngle"].includes(prop),
})<CircleButtonProps>`
  position: absolute;
  width: ${(props) => (props.isActive ? `${LARGE_BUTTON_SIZE}px` : `${SMALL_BUTTON_SIZE}px`)};
  height: ${(props) => (props.isActive ? `${LARGE_BUTTON_SIZE}px` : `${SMALL_BUTTON_SIZE}px`)};
  transform-origin: center center;
  transform: ${({ rotationAngle }) => `
    translate(-50%, -50%) 
    rotate(${rotationAngle}deg)
  `};
  transition: width 0.5s, height 0.5s, font-size 0.5s, box-shadow 0.5s, background-color 0.5s;
  border-radius: 50%;
  color: black;
  font-size: ${(props) => (props.isHovered ? "0.6rem" : "1rem")};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid black;
  background-color: ${(props) => (props.isActive ? "#f5f5f5" : "black")};

  &:hover {
    width: ${LARGE_BUTTON_SIZE}px;
    height: ${LARGE_BUTTON_SIZE}px;
    font-size: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border: 1px solid black;
    color: black;
    background-color: #f5f5f5;
  }
`;

const Content = styled.div`
  width: 100%;
`;

const OrbitSection: React.FC<OrbitSectionProps> = ({ data, activeSection: propActiveSection, onSectionClick }) => {
  const orbitRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<TimelineItem | null>(propActiveSection || null);
  const [rotationAngle, setRotationAngle] = useState(0);

  const calculatePosition = useCallback((index: number, total: number) => {
    const angle = (index * 2 * Math.PI) / total;
    return {
      x: Math.cos(angle) * ORBIT_RADIUS,
      y: Math.sin(angle) * ORBIT_RADIUS,
    };
  }, []);

  const circlePositions = useMemo(() => {
    return data.map((_, index) => calculatePosition(index, data.length));
  }, [data.length, calculatePosition]);

  const handleSectionClick = useCallback(
    (section: TimelineItem) => {
      if (!orbitRef.current) return;

      setActiveSection(section);
      const targetAngle = 360 - (360 / data.length) * section.id;
      setRotationAngle(targetAngle);

      gsap.to(orbitRef.current, {
        rotation: targetAngle,
        duration: 2,
        ease: "power2.out",
      });

      onSectionClick(section);
    },
    [data.length, onSectionClick]
  );

  useEffect(() => {
    if (!activeSection && data.length > 0) {
      setActiveSection(data[0]);
    }
  }, [data, activeSection]);

  const handleNext = () => {
    if (!activeSection) return;

    const currentIndex = data.findIndex((item) => item.id === activeSection.id);
    const nextIndex = (currentIndex + 1) % data.length;
    handleSectionClick(data[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeSection) return;

    const currentIndex = data.findIndex((item) => item.id === activeSection.id);
    const prevIndex = (currentIndex - 1 + data.length) % data.length;
    handleSectionClick(data[prevIndex]);
  };

  return (
    <Content>
      <OrbitContainer>
        <CenterCircleDate activeSection={activeSection} />
        <OrbitPath ref={orbitRef}>
          <OrbitCircleIconWrapper>
            <OrbitCircleIcon radius={500} />
            {data.map((section, index) => {
              const position = circlePositions[index];
              const isActive = activeSection?.id === section.id;

              return (
                <CircleButton
                  key={section.id}
                  isActive={isActive}
                  isHovered={hoveredIndex === section.id}
                  onClick={() => handleSectionClick(section)}
                  onMouseEnter={() => setHoveredIndex(section.id)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  rotationAngle={-rotationAngle}
                  style={{
                    left: `${position.x + ORBIT_RADIUS}px`,
                    top: `${position.y + ORBIT_RADIUS}px`,
                  }}
                >
                  {section.id}
                </CircleButton>
              );
            })}
          </OrbitCircleIconWrapper>
        </OrbitPath>
      </OrbitContainer>
      <Controller onPrev={handlePrev} onNext={handleNext} />
    </Content>
  );
};

export default React.memo(OrbitSection);
