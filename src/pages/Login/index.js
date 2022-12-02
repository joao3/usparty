import LoginForm from '../../components/LoginForm';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const Logo = styled.span`
  font-size: 96px;
  margin: 0 auto;
`;

const Login = () => {
  return (
    <Container>
      <Logo className='bio-rhyme'>USParty</Logo>
      <LoginForm />
    </Container>
  );
}

export default Login;
