import Calendar from '@/components/Calendar/Calendar';
import { idAtom } from '@/store/atoms/idState';
import { useRecoilValue } from 'recoil';
import { useQuery } from '@tanstack/react-query';
import getREservationDashboard from '@/apis/getReservationDashboardApi';
import { useState } from 'react';
import moment from 'moment';
import getReservedSchedule from '@/apis/getReservedScheduleApi';
import Modal from '@/components/Modal/ModalBase';

export default function CalendarContainer() {
  // interface IProps {
  //   activityId: number;
  //   year: string;
  //   month: string;
  // }

  const [month, setMonth] = useState<string>(`${moment().format('MM')}`);
  const [year, setYear] = useState<string>(`${moment().format('YYYY')}`);
  const [date, setDate] = useState<string>(`${moment().format('YYYY-MM-DD')}`);
  const activityId = useRecoilValue(idAtom);
  const { data, isLoading } = useQuery({
    queryKey: ['calendar', month, activityId],
    queryFn: () => getREservationDashboard({ activityId, year, month } as any),
  });
  const { data: scheduleData } = useQuery({
    queryKey: ['schedule', date],
    queryFn: () => getReservedSchedule({ activityId, date } as any),
  });
  console.log(scheduleData);

  console.log(activityId);
  console.log(data);
  function getDates(value: any) {
    const data = new Date(value.activeStartDate);
    console.log(data);
    setMonth(`0${data.getMonth() + 1}`);
    setYear(`${data.getFullYear()}`);
    console.log(month, year);
  }

  function onClick(value: any) {
    setDate(moment(value).format('YYYY-MM-DD'));
    console.log(date);
  }

  return (
    <>
      {/* <Modal title="예약정보" type="reservation">
          하이
        </Modal> */}
      <Calendar fun={getDates} data={data} onClick={onClick} />;
    </>
  );
}
