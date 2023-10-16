import { LogInHomePage } from './home.styled';

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <h1>Welcome</h1>
      <div>
        <LogInHomePage to="/login" title="Try it now!">
          Log In
        </LogInHomePage>
      </div>
    </div>
  );
}
