import { useAtom } from 'jotai';
import tw from 'twin.macro';

import { Button } from '@/components';

import { stepAtom } from '../atoms/step';
import BasicInfoRelatedQuestions from './questions/BasicInfoRelatedQuestions';
import PrivacyRelatedQuestions from './questions/PrivacyRelatedQuestions';
import TechnologyRelatedQuestions from './questions/TechnologyRelatedQuestions';

const Steps = [
  <PrivacyRelatedQuestions />,
  <BasicInfoRelatedQuestions />,
  <TechnologyRelatedQuestions />,
];

const MemberRecruitmentForm = () => {
  const [step, setStep] = useAtom(stepAtom);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {};

  return (
    <>
      {Steps[step]}
      <ButtonContainer>
        <Button onClick={handlePreviousStep} disabled={step === 0}>
          이전
        </Button>
        {step === 2 ? (
          <Button onClick={handleSubmit}>제출</Button>
        ) : (
          <Button onClick={handleNextStep}>다음</Button>
        )}
      </ButtonContainer>
    </>
  );
};

const ButtonContainer = tw.div`flex justify-between mt-16`;

export default MemberRecruitmentForm;
