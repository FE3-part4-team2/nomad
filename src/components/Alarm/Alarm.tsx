import styles from './Alarm.module.scss';
import moment from 'moment';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import deleteNoficationIdApi from '@/apis/deleteNoficationIdApi';
import { useState } from 'react';

export default function Alarm({
  data,
  onClick,
}: {
  data: any;
  onClick: () => void;
}) {
  const [notifications, setNotifications] = useState(data.notifications);
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteNoficationIdApi,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries(notifications);
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
        <div>알람 {data.totalCount}개</div>
        <button className={styles.headCloseButton} onClick={onClick} />
      </div>
      <div className={styles.alarmList}>
        {data.notifications.map((item: any) => (
          <div key={item.id} className={styles.alarmCard}>
            <div className={styles.cardHeader}>
              <div
                className={
                  item.content.includes('거절') ? styles.redDot : styles.blueDot
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
              dangerouslySetInnerHTML={{ __html: textColor(item.content) }}
            />
            <div className={styles.opacity}>
              {moment(item.createdAt).fromNow()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
