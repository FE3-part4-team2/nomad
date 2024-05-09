import Button from '../Button/Button';
import res from './ReservationCard.module.scss';
import Image from 'next/image';

export interface ReservationCardProps {
  classImage: string; // 배너이미지
  revStatus: string; //현재 예약 상태
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  headCount: number; //총 모집인원
  price: number;
  //   reviewSubmitted: boolean; //리뷰 썼는지 안썼는지 , 이거는 페이지에서
  buttonStatus: string;
  buttonTitle: string;
}

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
}: ReservationCardProps) {
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
              <Button status={buttonStatus} buttonTitle={buttonTitle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
