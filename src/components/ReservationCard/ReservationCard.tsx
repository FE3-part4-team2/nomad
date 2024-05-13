import Button from '../Button/Button';
import res from './ReservationCard.module.scss';
import Image from 'next/image';
import { ReservationCardType } from '../../types/type';

export default function ReservationCard({
  classImage,
  revStatus,
  title,
  date,
  startTime,
  endTime,
  headCount,
  price,
  buttonStatus,
  buttonTitle,
  isButtonHidden,
}: ReservationCardType) {
  return (
    <div className={res.reservationCardContainer}>
      <div className={res.mainBox}>
        <Image
          className={res.image}
          src={classImage}
          alt="예약한 클래스 이미지"
        />
        <div className={res.reservationDetail}>
          <div className={res.revStatus} id={`${res[revStatus]}`}>
            {revStatus}
          </div>
          <div className={title}>{title}</div>
          <div className="datebox">
            <div>{date}</div>
            <div>·</div>
            <div>
              {startTime} - {endTime}
            </div>
            <div>·</div>
            <div className="headCount">{headCount}</div>
          </div>
          <div className="priceAndButtonArea">
            <div className="price">₩{price.toLocaleString('ko-KR')}</div>
            <div className="buttonDiv">
              <Button
                status={buttonStatus}
                buttonTitle={buttonTitle}
                hidden={isButtonHidden}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
