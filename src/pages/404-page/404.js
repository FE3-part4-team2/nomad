import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
  return (
    <>
      <div className="Container">
        <div className="notfound-404">
          <h1>404</h1>
        </div>
        <div>
          <div>Page Not Found</div>
          <div>페이지를 찾을수 없습니다..</div>
          <div>
            <div>존재하지 않는 주소를 입력하셨거나,</div>
            <div>요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.</div>
          </div>
          <button>
            <Link href="/" role="button">
              메인으로 돌아가기
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
