import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import { useColors } from '../contexts/ColorContext';
import { useDispatch, useSelector } from 'react-redux';
import { getAbout } from '../features/about/about.action';

const About = () => {
  const { updateColors } = useColors();
  const dispatch = useDispatch();

  const { aboutData } = useSelector((state) => state.about);
  const content = aboutData?.[0]; // Get the first (and only) entry

  useEffect(() => {
    dispatch(getAbout());
  }, [dispatch]);

  useEffect(() => {
    if (content) {
      updateColors(
        content.hero.style.backgroundColor,
        content.hero.style.textColor
      );
    }

    return () => {
      updateColors('#1A1A1A', '#FFFFFF');
    };
  }, [content, updateColors]);

  if (!content) return null; // Or show a loader

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* START VISUAL Header */}
      <div className="fixed top-4 md:top-8 left-4 md:left-8 z-10">
        <h1 className="text-lg md:text-xl lg:text-3xl font-syncopate tracking-[0.2em]">
          START VISUAL
        </h1>
      </div>

      {/* Hero Section */}
      <div
        className="w-full min-h-[400px] md:h-[605px] flex items-center justify-center px-4 md:px-0 pt-24 md:pt-0 pb-16 md:pb-0"
        style={{
          backgroundColor: content.hero.style.backgroundColor,
        }}
      >
        <div className="w-full text-center py-16 md:py-0 max-w-4xl px-6">
          {content.hero.style.showTitle !== false && content.hero.title && (
            <h2
              style={{
                fontFamily: content.hero.style.titleFont.family,
                fontSize: content.hero.style.titleFont.size,
                fontWeight: content.hero.style.titleFont.weight,
                letterSpacing: content.hero.style.titleFont.letterSpacing,
                color: content.hero.style.textColor,
              }}
              className="mb-8 text-2xl md:text-4xl"
            >
              {content.hero.title}
            </h2>
          )}
          <p
            style={{
              fontFamily: content.hero.style.textFont.family,
              fontWeight: content.hero.style.textFont.weight,
              letterSpacing: content.hero.style.textFont.letterSpacing,
              color: content.hero.style.textColor,
              textAlign: 'justify',
              hyphens: 'auto',
            }}
            className="text-sm md:text-base lg:text-lg"
          >
            {content.hero.text}
          </p>
        </div>
      </div>

      {/* Checkered Sections */}
      {content.sections.map((section, index) => (
        <div key={section.id} className="grid grid-cols-1 md:grid-cols-2">
          {/* Text Section */}
          <div
            className={`flex items-center justify-center p-8 md:p-0 ${
              index % 2 === 0 ? 'md:order-1' : 'md:order-2'
            }`}
            style={{
              backgroundColor: section.style.backgroundColor,
              color: section.style.textColor,
            }}
          >
            <div className="w-full max-w-2xl px-6">
              {section.style.showTitle !== false && (
                <h2
                  style={{
                    fontFamily: section.style.titleFont.family,
                    fontWeight: section.style.titleFont.weight,
                    letterSpacing: section.style.titleFont.letterSpacing,
                  }}
                  className="mb-6 md:mb-8 text-xl md:text-2xl lg:text-3xl"
                >
                  {section.title}
                </h2>
              )}
              <p
                style={{
                  fontFamily: section.style.textFont.family,
                  fontWeight: section.style.textFont.weight,
                  letterSpacing: section.style.textFont.letterSpacing,
                  textAlign: 'justify',
                  hyphens: 'auto',
                }}
                className="text-sm md:text-base"
              >
                {section.text}
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div
            className={`h-[300px] md:h-[600px] ${
              index % 2 === 0 ? 'md:order-2' : 'md:order-1'
            }`}
          >
            <img
              src={section.image?.url}
              alt={section.image?.alt || section.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}

      <Footer
        backgroundColor={content.hero.style.backgroundColor}
        textColor={content.hero.style.textColor}
      />
    </div>
  );
};

export default About;
