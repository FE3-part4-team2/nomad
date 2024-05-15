import ImageGallery from 'react-image-gallery';
import styles from './image.module.scss';

interface ImageProps {
  imageUrl: string;
  subImage?: { id: number; imageUrl: string }[];
}

export default function ImageComponent({ imageUrl, subImage }: ImageProps) {
  const images =
    subImage && Array.isArray(subImage)
      ? subImage.map((subImage) => ({
          original: subImage.imageUrl,
          thumbnail: subImage.imageUrl,
        }))
      : [];

  images.unshift({ original: imageUrl, thumbnail: imageUrl });

  return (
    <>
      <section className={styles.imageSection}>
        <ImageGallery items={images} />
      </section>
    </>
  );
}
