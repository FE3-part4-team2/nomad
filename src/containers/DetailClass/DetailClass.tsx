import Image from 'next/image';
import styles from './detailClass.module.scss';
import Kebab from '@/components/DropDown/Kebab';
import Button from '@/components/Button/Button';
import { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

export default function DetailClass() {
  const [showArrow, setShowArrow] = useState(false);

  const openReservationModal = () => {};

  const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 1500) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.container}>
        {showArrow ? (
          <button onClick={MoveToTop} className={styles.move_icon}>
            <Image
              src="/assets/icons/arrow.png"
              alt="상단 이동 화살표"
              width={15}
              height={15}
            />
          </button>
        ) : (
          ''
        )}
        <section className={styles.title_section}>
          <div className={styles.class_category}>문화 예술</div>
          <div className={styles.title_container}>
            <div>
              <div className={styles.class_title}>
                함께 배우면 즐거운 스트릿 댄스
              </div>
              <div className={styles.info_container}>
                <div className={styles.info_wrapper}>
                  <Image
                    src="/assets/images/star.svg"
                    alt="별점 아이콘"
                    width={16}
                    height={16}
                  />
                  <div className={styles.star_num}>4.0 (293)</div>
                </div>
                <div className={styles.info_wrapper}>
                  <Image
                    src="/assets/images/location.svg"
                    alt="위치 아이콘"
                    width={18}
                    height={18}
                  />
                  <div>서울 중구 청계천로 100 10F</div>
                </div>
              </div>
            </div>
            <Kebab />
          </div>
        </section>
        <section className={styles.image_section}>
          <ImageGallery items={images} />
        </section>
        <div className={styles.responsive_container}>
          <div>
            <section className={styles.description_section}>
              <div className={styles.class_description}>
                <div>체험 설명</div>
                안녕하세요! 저희 스트릿 댄스 체험을 소개합니다. 저희는 신나고
                재미있는 스트릿 댄스 스타일을 가르칩니다. 크럼프는 세계적으로
                인기 있는 댄스 스타일로, 어디서든 춤출 수 있습니다. 저희
                체험에서는 새로운 스타일을 접할 수 있고, 즐거운 시간을 보낼 수
                있습니다. 저희는 초보자부터 전문가까지 어떤 수준의 춤추는 사람도
                가르칠 수 있도록 준비해놓았습니다. 저희와 함께 즐길 수 있는
                시간을 기대해주세요! 각종 음악에 적합한 스타일로, 저희는 크럼프
                외에도 전통적인 스트릿 댄스 스타일과 최신 스트릿 댄스 스타일까지
                가르칠 수 있습니다. 저희 체험에서는 전문가가 직접 강사로
                참여하기 때문에, 저희가 제공하는 코스는 어떤 수준의 춤추는
                사람도 쉽게 이해할 수 있도록 준비해놓았습니다. 저희 체험을
                참가하게 된다면, 즐거운 시간 뿐만 아니라 새로운 스타일을 접할 수
                있을 것입니다.
              </div>
            </section>
            <div className={styles.line}></div>

            <section className={styles.map_section}>
              <div className={styles.map_container}>
                <div>
                  <Image
                    src="/assets/images/test-map-mobile.png"
                    alt="지도 이미지"
                    layout="responsive"
                    width={327}
                    height={450}
                  />
                </div>
                <div className={styles.info_wrapper}>
                  <Image
                    src="/assets/images/location.svg"
                    alt="위치 아이콘"
                    width={18}
                    height={18}
                  />
                  <div>서울 중구 청계천로 100 10F</div>
                </div>
              </div>
            </section>
            <section className={styles.review_section}>
              <div className={styles.review_title}>후기</div>
              <div className={styles.review_num_container}>
                <div className={styles.review_cal}>4.2</div>
                <div>
                  <div className={styles.review_most}>매우 만족</div>
                  <div className={styles.review_num}>
                    <Image
                      src="/assets/images/star.svg"
                      alt="별점 아이콘"
                      width={16}
                      height={16}
                    />
                    1,300개 후기
                  </div>
                </div>
              </div>
              <div className={styles.review_container}>
                <div>
                  <Image
                    className={styles.profile_image}
                    src="/assets/images/test-image.png"
                    alt="프로필 이미지"
                    width={45}
                    height={45}
                  />
                </div>
                <div className={styles.review_wrapper}>
                  <div className={styles.reviewer_wrapper}>
                    <div className={styles.reviewer}>이주영</div>|
                    <div className={styles.review_created}>2023. 2. 4</div>
                  </div>
                  <div>
                    저는 저희 스트릿 댄서 체험에 참가하게 된 지 얼마 안됐지만,
                    정말 즐거운 시간을 보냈습니다. 새로운 스타일과 춤추기를
                    좋아하는 나에게 정말 적합한 체험이었고, 전문가가 직접 강사로
                    참여하기 때문에 어떤 수준의 춤추는 사람도 쉽게 이해할 수
                    있었습니다. 강사님께서 정말 친절하게 설명해주셔서 정말
                    좋았고, 이번 체험을 거쳐 새로운 스타일과 춤추기에 대한
                    열정이 더욱 생겼습니다. 저는 이 체험을 적극 추천합니다!"
                  </div>
                </div>
              </div>
              <div className={styles.line}></div>

              <div className={styles.review_container}>
                <div>
                  <Image
                    className={styles.profile_image}
                    src="/assets/images/test-image.png"
                    alt="프로필 이미지"
                    width={45}
                    height={45}
                  />
                </div>
                <div className={styles.review_wrapper}>
                  <div className={styles.reviewer_wrapper}>
                    <div className={styles.reviewer}>이주영</div>|
                    <div className={styles.review_created}>2023. 2. 4</div>
                  </div>
                  <div>
                    저는 저희 스트릿 댄서 체험에 참가하게 된 지 얼마 안됐지만,
                    정말 즐거운 시간을 보냈습니다. 새로운 스타일과 춤추기를
                    좋아하는 나에게 정말 적합한 체험이었고, 전문가가 직접 강사로
                    참여하기 때문에 어떤 수준의 춤추는 사람도 쉽게 이해할 수
                    있었습니다. 강사님께서 정말 친절하게 설명해주셔서 정말
                    좋았고, 이번 체험을 거쳐 새로운 스타일과 춤추기에 대한
                    열정이 더욱 생겼습니다. 저는 이 체험을 적극 추천합니다!"
                  </div>
                </div>
              </div>
              <div className={styles.line}></div>

              <div className={styles.review_container}>
                <div>
                  <Image
                    className={styles.profile_image}
                    src="/assets/images/test-image.png"
                    alt="프로필 이미지"
                    width={45}
                    height={45}
                  />
                </div>
                <div className={styles.review_wrapper}>
                  <div className={styles.reviewer_wrapper}>
                    <div className={styles.reviewer}>이주영</div>|
                    <div className={styles.review_created}>2023. 2. 4</div>
                  </div>
                  <div>
                    저는 저희 스트릿 댄서 체험에 참가하게 된 지 얼마 안됐지만,
                    정말 즐거운 시간을 보냈습니다. 새로운 스타일과 춤추기를
                    좋아하는 나에게 정말 적합한 체험이었고, 전문가가 직접 강사로
                    참여하기 때문에 어떤 수준의 춤추는 사람도 쉽게 이해할 수
                    있었습니다. 강사님께서 정말 친절하게 설명해주셔서 정말
                    좋았고, 이번 체험을 거쳐 새로운 스타일과 춤추기에 대한
                    열정이 더욱 생겼습니다. 저는 이 체험을 적극 추천합니다!"
                  </div>
                </div>
              </div>
            </section>
          </div>
          <section className={styles.reservation_section}>
            <div className={styles.reservation_container}>
              <div>
                <div className={styles.price_wrapper}>
                  <div className={styles.price}>₩ 1,000</div>
                  <div className={styles.per}>/ 인</div>
                </div>
                <div className={styles.date_title}>날짜</div>
                <div className={styles.date_pick}>날짜 선택하기</div>
                {/* 1200px 이상일 때 캘린더 보이게 */}
                <div className={styles.time_container}>
                  <div className={styles.time_title}>예약 가능한 시간</div>
                  <div className={styles.choose_time}>
                    <Button
                      status="default"
                      title="14:00~15:00"
                      onClick={openReservationModal}
                      type="button"
                      radius={8}
                    />
                    <Button
                      status="white"
                      title="15:00~~16:00"
                      onClick={openReservationModal}
                      type="button"
                      radius={8}
                    />
                  </div>
                </div>
                <div className={styles.person_num}>참여 인원 수</div>
                <div className={styles.input_container}>
                  <div className={styles.input_subtract}>
                    <Image
                      src="/assets/icons/Subtract.svg"
                      alt="마이너스 아이콘"
                      width={20}
                      height={20}
                    />
                  </div>
                  <input
                    className={styles.choose_num}
                    type="number"
                    defaultValue={1}
                  />
                  <div className={styles.input_add}>
                    <Image
                      src="/assets/icons/Add.svg"
                      alt="플러스 아이콘"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.submit_button}>
                {/* 날짜 선택해야 활성화 */}
                <Button
                  status="disable"
                  title="예약하기"
                  onClick={openReservationModal}
                  type="button"
                  radius={6}
                />
              </div>
              <div className={styles.total_container}>
                <div className={styles.total_title}>총 합계</div>
                <div className={styles.total_price}>₩ 10,000</div>
              </div>
              {/* 모바일 - 날짜 선택하기 누르면 캘린더 모달 뜨고,
              날짜 선택하면 인원 선택 모달로 바뀌고,
              인원 선택하면 캘린더 모달로 재이동. */}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
