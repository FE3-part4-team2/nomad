import Image from 'next/image';
import styles from './map.module.scss';
import { useEffect } from 'react';

declare const window: typeof globalThis & {
  kakao: any;
};

// declare global {
//   interface Window {
//     kakao: any;
//   }
// }

// if (typeof window !== 'undefined') {
// const { kakao } = window;
// window 객체를 사용한 코드 작성
// }

const kakaoApi = process.env.NEXT_PUBLIC_KAKAO_API;

interface MapProps {
  address: string;
  title: string;
}
export default function Map({ address, title }: MapProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${kakaoApi}&libraries=services`;

    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.4846644, 126.8965326), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        const geocoder = new window.kakao.maps.services.Geocoder(); // 주소-좌표 변환 객체 생성

        geocoder.addressSearch(
          address,
          function (result: any[], status: string) {
            // 정상적으로 검색이 완료됐으면
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x,
              );

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              const infowindow = new window.kakao.maps.InfoWindow({
                content: `<div style="width:150px;text-align:center;padding:6px 0;">${title}</div>`,
              });
              infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          },
        );
      });
    };
  }, [address]);

  return (
    <>
      <section className={styles.mapSection}>
        {/* <div className={styles.mapContainer}> */}
        <div id="map" style={{ height: '450px' }}></div>
        <div className={styles.infoWrapper}>
          <Image
            src="/assets/images/location.svg"
            alt="위치 아이콘"
            width={18}
            height={18}
          />
          <div>{address}</div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
}
