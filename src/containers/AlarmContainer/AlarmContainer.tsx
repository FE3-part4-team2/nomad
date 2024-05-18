import Alarm from '@/components/Alarm/Alarm';

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
    <>
      <Alarm data={data} onClick={onClick} setTarget={setTarget} />
    </>
  );
}
