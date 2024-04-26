import Button from '@/components/Button/Button';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input/Input'; // 기존 ControlInput 대신 Input 컴포넌트 사용
import { toast } from 'react-toastify';
import styles from './ProfileInfoChangeForm.module.scss';

export default function ProfileInfoChangeForm({
  prevNickName,
  prevEmail,
}: {
  prevNickName: string;
  prevEmail: string;
}) {
  const {
    register,
    handleSubmit: onSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      nickName: prevNickName,
      email: prevEmail,
      password: '',
      checkPassword: '',
    },
  });

  const handleSubmit = () => {
    //이 핸들은 ProfileInfoChange 에서 만들고 ProfileInfoChangeForm에 넘겨줘야함(로직이기 때문)
    //api로 info change 시켜야함
    //toast.success('프로필 정보 변경 완료 했습니다.');
  };

  return (
    <div className={styles.profileInfoContainer}>
      <form onSubmit={onSubmit(handleSubmit)}>
        <div className={styles.titleArea}>
          <div>내 정보</div>
          <div className={styles.buttonDiv}>
            <Button fontSize={1.6} buttonTitle="저장하기" />
          </div>
        </div>
        <div className={styles.inputBox}>
          <label>닉네임</label>
          <Input
            placeholder="닉네임을 입력해 주세요."
            defaultValue={prevNickName}
            error={errors.nickName?.message}
            {...register('nickName', {
              // required: '꼭 입력해 주세요.',
              minLength: { value: 3, message: '최소 3글자 입력 가능합니다.' },
              maxLength: { value: 10, message: '최대 10글자 입력 가능합니다.' },
            })}
          />
        </div>
        <div className={styles.inputBox}>
          <label>email</label>
          <Input
            // type="email"
            placeholder="이메일을 입력해 주세요."
            defaultValue={prevEmail}
            error={errors.email?.message}
            {...register('email', {
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                message: '이메일 형식에 맞지 않습니다.',
              },
            })}
          />
        </div>
        <div className={styles.inputBox}>
          <label>비밀번호</label>
          <Input
            type="password"
            placeholder="8자 이상 입력해 주세요."
            error={errors.password?.message}
            {...register('password', {
              minLength: { value: 8, message: '최소 8글자 입력 가능합니다.' },
            })}
          />
        </div>
        <div className={styles.inputBox}>
          <label>비밀번호 재입력</label>
          <Input
            type="password"
            placeholder="비밀번호를 한번 더 입력해 주세요."
            error={errors.checkPassword?.message}
            {...register('checkPassword', {
              minLength: { value: 8, message: '최소 8글자 입력 가능합니다.' },
              validate: {
                matchesPreviousPassword: (value: string) => {
                  const { password } = getValues();
                  return password === value || '비밀번호가 일치하지 않습니다.';
                },
              },
            })}
          />
        </div>
      </form>
    </div>
  );
}
