import React from 'react';
import tw, { styled } from 'twin.macro';

type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
  text: string;
};

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ id, name, value, text, ...others }, ref) => (
    <Label htmlFor={id}>
      <Input
        type='radio'
        id={id}
        name={name}
        value={value}
        ref={ref}
        {...others}
      />
      <Text>{text}</Text>
    </Label>
  ),
);

const Label = styled.label({
  ...tw`text-lg lg:text-xl cursor-pointer inline-block w-fit`,
});

const Input = styled.input`
  ${tw`mr-2 cursor-pointer`}

  &[type=radio] {
    vertical-align: middle;
    appearance: none;
    border: max(2px, 0.1em) solid gray;
    border-radius: 50%;
    width: 1.25em;
    height: 1.25em;
  }

  &[type='radio']:checked {
    ${tw`border-[0.4em] border-blue-600`}
  }
`;

const Text = styled.span({
  verticalAlign: 'middle',
});

export default Radio;
