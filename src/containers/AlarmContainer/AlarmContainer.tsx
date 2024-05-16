import Alarm from '@/components/Alarm/Alarm';
import styles from './alarmContainer.module.scss';

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
  setTarget,
}: {
  data: Notification[];
  onClick: () => void;
  setTarget: any;
}) {
  return (
    <div className={styles.alarmBox}>
      <Alarm data={data} onClick={onClick} setTarget={setTarget} />
    </div>
  );
}
