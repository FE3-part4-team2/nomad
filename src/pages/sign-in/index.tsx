import styles from './index.module.scss';
import Button from '@/components/Button/Button';
import Link from 'next/link';
import AuthLogoImage from '@/components/logo/AuthLogoImage';
import AuthInput from '@/components/Input/AuthInput/AuthInput';

export default function SignIn() {
  return (
    <>
      <div className={styles.container}>
        <AuthLogoImage />
        <div className={styles.inputContainer}>
          <AuthInput
            name="이메일"
            type="email"
            placeholder="이메일을 입력해주세요"
          />
          <AuthInput
            name="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
          <div className={styles.loginButton}>
            <Button buttonTitle="로그인 하기" radius={6} fontSize={1.6} />
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
