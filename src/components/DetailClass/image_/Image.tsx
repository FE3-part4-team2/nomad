import ImageGallery from 'react-image-gallery';

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
      <section className="imageSection">
        <ImageGallery items={images} />
      </section>
    </>
  );
}
