import { useEffect, useState } from 'react';
import styles from './miniCalendarContainer.module.scss';
import { getAvailableScheduleApi } from '@/apis/activitiesApi';
import { getAvailableScheduleType } from '@/types/activitiesType/ActivitiesType';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import MiniCalendar from '@/components/Calendar/MiniCalendar/MiniCalendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function MiniCalendarContainer({
  setCalendarId,
  closeModal,
  setSelectedDate,
  setSelectedStartTime,
  setSelectedEndTime,
}) {
  const [value, onChange] = useState<Value>(new Date());
  const [mark, setMark] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);

  const { data } = useQuery({
    queryKey: ['Reservation'],
    queryFn: () => getAvailableScheduleApi(776, '2024', '05'),
  });

  useEffect(() => {
    if (data) {
      const dates = data?.map((item) => item.date);
      setMark(dates);
    }
  }, [data]);

  const handleChange = (e: Value) => {
    onChange(e);
  };

  const onClickDay = (e) => {
    const selectedData = data.find(
      (item) => item.date === moment(e).format('YYYY-MM-DD'),
    );
    if (selectedData) {
      const availableTimes = selectedData.times;

      setAvailableTimes(availableTimes);
      console.log(setSelectedDate);

      setSelectedDate(selectedData.date);
    } else {
      console.log('예약 가능한 날짜가 아닙니다.');
      setAvailableTimes([]);
    }
  };

  const chooseTime = (id, startTime, endTime) => {
    setCalendarId(id);
    setSelectedStartTime(startTime);
    setSelectedEndTime(endTime);
    closeModal && closeModal();
  };

  return (
    <>
      <div className={styles.container}>
        <div className="small">
          <div className={styles.calendar_container}>
            <div className={styles.titleWrapper}>
              <div className={styles.mark}></div>
              <div>예약 가능한 날짜</div>
            </div>

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
                        top: '65%',
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
            <div className={styles.available_times}>
              {availableTimes.length > 0 ? (
                <div className={styles.available_times}>
                  {availableTimes.map((time) => (
                    <button
                      key={time.id}
                      className={styles.choose_time}
                      onClick={() =>
                        chooseTime(time.id, time.startTime, time.endTime)
                      }
                    >
                      {`${time.startTime}~${time.endTime}`}
                    </button>
                  ))}
                </div>
              ) : (
                <div className={styles.no_time}>날짜를 선택해주세요.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
