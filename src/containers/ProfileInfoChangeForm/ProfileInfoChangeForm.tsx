import { handleChangeInfo, handleGetUserInfo } from '@/apis/myInfoApi';
import Button from '@/components/Button/Button';
import { userNewImage, userState } from '@/store/atoms/userState';
import { DevTool } from '@hookform/devtools';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import styles from './ProfileInfoChangeForm.module.scss';
interface FormData {
  //
  nickname: string;
  email: string;
  newPassword: string;
  checkPassword: string;
}
export interface UserInfoResponse {
  profileImageUrl: string | undefined | null;
  nickname: string;
  email: string;
}
export default function ProfileInfoChangeForm() {
  const [newImage] = useRecoilState(userNewImage);
  // const [newImage, setNewImage] = useRecoilState(userNewImage);
  const [loggedInUser, setLoggedInUser] = useRecoilState(userState);
  const [userInfo, setUserInfo] = useState<UserInfoResponse>({
    nickname: '',
    profileImageUrl: loggedInUser?.user.profileImageUrl,
    email: '',
  });

  const {
    control,
    register,
    handleSubmit,
    setValue,
    getValues,
    // formState: { errors },
  } = useForm<FormData>({
    mode: 'onSubmit',
    defaultValues: {
      nickname: userInfo.nickname,
      email: userInfo.email,
      newPassword: '',
      checkPassword: '',
    },
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const data: UserInfoResponse = await handleGetUserInfo();
        setUserInfo({
          profileImageUrl: data.profileImageUrl ?? '',
          nickname: data.nickname ?? '',
          email: data.email ?? '',
        });
      } catch (error) {
        console.error('Failed to fetch user info', error);
      }
    };
    fetchUserInfo();
  }, [setValue]);

  useEffect(() => {
    setValue('nickname', userInfo.nickname);
    setValue('email', userInfo.email);
  }, [userInfo, setValue]);

  const onSubmit = async (data: FormData) => {
    const { nickname, newPassword } = data;

    try {
      const newProfileImage = newImage?.profileImageUrl;
      await handleChangeInfo({
        nickname: nickname,
        profileImageUrl: newProfileImage,
        newPassword: newPassword,
      });

      setLoggedInUser((prev) => {
        if (!prev) return null;
        return {
          ...prev, // 기존의 상태 값 복사
          user: {
            ...prev.user, // user 객체 내의 기존 상태 값 복사
            profileImageUrl: newProfileImage || null, // profileImageUrl만 새 값으로 업데이트
          },
          // accessToken과 refreshToken에 대해 undefined가 되지 않도록 기본값('')을 설정
          accessToken: prev.accessToken || '',
          refreshToken: prev.refreshToken || '',
        };
      });
      toast.success('변경이 완료되었습니다.');
    } catch (error) {
      console.error('fail : change info ', error);
    }
    // }
    return;
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
          <input
            placeholder="닉네임을 입력해 주세요."
            defaultValue={userInfo.nickname}
            // error={
            //   errors.nickname?.message
            //     ? String(errors.nickname.message)
            //     : undefined
            // }
            {...register('nickname', {
              // required: '꼭 입력해 주세요.',
              minLength: { value: 3, message: '최소 3글자 입력 가능합니다.' },
              maxLength: { value: 10, message: '최대 10글자 입력 가능합니다.' },
            })}
          />
        </div>
        <div className={styles.inputBox}>
          <label>email</label>
          <input type="email" defaultValue={userInfo.email} readOnly={true} />
        </div>
        <div className={styles.inputBox}>
          <label>비밀번호</label>
          <input
            type="password"
            placeholder="8자 이상 입력해 주세요."
            // error={
            //   errors.nickname?.message
            //     ? String(errors.nickname.message)
            //     : undefined
            // }
            {...register('newPassword', {
              minLength: { value: 8, message: '최소 8글자 입력 가능합니다.' },
            })}
          />
        </div>
        <div className={styles.inputBox}>
          <label>비밀번호 재입력</label>
          <input
            type="password"
            placeholder="비밀번호를 한번 더 입력해 주세요."
            // error={
            //   errors.nickname?.message
            //     ? String(errors.nickname.message)
            //     : undefined
            // }
            {...register('checkPassword', {
              minLength: { value: 8, message: '최소 8글자 입력 가능합니다.' },
              validate: {
                matchesPreviousPassword: (value?: string) => {
                  const { newPassword } = getValues();
                  return (
                    newPassword === value || '비밀번호가 일치하지 않습니다.'
                  );
                },
              },
            })}
          />
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
}
