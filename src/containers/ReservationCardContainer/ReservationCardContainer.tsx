import ReservationCard from '../../components/ReservationCard/ReservationCard';
import { ReservationCardType } from '../../types/type';

export default function ReservationCardContainer({
  classImage,
  revStatus,
  title,
  date,
  startTime,
  endTime,
  headCount,
  price,
  reviewSubmitted,
}: ReservationCardType) {
  const bStatusArray = {
    confirmed: 'white',
    completed: 'black',
    default: 'disabled',
  } as { [key: string]: string };

  const bTitleArray = {
    confirmed: '예약 취소',
    default: '후기 작성',
  } as { [key: string]: string };

  const bStatus = bStatusArray[revStatus] || bStatusArray.default;

  const bTitle = bTitleArray[revStatus] || bTitleArray.default;

  const isButtonHidden =
    !reviewSubmitted && !['confirmed', 'completed'].includes(revStatus);

  return (
    <ReservationCard
      classImage={classImage}
      revStatus={revStatus}
      title={title}
      date={date}
      startTime={startTime}
      endTime={endTime}
      headCount={headCount}
      price={price}
      buttonTitle={bTitle}
      buttonStatus={bStatus}
      isButtonHidden={isButtonHidden}
    ></ReservationCard>
  );
}
