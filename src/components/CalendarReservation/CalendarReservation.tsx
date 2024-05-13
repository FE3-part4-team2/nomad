import { useEffect, useState } from 'react';
import Modal from '../DetailClass/modal/Modal';
import Reservation from '../DetailClass/reservation/Reservation';
import MiniCalendarContainer from '../DetailClass/miniCalendarContainer/MiniCalendarContainer';
import { postReservationApi } from '@/apis/activitiesApi';
import { DetailClassType } from '@/types/activitiesType/ActivitiesType';

export default function CalendarReservation({
  detail,
}: {
  detail: DetailClassType;
}) {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedStartTime, setSelectedStartTime] = useState('');
  const [selectedEndTime, setSelectedEndTime] = useState('');

  const [calendarId, setCalendarId] = useState(0);
  const [headCount, setHeadCount] = useState(1);

  const openReservationModal = () => {
    setIsOpenModal(true);
  };

  const closeReservationModal = () => {
    setIsOpenModal(false);
  };

  const submitReservation = () => {
    postReservationApi(detail.id, calendarId, headCount);
    setIsOpenModal(false);
  };

  useEffect(() => {
    document.documentElement.style.scrollbarGutter = 'stable';

    if (isOpenModal === true) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpenModal]);

  return (
    <>
      {isOpenModal && (
        <Modal isOpen={true} title={'예약'} setIsOpenModal={setIsOpenModal}>
          <MiniCalendarContainer
            setCalendarId={setCalendarId}
            closeModal={closeReservationModal}
            setSelectedDate={setSelectedDate}
            setSelectedStartTime={setSelectedStartTime}
            setSelectedEndTime={setSelectedEndTime}
          />
        </Modal>
      )}
      <Reservation
        openReservationModal={openReservationModal}
        setCalendarId={setCalendarId}
        headCount={headCount}
        setHeadCount={setHeadCount}
        price={detail?.price}
        submitReservation={submitReservation}
        calendarId={calendarId}
        selectedDate={selectedDate}
        selectedStartTime={selectedStartTime}
        selectedEndTime={selectedEndTime}
        setSelectedDate={setSelectedDate}
        setSelectedStartTime={setSelectedStartTime}
        setSelectedEndTime={setSelectedEndTime}
        closeModal={closeReservationModal}
      />
    </>
  );
}
