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
  buttonTitle,
}: ReservationCardType) {
  const bStatusArray = {
    confirmed: 'white',
    completed: 'black',
    default: 'disabled',
  } as { [key: string]: string };

  const bStatus = bStatusArray[revStatus] || bStatusArray.default;

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
      buttonTitle={buttonTitle}
      buttonStatus={bStatus}
    ></ReservationCard>
  );
}
