import LoginForm from '../../components/LoginForm';
import styled from 'styled-components';
import { useAuth } from '../../context/Auth';
import { Navigate } from 'react-router-dom';
import { Container } from '../../components/Container';

const Logo = styled.span`
  font-size: 96px;
  margin: 0 auto;

  @media (max-width: 767px) {
    font-size: 76px;
  }
`;

const Login = () => {
  const auth = useAuth()

  if(auth.signed) return <Navigate to="/minhaconta" replace={true}/>

  return (
    <Container>
      <Logo className='bio-rhyme'>USParty</Logo>
      <LoginForm />
    </Container>
  );
}

export default Login;