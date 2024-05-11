import { useEffect, useState } from 'react';
import styles from './reservationModal.module.scss';
import { getAvailableScheduleApi } from '@/apis/activitiesApi';
import { getAvailableScheduleType } from '@/types/activitiesType/ActivitiesType';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import MiniCalendar from '@/components/Calendar/MiniCalendar/MiniCalendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function ReservationModal() {
  const [value, onChange] = useState<Value>(new Date());
  const [mark, setMark] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);

  const { data } = useQuery({
    queryKey: ['Reservation'],
    queryFn: () => getAvailableScheduleApi(776, '2024', '05'),
  });

  useEffect(() => {
    if (data) {
      const dates = data?.map((d) => d.date);
      setMark(dates);
    }
  }, [data]);

  console.log(data);

  const handleChange = (e: Value) => {
    onChange(e);
  };

  const onClickDay = (e) => {
    console.log(
      mark.find((x) => x === moment(e).format('YYYY-MM-DD')) ? 'ok' : 'no',
    );
  };

  return (
    <>
      <div className={styles.container}>
        <div className="small">
          <div className={styles.calendar_container}>
            <MiniCalendar
              fun={undefined}
              className={''}
              onChange={handleChange}
              value={value}
              onClickDay={onClickDay}
              titleContent={({ date, view }: any) => {
                if (
                  view === 'month' &&
                  date.getMonth() === value.getMonth() &&
                  date.getDate() === value.getDate()
                ) {
                  return (
                    <div
                      style={{
                        fontSize: '9px',
                        color: '#FFC23D',
                        position: 'absolute',
                        top: '41%',
                      }}
                    >
                      TODAY
                    </div>
                  );
                }
                if (
                  view == 'month' &&
                  mark.find((x) => x === moment(date).format('YYYY-MM-DD'))
                )
                  return (
                    <div
                      style={{
                        height: '25px',
                        width: '25px',
                        backgroundColor: '#00AC07',
                        borderRadius: '50%',
                        position: 'absolute',
                        opacity: '30%',
                      }}
                    ></div>
                  );
              }}
            />
          </div>
          <div className={styles.time_container}>
            <div className={styles.time_title}>예약 가능한 시간</div>
            <div className={styles.choose_time}>14:00~15:00</div>
          </div>
        </div>
      </div>
    </>
  );
}
