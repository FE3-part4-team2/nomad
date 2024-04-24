import Button from '@/components/Button/Button';
import { useForm } from 'react-hook-form';
import ControlInput from '../ControlInput/ControlInput';
import { toast } from 'react-toastify';

interface Form {
  nickName: string;
  email: string;
  password: string;
  checkPassword: string;
  confirmPassword: string;
}

export default function ProfileInfoChangeForm({
  prevNickName,
  prevEmail,
}: {
  prevNickName: string;
  prevEmail: string;
}) {
  const {
    register,
    control,
    handleSubmit: onSubmit,
    getValues,
    formState: { errors },
  } = useForm<Form>({
    mode: 'onSubmit',
    defaultValues: {
      nickName: prevNickName,
      email: prevEmail,
      password: '',
      checkPassword: '',
    },
  });

  const handleSubmit = (data: Form) => {
    //이 핸들은 ProfileInfoChange 에서 만들고 ProfileInfoChangeForm에 넘겨줘야함(로직이기 때문)
    //api로 info change 시켜야함
    //toast.success('프로필 정보 변경 완료 했습니다.');
  };

  return (
    <form onSubmit={onSubmit(handleSubmit)}>
      <div className="titleArea">
        <div>내 정보</div>
        <Button>저장하기</Button>
      </div>
      <div>
        <label>닉네임</label>
        <ControlInput<Form>
          control={control}
          name="nickName"
          rules={{
            required: '꼭 입력해 주세요.',
            minLength: { value: 3, message: '최소 10글자 입력 가능합니다.' },
            maxLength: { value: 10, message: '최대 10글자 입력 가능합니다.' },
          }}
        />
        {errors.nickName ? (
          <p className="error">{errors.nickName?.message}</p>
        ) : null}
      </div>
      <div>
        <label>email</label>
        <input
          type="text"
          {...register('email', {
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: '이메일 형식에 맞지 않습니다.',
            },
          })}
        />
      </div>
      <div>
        <label>비밀번호</label>
        <ControlInput<Form>
          control={control}
          name="password"
          type="password"
          placeholder="8자 이상 입력해 주세요."
          rules={{
            // required: '8자 이상 입력해 주세요',
            minLength: { value: 8, message: '최소 8글자 입력 가능합니다.' },
          }}
        />
      </div>
      <div>
        <label>비밀번호 재입력</label>
        <ControlInput<Form>
          control={control}
          name="checkPassword"
          type="password"
          placeholder="비밀번호를 한번 더 입력해 주세요."
          rules={{
            minLength: { value: 8, message: '최소 8글자 입력 가능합니다.' },
            validate: {
              matchesPreviousPassword: (value: string) => {
                const { password } = getValues();
                return password === value || '비밀번호가 일치하지 않습니다.';
              },
            },
          }}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword?.message}</p>
        )}
      </div>
    </form>
  );
}
