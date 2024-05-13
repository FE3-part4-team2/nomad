import Calendar from '@/components/Calendar/Calendar';
import { idAtom } from '@/store/atoms/idState';
import { useRecoilValue } from 'recoil';
import { useQuery } from '@tanstack/react-query';
import getREservationDashboard from '@/apis/getReservationDashboardApi';
import { useState } from 'react';
import moment from 'moment';
import getReservedSchedule from '@/apis/getReservedScheduleApi';
import ModalContainer from '../ModalContainer/ModalContainer';
import ReserveInfoModal from '@/components/Modal2/ReserveInfoModal/ReserveInfoModal';
import { OnArgs } from 'react-calendar';

export default function CalendarContainer() {
  // interface IProps {
  //   activityId: number;
  //   year: string;
  //   month: string;
  // }

  const [month, setMonth] = useState<string>(`${moment().format('MM')}`);
  const [year, setYear] = useState<string>(`${moment().format('YYYY')}`);
  const [date, setDate] = useState<string>(`${moment().format('YYYY-MM-DD')}`);
  const [modalVisible, setModalVisible] = useState(false);
  const activityId = useRecoilValue(idAtom);
  const { data } = useQuery({
    queryKey: ['calendar', month, activityId],
    queryFn: () => getREservationDashboard({ activityId, year, month }),
  });
  const { data: scheduleData, isSuccess } = useQuery({
    queryKey: ['schedule', date],
    queryFn: () => getReservedSchedule({ activityId, date }),
  });

  function getDates({ action, activeStartDate, value, view }: OnArgs): void {
    const data = activeStartDate;
    setMonth(`${moment(data).format('MM')}`);
    setYear(`${moment(data).format('YYYY')}`);
  }

  function onClick(value: Date): void {
    setDate(moment(value).format('YYYY-MM-DD'));
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
    setDate('');
  }

  return (
    <>
      <Calendar monthReceiver={getDates} data={data} onClick={onClick} />;
      {scheduleData?.length != 0 && modalVisible && date != '' && (
        <ModalContainer
          title="예약정보"
          xbutton={true}
          background="white"
          size="reserveInfo"
          onClose={closeModal}
        >
          {scheduleData && <ReserveInfoModal info={scheduleData} date={date} />}
        </ModalContainer>
      )}
    </>
  );
}
