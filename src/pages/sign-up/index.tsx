import styles from './index.module.scss';
import Button from '@/components/Button/Button';
import Link from 'next/link';
import AuthLogoImage from '@/components/logo/AuthLogoImage';
import { useState } from 'react';
import { joinApi } from '@/apis/usersApi';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import AuthInput from '@/components/Input/AuthInput/AuthInput';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const router = useRouter();

  const onChangeEmail = (e: any) => {
    console.log(e);
    setEmail(e.target.value);
  };

  const onChangeNickname = (e: any) => {
    setNickname(e.target.value);
  };

  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const onChangePasswordCheck = (e: any) => {
    setPasswordCheck(e.target.value);
  };

  const onClickSubmit = async () => {
    try {
      const res = await joinApi(email, nickname, password);
      router.push('/sign-in');
    } catch (e: any) {
      toast.error(e.response.data.message);
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
            name="닉네임"
            type="text"
            placeholder="닉네임을 입력해주세요"
            value={nickname}
            onChange={onChangeNickname}
          />

          <AuthInput
            name="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={onChangePassword}
          />

          <AuthInput
            name="비밀번호 확인"
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
          />

          <div className={styles.joinButton}>
            <Button
              buttonTitle="회원가입 하기"
              radius={6}
              fontSize={1.6}
              onClick={onClickSubmit}
            />
          </div>
        </div>
        <div className={styles.linkContainer}>
          <span>회원이신가요?</span>
          <Link href="/sign-in">로그인하기</Link>
        </div>
      </div>
    </>
  );
}
