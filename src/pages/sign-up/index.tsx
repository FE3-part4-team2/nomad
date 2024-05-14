import styles from './index.module.scss';
import Button from '@/components/Button/Button';
import Link from 'next/link';
import AuthLogoImage from '@/components/logo/AuthLogoImage';

export default function SignUp() {
  return (
    <>
      <div className={styles.container}>
        <AuthLogoImage />
        <div className={styles.inputContainer}>
          <div className={styles.inputWrapper}>
            <span>이메일</span>
            <input type="email" placeholder="이메일을 입력해주세요" />
          </div>
          <div className={styles.inputWrapper}>
            <span>닉네임</span>
            <input type="email" placeholder="닉네임을 입력해주세요" />
          </div>
          <div className={styles.inputWrapper}>
            <span>비밀번호</span>
            <input type="password" placeholder="비밀번호를 입력해주세요" />
          </div>
          <div className={styles.inputWrapper}>
            <span>비밀번호 확인</span>
            <input
              type="password"
              placeholder="비밀번호를 한번 더 입력해주세요"
            />
          </div>
          <Button
            status="disable"
            buttonTitle="회원가입 하기"
            radius={6}
            fontSize={1.6}
            className={styles.joinButton}
          />
        </div>
        <div className={styles.linkContainer}>
          <span>회원이신가요?</span>
          <Link href="/sign-in">로그인하기</Link>
        </div>
      </div>
    </>
  );
}
