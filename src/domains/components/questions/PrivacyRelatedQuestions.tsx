import tw from 'twin.macro';

import { Input, Radio } from '@/components';

// RadioGroup 컴포넌트를 만들어서 사용하면 더 좋을 것 같다.
const PrivacyRelatedQuestions = () => (
  <Container>
    <Question>
      <Typography>
        개인정보 수집 동의 (GDSC 멤버 모집 안내에 사용 후 파기됩니다)
      </Typography>
      <div tw='flex gap-6'>
        <Radio id='yes' name='privacy_policy' value='yes' text='예' />
        <Radio id='no' name='privacy_policy' value='no' text='아니오' />
      </div>
    </Question>
    <Question>
      <Typography>이름</Typography>
      <Input tw='w-48 lg:w-60' />
    </Question>
    <Question>
      <Typography>전공</Typography>
      <Input tw='w-48 lg:w-60' />
    </Question>
    <Question>
      <Typography>재학 상태</Typography>
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
    </Question>
    <Question>
      <Typography>학년(휴학생은 복학할 학년을 선택해 주세요)</Typography>
      <div tw='flex flex-col gap-3'>
        <Radio id='1' name='grade' value='1' text='1학년' />
        <Radio id='2' name='grade' value='2' text='2학년' />
        <Radio id='3' name='grade' value='3' text='3학년' />
        <Radio id='4' name='grade' value='4' text='4학년' />
      </div>
    </Question>
    <Question>
      <Typography>전화번호</Typography>
      <Input tw='w-48 lg:w-60' />
    </Question>
    <Question>
      <Typography>이메일</Typography>
      <Input tw='w-48 lg:w-60' />
    </Question>
  </Container>
);

const Container = tw.div`flex flex-col gap-16`;
const Question = tw.div`flex flex-col gap-3`;
const Typography = tw.h3`text-xl lg:text-2xl`;

export default PrivacyRelatedQuestions;
