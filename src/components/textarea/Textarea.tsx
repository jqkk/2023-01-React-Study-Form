import { useRef } from 'react';
import tw, { styled } from 'twin.macro';

type TextareaProps = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const Textarea = ({ value, onChange }: TextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e);
    const textarea = textareaRef.current;
    if (!textarea) return;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight + 3}px`;
  };

  return (
    <StyledTextarea
      ref={textareaRef}
      onChange={handleChange}
      rows={1}
      value={value}
    />
  );
};

const StyledTextarea = styled.textarea(() => ({
  ...tw`w-full border-b-[3px] border-black focus-visible:outline-none text-lg lg:text-xl leading-none resize-none min-h-[24px]`,
}));

export default Textarea;
