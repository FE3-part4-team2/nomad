import styles from './description.module.scss';

interface DescriptionProps {
  description: string;
}
export default function Description({ description }: DescriptionProps) {
  return (
    <>
      <section className={styles.descriptionSection}>
        <div className={styles.classDescription}>
          <div>체험 설명</div>
          {description}
        </div>
      </section>
    </>
  );
}
