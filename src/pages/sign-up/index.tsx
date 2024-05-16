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

  const [errors, setErrors] = useState({
    email: '',
    nickname: '',
    password: '',
    passwordCheck: '',
  });

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

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const [isPwValid, setIsPwValid] = useState(false);
  const [isPwCheckValid, setIsPwCheckValid] = useState(false);

  const validateEmail = () => {
    if (!email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: '이메일을 입력해주세요.',
      }));
      return setIsEmailValid(false);
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: '이메일 형식으로 작성해주세요.',
      }));
      return setIsEmailValid(false);
    }
    setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    return setIsEmailValid(true);
  };

  const validateNickname = () => {
    if (!nickname) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        nickname: '닉네임을 입력해주세요.',
      }));
      return setIsNicknameValid(false);
    }
    setErrors((prevErrors) => ({ ...prevErrors, nickname: '' }));
    return setIsNicknameValid(true);
  };

  const validatePassword = () => {
    if (password.length < 8) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: '비밀번호는 8자 이상이어야 합니다.',
      }));
      return setIsPwValid(false);
    }
    setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
    return setIsPwValid(true);
  };

  const validatePasswordCheck = () => {
    if (password !== passwordCheck) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        passwordCheck: '비밀번호가 다릅니다.',
      }));
      return setIsPwCheckValid(false);
    }
    setErrors((prevErrors) => ({ ...prevErrors, pwCheck: '' }));
    return setIsPwCheckValid(true);
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
            onBlur={validateEmail}
          />
          {errors.email && <div className={styles.error}>{errors.email}</div>}

          <AuthInput
            name="닉네임"
            type="text"
            placeholder="닉네임을 입력해주세요"
            value={nickname}
            onChange={onChangeNickname}
            onBlur={validateNickname}
          />
          {errors.nickname && (
            <div className={styles.error}>{errors.nickname}</div>
          )}

          <AuthInput
            name="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={onChangePassword}
            onBlur={validatePassword}
          />
          {errors.password && (
            <div className={styles.error}>{errors.password}</div>
          )}

          <AuthInput
            name="비밀번호 확인"
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            onBlur={validatePasswordCheck}
          />
          {errors.passwordCheck && (
            <div className={styles.error}>{errors.passwordCheck}</div>
          )}

          <div className={styles.joinButton}>
            <Button
              status={
                isEmailValid && isNicknameValid && isPwValid && isPwCheckValid
                  ? 'black'
                  : 'disable'
              }
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
