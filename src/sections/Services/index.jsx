import { useState } from 'react';
import { Container } from './styles';
import { Title } from '../../components/Title';

import { AnimatePresence, motion } from 'framer-motion';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Img1 from '../../assets/images/img1.jpg';
import Img2 from '../../assets/images/img2.jpg';
import Img3 from '../../assets/images/img3.jpg';


export const Services = () => {
  const [images, setImages] = useState([Img1, Img2, Img3]);

  // This two function below is responsible to reorganize the arrays of images
  function handlePassToNextSlide() {
    setImages((prevImages) => {
      const [firstImg, secondImg, thirdImg] = prevImages;
      return [thirdImg, firstImg, secondImg];
    })
  }

  function handlePassToLastSlide() {
    setImages((prevImages) => {
      const [firstImg, secondImg, thirdImg] = prevImages;
      return [secondImg, thirdImg, firstImg];
    });
  }

  return (
    <Container className="section">
      <Title className="title">
        Várias funções em um único lugar.
      </Title>
      <div className="carrousel-container">
        <IoIosArrowBack className="arrow-icon" onClick={handlePassToLastSlide} />
        <div className="images-container" layout>
          <AnimatePresence>
            <motion.img
              key={images[0]}
              src={images[0]}
              id="left-slide"
              className="slide"
              layout
              animate={{ scale: 0.8 }}
            />
            <motion.img
              key={images[1]}
              src={images[1]}
              id="center-slide"
              className="slide"
              animate={{ scale: 1 }}
              layout
            />
            <motion.img
              key={images[2]}
              src={images[2]}
              id="right-slide"
              className="slide"
              layout
              animate={{ scale: 0.8 }}

            />
          </AnimatePresence>
        </div>
        <IoIosArrowForward className="arrow-icon" onClick={handlePassToNextSlide} />
      </div>
    </Container>
  )
}