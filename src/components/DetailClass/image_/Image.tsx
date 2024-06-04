import styles from './image.module.scss';
import ModalImage from 'react-modal-image';

interface ImageProps {
  bannerImageUrl: string;
  subImages?: { id: number; imageUrl: string }[];
}

export default function ImageComponent({
  bannerImageUrl,
  subImages,
}: ImageProps) {
  return (
    <>
      <section className={styles.imageSection}>
        <div className={styles.mainImageWrapper}>
          <ModalImage
            small={bannerImageUrl}
            large={bannerImageUrl}
            alt="메인이미지"
            className={styles.mainImage}
          />
        </div>
        <div className={styles.subImageContainer}>
          {subImages?.slice(0, 4).map((i) => (
            <div key={i.id} className={styles.subImageWrapper}>
              <ModalImage
                small={i.imageUrl}
                large={i.imageUrl}
                alt="서브이미지"
                className={styles.subImage}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
