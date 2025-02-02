import React, { useState, useRef } from "react";
import styled from "styled-components";
import OrbitSection from "./OrbitSection/OrbitSection";
import DataSection from "./SwiperComponents/DataSection";

// Types
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

interface Props {
  data: TimelineItem[];
  onSectionClick?: (section: TimelineItem) => void;
}

// Styled Components
const Container = styled.div`
  min-height: max-content;

  @media ${({ theme }) => theme.media.medium} {
    min-height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    box-sizing: border-box;
    width: 100%;
    justify-content: center;
    max-width: 1200px; // Максимальная ширина контейнера
    margin: 0 auto; // Центрирование контейнера по горизонтали
    min-height: 100vh; // Использование всей высоты экрана
    gap: 10px;
  }
`;

const OrbitTimeline: React.FC<Props> = ({ data }) => {
  const [activeSection, setActiveSection] = useState<TimelineItem | null>(data.length > 0 ? data[0] : null);

  const handleSectionClick = (section: TimelineItem) => {
    setActiveSection(section);
  };

  return (
    <Container>
      <OrbitSection data={data} activeSection={activeSection} onSectionClick={handleSectionClick} />
      <DataSection activeSection={activeSection} />
    </Container>
  );
};

export default OrbitTimeline;
