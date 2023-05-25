import { useFormContext } from 'react-hook-form';
import tw from 'twin.macro';

import { Checkbox, Input, Question, Textarea } from '@/components';

const TechnologyRelatedQuestions = () => {
  const { register } = useFormContext();

  return (
    <Container>
      <Question
        title='다룰 줄 아는 언어를 선택해 주세요'
        contents={
          <div tw='flex flex-col gap-3'>
            <Checkbox id='c_language' value='c' text='C' {...register('c')} />
            <Checkbox
              id='c++_language'
              value='c++'
              text='C++'
              {...register('c++')}
            />
            <Checkbox
              id='c#_language'
              value='c#'
              text='C#'
              {...register('c#')}
            />
            <Checkbox
              id='python_language'
              value='python'
              text='Python'
              {...register('python')}
            />
            <Checkbox
              id='javascript_language'
              value='javascript'
              text='Javascript'
              {...register('javascript')}
            />
            <Checkbox
              id='kotlin_language'
              value='kotlin'
              text='Kotlin'
              {...register('kotlin')}
            />
            <Checkbox
              id='php_language'
              value='php'
              text='PHP'
              {...register('php')}
            />
            <Checkbox
              id='java_language'
              value='java'
              text='Java'
              {...register('java')}
            />
            <div tw='flex gap-3'>
              <Checkbox
                id='etc_language'
                value='etc'
                text='기타 : '
                {...register('otherLanguage')}
              />
              <Input tw='flex-1' {...register('etc/language')} />
            </div>
          </div>
        }
      />
      <Question
        title='GDSC 스터디 참여 희망 분야(없다면 기타를 선택해 주세요)'
        contents={
          <div tw='flex flex-col gap-3'>
            <Checkbox
              id='android'
              value='android'
              text='Android(자바 또는 코틀린 지식 필수)'
              {...register('android')}
            />
            <Checkbox id='ios' name='study' value='ios' text='IOS' />
            <Checkbox
              id='spring'
              value='spring'
              text='Spring or Spring Boot(자바 지식 필수)'
              {...register('spring')}
            />
            <Checkbox
              id='frontend'
              value='frontend'
              text='Front-End'
              {...register('frontend')}
            />
            <Checkbox
              id='go'
              value='go'
              text='Go - Backend(다른 언어 경험 필수)'
              {...register('go')}
            />
            <Checkbox
              id='computer_science'
              value='computer_science'
              text='Computer Science'
              {...register('computerScience')}
            />
            <Checkbox
              id='devops'
              value='devops'
              text='DevOps'
              {...register('devops')}
            />
            <div tw='flex gap-3'>
              <Checkbox
                id='etc_study'
                value='etc'
                text='기타 : '
                {...register('otherStudy')}
              />
              <Input tw='flex-1' {...register('etc/study')} />
            </div>
          </div>
        }
      />
      <Question
        title='희망 스터디와 관련된 공부 또는 프로젝트를 해본 경험이 있다면 적어주세요'
        contents={<Textarea {...register('projectExperience')} />}
      />
      <Question
        title='가장 관심 있는 기술 분야와 이유는 무엇인가요? 그리고 이 기술에 대한 어떤
          경험을 하셨나요?'
        contents={<Textarea {...register('interest')} />}
      />
      <Question
        title='프로젝트를 진행해 보신 적이 있다면 어떠한 갈등 상황 혹은 문제점이
          발생했고 이를 어떻게 해결하셨나요?'
        contents={<Textarea {...register('conflictAndResolution')} />}
      />
      <Question
        title='Github, 블로그, 포트폴리오 주소 등(선택)'
        contents={<Textarea {...register('github')} />}
      />
      <Question
        title='지원서에 담지 못한 내용이 있다면 적어주세요(선택)'
        contents={<Textarea {...register('etc')} />}
      />
    </Container>
  );
};

const Container = tw.div`flex flex-col gap-16`;

export default TechnologyRelatedQuestions;
