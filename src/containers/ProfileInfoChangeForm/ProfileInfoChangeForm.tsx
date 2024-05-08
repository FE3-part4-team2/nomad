import React, { useEffect, useState } from 'react';
import Button from '@/components/Button/Button';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input/Input';
import styles from './ProfileInfoChangeForm.module.scss';
import { handleChangeInfo, handleGetUserInfo } from '@/apis/myInfoApi';

interface FormData {
  profileImage: string;
  nickName: string;
  email: string;
  password: string;
  checkPassword?: string;
}

export default function ProfileInfoChangeForm() {
  const [userInfo, setUserInfo] = useState({
    profileImage: '',
    nickName: '',
    email: '',
  });

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onSubmit',
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const data = await handleGetUserInfo();
        setUserInfo({
          profileImage: data.profileImageUrl ?? '',
          nickName: data.nickName ?? '',
          email: data.email ?? '',
        });
        setValue('nickName', data.nickName ?? '');
        setValue('email', data.email ?? '');
        // setValue('profileImage', data.profileImage ?? '');
      } catch (error) {
        console.error('Failed to fetch user info', error);
      }
    };

    fetchUserInfo();
  }, [setValue]);

  const onSubmit = async (data: FormData) => {
    const { profileImage, nickName, password } = data;
    try {
      await handleChangeInfo({
        image: profileImage,
        nickname: nickName,
        password: password,
      });
    } catch (error) {
      console.error('fail : change info ', error);
    }
  };

  return (
    <div className={styles.profileInfoContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.titleArea}>
          <div className={styles.myInfo}>내 정보</div>
          <div className={styles.buttonDiv}>
            <Button fontSize={1.6} buttonTitle="저장하기" />
          </div>
        </div>
        <div className={styles.inputBox}>
          <label>닉네임</label>
          <Input
            placeholder="닉네임을 입력해 주세요."
            defaultValue={userInfo.nickName}
            error={
              errors.nickName?.message
                ? String(errors.nickName.message)
                : undefined
            }
            {...register('nickName', {
              // required: '꼭 입력해 주세요.',
              minLength: { value: 3, message: '최소 3글자 입력 가능합니다.' },
              maxLength: { value: 10, message: '최대 10글자 입력 가능합니다.' },
            })}
          />
        </div>
        <div className={styles.inputBox}>
          <label>email</label>
          <Input type="email" defaultValue={userInfo.email} readOnly={true} />
        </div>
        <div className={styles.inputBox}>
          <label>비밀번호</label>
          <Input
            type="password"
            placeholder="8자 이상 입력해 주세요."
            error={
              errors.nickName?.message
                ? String(errors.nickName.message)
                : undefined
            }
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
            error={
              errors.nickName?.message
                ? String(errors.nickName.message)
                : undefined
            }
            {...register('checkPassword', {
              minLength: { value: 8, message: '최소 8글자 입력 가능합니다.' },
              validate: {
                matchesPreviousPassword: (value?: string) => {
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
