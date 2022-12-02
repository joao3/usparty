import styled from 'styled-components';

const Wrapper = styled.div `
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
    font-size: 20px;
    min-height: 60px;
    padding-left: 72px;
    margin-bottom: 16px;
    border: 2px solid #000000;
    border-radius: 15px;

    &::before {
        content: "";
    }
`;

const Label = styled.label`
    font-size: 20px;
    padding-left: 16px;
    margin-bottom: 2px;
`;

const Input = (props) => {

    if (!props.icon) {
        return (
            <>
                {props.label && <Label htmlFor={props.fieldId}>{props.label}</Label>}
                <Field placeholder={props.placeholder} id={props.fieldId} type={props.type? props.type : "text"}></Field>
            </>
        );
    }

    return (
        <Wrapper>
            {props.icon}
            {props.label && <Label htmlFor={props.fieldId}>{props.label}</Label>}
            <Field placeholder={props.placeholder} id={props.fieldId} type={props.type? props.type : "text"}></Field>
        </Wrapper>
    );
}

export default Input;
