import { useFormContext } from 'react-hook-form';
import tw from 'twin.macro';

import { Input, Question, Radio } from '@/components';

const PrivacyRelatedQuestions = () => {
  const { register } = useFormContext();

  return (
    <Container>
      <Question
        title='개인정보 수집 동의 (GDSC 멤버 모집 안내에 사용 후 파기됩니다)'
        contents={
          <div tw='flex gap-6'>
            <Radio id='yes' name='privacy_policy' value='yes' text='예' />
            <Radio id='no' name='privacy_policy' value='no' text='아니오' />
          </div>
        }
      />
      <Question
        title='이름'
        contents={<Input tw='w-48 lg:w-60' {...register('name')} />}
      />
      <Question
        title='전공'
        contents={<Input tw='w-48 lg:w-60' {...register('major')} />}
      />
      <Question
        title='재학 상태'
        contents={
          <div tw='flex gap-6'>
            <Radio
              id='attending'
              name='student_status'
              value='yes'
              text='재학 중'
            />
            <Radio
              id='on_leave_of_absence'
              name='student_status'
              value='no'
              text='휴학 중'
            />
          </div>
        }
      />
      <Question
        title='학년(휴학생은 복학할 학년을 선택해 주세요)'
        contents={
          <div tw='flex flex-col gap-3'>
            <Radio id='1' name='grade' value='1' text='1학년' />
            <Radio id='2' name='grade' value='2' text='2학년' />
            <Radio id='3' name='grade' value='3' text='3학년' />
            <Radio id='4' name='grade' value='4' text='4학년' />
          </div>
        }
      />
      <Question
        title='전화번호'
        contents={<Input tw='w-48 lg:w-60' {...register('phone')} />}
      />
      <Question
        title='이메일'
        contents={<Input tw='w-48 lg:w-60' {...register('email')} />}
      />
    </Container>
  );
};

const Container = tw.div`flex flex-col gap-16`;

export default PrivacyRelatedQuestions;
