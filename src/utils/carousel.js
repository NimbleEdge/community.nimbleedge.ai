export const prev = (active, length, setActive) => {
  setActive((active - 1 + length) % length);
};

export const next = (active, length, setActive) => {
  setActive((active + 1 + length) % length);
};

export const updateCarouselSlides = ({
  activeIndex,
  Card,
  length,
  data,
  setActive,
  setSlide,
}) => {
  let slides = [];
  for (let i = activeIndex + 1; i < length; i++) {
    slides.push(
      <Card
        key={i}
        index={i}
        activeIndex={activeIndex}
        {...data[i]}
        setActive={setActive}
      />
    );
  }
  for (let i = 0; i < activeIndex; i++) {
    slides.push(
      <Card
        key={i}
        index={i}
        activeIndex={activeIndex}
        {...data[i]}
        setActive={setActive}
      />
    );
  }
  setSlide(slides);
};
