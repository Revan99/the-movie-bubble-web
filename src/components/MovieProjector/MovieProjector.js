import React, { useState } from 'react';
import { motion } from 'framer-motion';
import cam from './cam.svg';
import circle from './circle.svg';
import { Link } from 'react-router-dom';
import './MovieProjector.css';
import PropTypes from 'prop-types';
const num = Math.floor(Math.random() * (19 - 0 + 1)) + 0;
console.log(num)
const MovieProjector = ({ data }) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <>
      <div className="flex items-center mx-4">
        <motion.div
          className="circle hidden lg:block -mr-48 w-48 h-48 -mt-6 "
          initial={{ rotate: -90 }}
          animate={{ rotate: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
        >
          <img src={circle} alt="cirlce" />
        </motion.div>
        <div className="cam hidden lg:block ml-12">
          <img src={cam} alt="logo" className="logo w-24 h-24" />
        </div>
        <motion.div
          className="camera__light hidden lg:block w-64 h-64 -ml-4 -mt-6 bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{
            delay: 1.5,
            duration: 0.8,
            yoyo: Infinity,
          }}
        ></motion.div>
        <div
          className="projector__container flex flex-col items-center overflow-hidden w-full lg:w-1/2 mt-6 mb-4"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.5,
              duration: 1,
            }}
          >
            <div className="projector__poster bg-cover w-full h-1/2 text-center relative">
              <Link to={'movie/' + data[num].id}>
                <img
                  src={
                    'https://image.tmdb.org/t/p/original' +
                    data[num].backdrop_path
                  }
                  alt="poster"
                />
              </Link>
              {isShown && (
                <motion.div
                  className="text-white text-lg flex w-full bg-black bg-opacity-50 -mt-8 absolute"
                  initial={{
                    opacity: 0,
                    x: -160,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <h1 className="ml-4">{data[num].original_title}</h1>
                </motion.div>
              )}
            </div>
            <div className="movie__description text-gray-200 mt-1 text-lg text-center">
              <h3 className="description p-6">{data[num].overview}</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

MovieProjector.propTypes = {
  data: PropTypes.array.isRequired,
};
export default MovieProjector;
