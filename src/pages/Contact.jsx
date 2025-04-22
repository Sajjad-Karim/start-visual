import React, { useEffect, useMemo } from 'react';
import Footer from '../components/Footer';

import { useColors } from '../contexts/ColorContext';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from '../features/contact/contact.action';
import Spinner from '../components/Spinner';

const Contact = () => {
  const { updateColors } = useColors();

  const dispatch = useDispatch();

  const { contactData, isContactLoading } = useSelector(
    (state) => state?.contact
  );

  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);

  const { style = {}, headerMedia = {}, locations = [] } = contactData || {};

  useEffect(() => {
    if (style?.backgroundColor && style?.textColor) {
      updateColors(style?.backgroundColor, style?.textColor);
    }
    return () => updateColors('#1A1A1A', '#FFFFFF');
  }, [style, updateColors]);

  const renderHeaderMedia = () => {
    if (headerMedia.type === 'image' && headerMedia.image) {
      return (
        <>
          <img
            src={headerMedia?.image?.url}
            alt={headerMedia?.image?.alt}
            className="w-full h-full object-cover object-center"
            style={{ opacity: headerMedia?.overlay?.opacity }}
          />
          {headerMedia.overlay?.gradient && (
            <div
              className="absolute inset-0"
              style={{ background: headerMedia?.overlay?.gradient }}
            />
          )}
        </>
      );
    }

    if (headerMedia?.type === 'color' && headerMedia?.color) {
      return (
        <div
          className="w-full h-full"
          style={{
            background:
              headerMedia?.color?.pattern || headerMedia?.color?.background,
          }}
        />
      );
    }

    return null;
  };

  const sortedLocations = useMemo(() => {
    return [...locations].sort((a, b) => a.order - b.order);
  }, [locations]);

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: style?.backgroundColor }}
    >
      {/* START VISUAL text */}
      <div className="fixed top-4 md:top-8 left-4 md:left-8 z-10">
        <h1
          className="text-lg md:text-xl lg:text-3xl"
          style={{
            fontFamily: style?.titleFont?.family,
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: style.textColor,
          }}
        >
          START VISUAL
        </h1>
      </div>

      {isContactLoading ? (
        <Spinner />
      ) : (
        <>
          <div
            className="w-full mt-16 md:mt-24 mb-8 md:mb-12 relative overflow-hidden"
            style={{ height: headerMedia?.height }}
          >
            {renderHeaderMedia()}
          </div>

          <div className="flex justify-center px-4 md:px-8 lg:px-12">
            <div
              className="w-full"
              style={{
                width: '1581px',
                minHeight: '529px',
                backgroundColor: style?.backgroundColor,
              }}
            >
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                style={{
                  gap: '100px',
                  paddingTop: '64px',
                  paddingBottom: '64px',
                  paddingLeft: '96px',
                  paddingRight: '96px',
                }}
              >
                {sortedLocations?.map((location, index) => (
                  <div key={index} className="flex flex-col">
                    <h3
                      className="mb-6"
                      style={{
                        fontFamily: style.titleFont.family,
                        fontWeight: 700,
                        fontSize: '1.5rem',
                        letterSpacing: '0.2em',
                        lineHeight: '1.2',
                        textTransform: 'uppercase',
                        color: style.textColor,
                      }}
                    >
                      {location.city}
                    </h3>
                    <div
                      style={{
                        fontFamily: style.textFont.family,
                        fontSize: '1rem',
                        fontWeight: 400,
                        letterSpacing: '0.05em',
                        lineHeight: '1.6',
                        color: style.textColor,
                        opacity: 0.8,
                      }}
                    >
                      <p className="mb-6">
                        {location.address.map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                        {location.city}, {location.zipCode}
                      </p>
                      {location.phones?.map((phone, i) => (
                        <a
                          key={i}
                          href={`tel:${phone}`}
                          className="block mb-4 hover:opacity-100 transition-opacity"
                        >
                          {phone}
                        </a>
                      ))}
                      <div className="space-y-3">
                        {location.email.map((email, i) => (
                          <a
                            key={i}
                            href={`mailto:${email}`}
                            className="block hover:opacity-100 transition-opacity"
                          >
                            {email}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      <Footer
        backgroundColor={style.backgroundColor}
        textColor={style.textColor}
      />
    </div>
  );
};

export default Contact;
