import Calendar from '@/components/Calendar/Calendar';
import { idAtom } from '@/store/idAtom';
import { useRecoilValue } from 'recoil';
import { useQuery } from '@tanstack/react-query';
import getREservationDashboard from '@/apis/getReservationDashboardApi';
import { useState } from 'react';

export default function CalendarContainer() {
  // interface IProps {
  //   activityId: number;
  //   year: string;
  //   month: string;
  // }

  const [month, setMonth] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const activityId = useRecoilValue(idAtom);
  const { data, isLoading } = useQuery({
    queryKey: ['calendar', month],
    queryFn: () => getREservationDashboard({ activityId, year, month } as any),
  });
  console.log(activityId);
  console.log(data);
  function getDates(value: any) {
    const data = new Date(value.activeStartDate);
    console.log(data);
    setMonth(`0${data.getMonth() + 1}`);
    setYear(`${data.getFullYear()}`);
    console.log(month, year);
  }

  return <Calendar fun={getDates} />;
}
