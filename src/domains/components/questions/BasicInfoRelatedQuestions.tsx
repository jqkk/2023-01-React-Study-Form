import tw from 'twin.macro';

import { Input, Radio, Textarea } from '@/components';

const BasicInfoRelatedQuestions = () => (
  <Container>
    <Question>
      <Typography>
        3개월 동안 꾸준하게 활동 가능 한가요? (학기중과 방학 모두 포함)
      </Typography>
      <div tw='flex gap-6'>
        <Radio
          id='can_participate'
          name='participation'
          value='yes'
          text='예'
        />
        <Radio
          id='unable to participate'
          name='participation'
          value='no'
          text='아니오'
        />
      </div>
    </Question>
    <Question>
      <Typography>1주일에 투자할 수 있는 시간을 선택해 주세요</Typography>
      <div tw='flex flex-col gap-3'>
        <Radio
          id='one_hour'
          name='participation_time'
          value='1'
          text='1시간 이내'
        />
        <Radio
          id='three_hour'
          name='participation_time'
          value='3'
          text='3시간 이내'
        />
        <Radio
          id='five_hour'
          name='participation_time'
          value='5'
          text='5시간 이내'
        />
        <Radio
          id='tem_hour'
          name='participation_time'
          value='10'
          text='10시간 이내'
        />
        <div tw='flex gap-3'>
          <Radio
            id='etc'
            name='participation_time'
            value='etc'
            text='기타 : '
          />
          <Input tw='flex-1' />
        </div>
      </div>
    </Question>
    <Question>
      <Typography>
        매월 월요일 10시 정기 세미나 참여 여부(1시간 이내, 카메라 필수)
      </Typography>
      <div tw='flex gap-6'>
        <Radio
          id='can_participate_seminar'
          name='seminar_participation'
          value='yes'
          text='예'
        />
        <Radio
          id='unable_to_participate_seminar'
          name='seminar_participation'
          value='no'
          text='아니오'
        />
      </div>
    </Question>
    <Question>
      <Typography>GDSC 일반 멤버로 지원하게 된 동기를 작성해 주세요</Typography>
      <Textarea />
    </Question>
    <Question>
      <Typography>
        동아리 또는 커뮤니티 또는 스터디를 운영하거나 참여한 경험이 있다면
        적어주세요(선택)
      </Typography>
      <Textarea />
    </Question>
    <Question>
      <Typography>
        팀을 이끌어보거나 다른 사람에게 무엇을 가르쳐준 경험에 대해 이야기 해
        주세요
      </Typography>
      <Textarea />
    </Question>
    <Question>
      <Typography>
        GDSC 활동으로 이루고 싶은 것들을 간단히 설명해주세요
      </Typography>
      <Textarea />
    </Question>
    <Question>
      <Typography>GDSC 활동 중에 어떤 것이 가장 기대되나요?</Typography>
      <Textarea />
    </Question>
  </Container>
);

const Container = tw.div`flex flex-col gap-16`;
const Question = tw.div`flex flex-col gap-3`;
const Typography = tw.h3`text-xl lg:text-2xl`;

export default BasicInfoRelatedQuestions;
