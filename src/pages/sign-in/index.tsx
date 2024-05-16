import styles from './index.module.scss';
import Button from '@/components/Button/Button';
import Link from 'next/link';
import AuthLogoImage from '@/components/logo/AuthLogoImage';
import AuthInput from '@/components/Input/AuthInput/AuthInput';
import { loginApi } from '@/apis/authApi';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const onChangeEmail = (e:any) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e:any) => {
    setPassword(e.target.value);
  };

  const onClickLogin = async () => {
    try {
      const res = await loginApi(email, password);

      {
        res && toast.success('로그인 되었습니다.');
        router.push('/');
      }
    } catch (e: any) {
      console.error(e);
    }
  };
  return (
    <>
      <div className={styles.container}>
        <AuthLogoImage />
        <div className={styles.inputContainer}>
          <AuthInput
            name="이메일"
            type="email"
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={onChangeEmail}
          />
          <AuthInput
            name="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={onChangePassword}
          />
          <div className={styles.loginButton}>
            <Button
              buttonTitle="로그인 하기"
              radius={6}
              fontSize={1.6}
              onClick={onClickLogin}
            />
          </div>
        </div>
        <div className={styles.linkContainer}>
          <span>회원이 아니신가요?</span>
          <Link href="/sign-up">회원가입하기</Link>
        </div>
      </div>
    </>
  );
}
