import { toast } from 'react-toastify';

//toast를 먼저 import 하고
//사용하고자 하는 handler이나 effect에서
//toast.success('로그인에 실패 하였습니다.'); 처럼 사용하면 됩니다.

//예시)
// try {
//   const response = await axiosInstance.delete(`${API.MEMBERS.MEMBERS}/${memberId}`);
//   if (response.status === 200) {
//     toast.success('삭제가 완료 되었습니다.');
//     const responseData = await response.data;
//     return responseData;
//   }
// } catch (e) {
//   const error = e as AxiosError;
//   return error.response;

//아래는 토스트가 어떻게 나오는지에 대한 예시 => 다음 머지에서 삭제 예정
/* 
  toast를 import하고 틔울 type과 message를 파라미터값으로 던져주면 됩니다
  * @type: success, info, error, warning 
  * @message : 띄울 string을 넣으면 됩니다.

*/

export default function Toast({
  type,
  message,
}: {
  type: string;
  message: string;
}) {
  const handleToastEffect = () => {
    switch (type) {
      case 'success':
        toast.success(message);
        break;
      case 'info':
        toast.info(message);
        break;
      case 'error':
        toast.error(message);
        break;
      case 'warning':
        toast.warning(message);
        break;
    }
  };

  return (
    <>
      {/* <button className="buttonTest" onClick={notify}>
        success
      </button>
      <button className="buttonTest" onClick={notify1}>
        info
      </button>
      <button className="buttonTest" onClick={notify2}>
        fail
      </button>
      <button className="buttonTest" onClick={notify3}>
        warnning
      </button>
      <button className="buttonTest" onClick={notifyLogin}>
        로그인 성공
      </button> */}
      <button
        className="buttonTest"
        onClick={handleToastEffect}
        style={{
          width: '200px',
          height: '200px',
        }}
      >
        {type} 알림 보기
      </button>
    </>
  );
}
