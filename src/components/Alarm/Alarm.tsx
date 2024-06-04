import styles from './Alarm.module.scss';
import moment from 'moment';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import deleteNoficationIdApi from '@/apis/deleteNoficationIdApi';
import { useState } from 'react';

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

export default function Alarm({
  data,
  onClick,
  setTarget,
}: {
  data: Notification[];
  onClick: () => void;
  setTarget: any;
}) {
  const [notifications] = useState(data[0].notifications);
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteNoficationIdApi,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries(notifications as any);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  function textColor(content: string) {
    if (content.includes('거절')) {
      return content.replace(
        /거절/g,
        `<span class=${styles.redText}>거절</span>`,
      );
    } else {
      return content.replace(
        /승인/g,
        `<span class=${styles.blueText}>승인</span>`,
      );
    }
  }

  return (
    <div id={styles.alarmBox}>
      <div id={styles.alarmHeader}>
        <div>알람 {data[0].totalCount}개</div>
        <button className={styles.headCloseButton} onClick={onClick} />
      </div>
      <div className={styles.alarmList}>
        {data.map((items) => (
          <div key={items.cursorId} className={styles.infinite}>
            {items.notifications.map((item) => (
              <div key={item.id} className={styles.alarmCard}>
                <div className={styles.cardHeader}>
                  <div
                    className={
                      item.content.includes('거절')
                        ? styles.redDot
                        : styles.blueDot
                    }
                  />

                  <button
                    className={styles.closeButton}
                    onClick={() => {
                      mutate({ notificationId: item.id });
                      console.log(item.id);
                    }}
                  />
                </div>
                <div
                  className={styles.alarmDetail}
                  dangerouslySetInnerHTML={{
                    __html: textColor(item.content),
                  }}
                />
                <div className={styles.opacity}>
                  {moment(item.createdAt).fromNow()}
                </div>
              </div>
            ))}
          </div>
        ))}
        <div ref={setTarget} className={styles.end} />
      </div>
    </div>
  );
}
