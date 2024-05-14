import ImageGallery from 'react-image-gallery';
import styles from './image.module.scss';

interface ImageProps {
  imageUrl: string;
}

export default function ImageComponent({ imageUrl }: ImageProps) {
  const images = [
    {
      original: imageUrl,
      thumbnail: imageUrl,
    },
  ];

  return (
    <>
      <section className={styles.imageSection}>
        <ImageGallery items={images} />
      </section>
    </>
  );
}
