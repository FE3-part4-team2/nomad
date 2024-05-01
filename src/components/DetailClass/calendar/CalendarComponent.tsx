import { useState } from 'react';
import styles from './calendarComponent.module.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export type DatePiece = Date | null;

export type SelectedDate = DatePiece | [DatePiece, DatePiece];

export default function CalendarComponent() {
  const [selectedDate, setSelectedDate] = useState<SelectedDate>(new Date());

  return (
    <>
      <Calendar className={styles.calendar} />
      {/* onChange={setSelectedDate} value={selectedDate} /> */}
    </>
  );
}
