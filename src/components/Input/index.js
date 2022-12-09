import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    bottom: 30px;
    left: 20px;
    width: 32px;
    height: 32px;
  }
`;

const Field = styled.input`
  width: 100%;
  font-size: 1.25rem;
  min-height: ${props => props.type !== "checkbox" ? "60px" : "auto"};
  padding-left: 72px;
  margin-bottom: 16px;
  border: 2px solid #000000;
  border-radius: 15px;

  &::before {
    content: "";
  }
`;

const Label = styled.label`
  font-size: 1.25rem;
  padding-left: 16px;
  margin-bottom: 2px;
  cursor : ${props => props.click ? "pointer" : "default"};
`;

const Input = (props) => {
  if (!props.icon) {
    return (
      <>
        {props.label && <Label click={props.type === "checkbox"} htmlFor={props.fieldId}>{props.label}</Label>}
        <Field
          value={props.value}
          defaultValue={props.defaultValue}
          placeholder={props.placeholder}
          id={props.fieldId}
          type={props.type ? props.type : "text"}
          readOnly={props.readOnly}
          required={props.required}
        ></Field>
      </>
    );
  }

  return (
    <Wrapper>
      {props.icon}
      {props.label && <Label htmlFor={props.fieldId}>{props.label}</Label>}
      <Field
        placeholder={props.placeholder}
        id={props.fieldId}
        type={props.type ? props.type : "text"}
        readOnly={props.readOnly}
        required={props.required}
      ></Field>
    </Wrapper>
  );
};

export default Input;
