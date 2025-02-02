import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { ArrowIcon } from "../Icon/ArrowIcon";
import SwiperCore from "swiper";

// Types
interface TimelineData {
  year: number;
  text: string;
}

interface DataSectionProps {
  activeSection: {
    data: TimelineData[];
  } | null;
}

// Styled Components
const DataContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  padding-left: 10%;

  @media ${({ theme }) => theme.media.medium} {
    position: relative;
    min-height: 250px;
  }

  @media ${({ theme }) => theme.media.small} {
    padding-left: 10%;
  }
`;

const YearText = styled.p`
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #2563eb;
  font-size: 1.1rem;
`;

const DetailText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20.3px;
  text-align: left;
  color: #42567a;
`;

const NavButton = styled.button`
  display: none;

  @media ${({ theme }) => theme.media.medium} {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    background: white;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 50%;
    z-index: 10;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

    &:hover {
      background: #f3f4f6;
    }
  }
`;

const PrevButton = styled(NavButton)`
  left: -50px;
`;

const NextButton = styled(NavButton)`
  right: -50px;
`;

const DataSection: React.FC<DataSectionProps> = ({ activeSection }) => {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

  const handleSwiper = useCallback((instance: SwiperCore) => setSwiper(instance), []);

  if (!activeSection || activeSection.data.length === 0) return null;

  return (
    <DataContainer>
      <Swiper
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          320: {
            slidesPerView: "auto",
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 100,
          },
        }}
        loop={true}
        grabCursor={true}
        onSwiper={handleSwiper}
        className="mySwiper"
      >
        {activeSection.data.map((item, index) => (
          <SwiperSlide key={index}>
            <YearText>{item.year}</YearText>
            <DetailText>{item.text}</DetailText>
          </SwiperSlide>
        ))}
      </Swiper>
      {activeSection.data.length > 3 && (
        <>
          <PrevButton onClick={() => swiper.slidePrev()}>
            <ArrowIcon size={24} direction="right" />
          </PrevButton>
          <NextButton onClick={() => swiper.slideNext()}>
            <ArrowIcon direction="left" />
          </NextButton>
        </>
      )}
    </DataContainer>
  );
};

export default DataSection;
