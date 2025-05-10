import React, { useState, useEffect, useRef } from 'react';

const AutoScrollMarquee = ({ children, speed = 1 }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(true);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    let animationFrameId;
    let lastTimestamp = 0;

    const autoScroll = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (isScrolling && !isMouseDown && container && content) {
        const newScrollAmount = scrollAmount + (speed * deltaTime) / 16;
        setScrollAmount(newScrollAmount);
        container.scrollLeft = newScrollAmount;

        // Reset when reaching end
        if (newScrollAmount >= content.scrollWidth - container.clientWidth) {
          setScrollAmount(0);
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isScrolling, scrollAmount, isMouseDown, speed]);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setIsScrolling(false);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    containerRef.current.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
    setIsScrolling(true);
    containerRef.current.style.cursor = 'grab';
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    setIsScrolling(true);
    containerRef.current.style.cursor = 'grab';
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
    setScrollAmount(containerRef.current.scrollLeft);
  };

  return (
    <div
      ref={containerRef}
      className="auto-scroll-container"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={(e) => {
        setIsScrolling(false);
        setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
      }}
      onTouchEnd={() => setIsScrolling(true)}
      onTouchMove={(e) => {
        if (!isScrolling) {
          const x = e.touches[0].pageX - containerRef.current.offsetLeft;
          const walk = (x - startX) * 2;
          containerRef.current.scrollLeft = scrollLeft - walk;
          setScrollAmount(containerRef.current.scrollLeft);
        }
      }}
    >
      <div ref={contentRef} className="auto-scroll-content">
        {children}
        {/* Optional: Add duplicate children for seamless looping */}
        {React.Children.map(children, child => React.cloneElement(child))}
      </div>
    </div>
  );
};

export default AutoScrollMarquee;

