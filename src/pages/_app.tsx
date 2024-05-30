import '@/components/Calendar/Calendar.css';
import '@/styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <ToastContainer
            position="bottom-center" // 알람의 위치를 저장한당.
            autoClose={4000} // 자동으로 시간 off
            hideProgressBar={false} // 진행시간바를 숨김
            closeOnClick // 클릭으로 알람을 닫기
            rtl={false} // 알림 좌우 반전
            pauseOnHover // 마우스를 올리면 알람 정지
            limit={1} // 알람의 개수 제한
            theme="light"
          />
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}
