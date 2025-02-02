import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styled from "styled-components";

interface TimelineItem {
  id: number;
  title: string;
  start: number;
  end: number;
  data: Array<{ year: number; text: string }>;
}

interface CenterCircleDateProps {
  activeSection: TimelineItem | null;
}

const DateContainer = styled.div`
  position: relative;
  display: flex;

  @media ${({ theme }) => theme.media.medium} {
    position: absolute;
    justify-content: center;
    top: 30%;
  }
`;

const DateText = styled.span`
  font-weight: 500;
  display: flex;
  justify-content: space-around;
  gap: 20px;

  @media ${({ theme }) => theme.media.medium} {
    font-weight: 500;
    display: flex;
  }

  @media ${({ theme }) => theme.media.small} {
   width: 400px;
  }
`;

const StartYear = styled.span`
  font-size: 60px;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};

  @media ${({ theme }) => theme.media.medium} {
    color: ${({ theme }) => theme.colors.primary};
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 128px;
    line-height: 155px;
  }
`;

const EndYear = styled.span`
  font-size: 60px;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${({ theme }) => theme.colors.pink};

  @media ${({ theme }) => theme.media.medium} {
    color: ${({ theme }) => theme.colors.pink};
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 128px;
    line-height: 155px;
  }
`;

const CenterCircleDate: React.FC<CenterCircleDateProps> = ({ activeSection }) => {
  const startYearRef = useRef<HTMLSpanElement>(null);
  const endYearRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const prevSection = useRef<TimelineItem | null>(null);

  useEffect(() => {
    if (!startYearRef.current || !endYearRef.current || !containerRef.current) return;

    const tl = gsap.timeline();

    if (prevSection.current && activeSection) {
      // Fade out
      tl.to(containerRef.current, {
        duration: 1,
        ease: "power2.inOut",
      })
        // Fade in
        .to(containerRef.current, {
          duration: 1,
          ease: "power2.out",
        })
        // Animate both numbers simultaneously
        .to([startYearRef.current, endYearRef.current], {
          duration: 1,
          ease: "power2.inOut",
          onUpdate: () => {
            const progress = tl.progress();

            // Animate start year
            if (startYearRef.current) {
              const currentStart = Math.round(
                prevSection.current!.start + (activeSection.start - prevSection.current!.start) * progress
              );
              startYearRef.current.textContent = String(currentStart);
            }

            // Animate end year
            if (endYearRef.current) {
              const currentEnd = Math.round(
                prevSection.current!.end + (activeSection.end - prevSection.current!.end) * progress
              );
              endYearRef.current.textContent = String(currentEnd);
            }
          },
        });
    } else {
      // Initial load animation
      tl.to(containerRef.current, {
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          if (startYearRef.current && endYearRef.current) {
            if (activeSection) {
              startYearRef.current.textContent = String(activeSection.start);
              endYearRef.current.textContent = String(activeSection.end);
            } else {
              startYearRef.current.textContent = "Выберите";
              endYearRef.current.textContent = "раздел";
            }
          }
        },
      }).to(containerRef.current, {
        duration: 1,
        ease: "power2.out",
      });
    }

    prevSection.current = activeSection;
  }, [activeSection]);

  return (
    <DateContainer>
      <DateText ref={containerRef}>
        <StartYear ref={startYearRef}>{activeSection ? activeSection.start : "Выберите"}</StartYear>
        <EndYear ref={endYearRef}>{activeSection ? activeSection.end : "раздел"}</EndYear>
      </DateText>
    </DateContainer>
  );
};

export default CenterCircleDate;
