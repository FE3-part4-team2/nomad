import Alarm from '@/components/Alarm/Alarm';
import styles from './AlarmContainer.module.scss';

interface Notification {
  totalCount: number;

  notifications: {
    id: number;
    teamId: string;
    userId: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
  }[];
  cursorId: number;
}

export default function AlarmContainer({
  data,
  onClick,
}: {
  data: any;
  onClick: () => void;
}) {
  console.log(data);
  return (
    <div className={styles.alarmBox}>
      <Alarm data={data} onClick={onClick} />
    </div>
  );
}
