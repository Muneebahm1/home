"use server"
import { imageLoader } from 'next-image-export-optimizer';
const customLoader = ({ src, width, quality }) => {
    return `${imageLoader({ src, width, quality })}`;
  };
export default customLoader