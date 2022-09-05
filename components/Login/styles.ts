import styled from 'styled-components';

export const Container = styled.div`
  background-color: #d4ddee;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  > div {
    display: grid;
    grid-template-columns: 1fr 0.4fr;
    width: 1100px;
    margin: 0 auto;
    gap: 12px;

    @media (max-width: 1100px) {
      width: 100%;
      grid-template-columns: 1fr;
    }
  }

  > footer {
    background-color: #bccde9;
    width: 1100px;
    text-align: center;
    padding: 4px 0;
    margin-top: 12px;

    @media (max-width: 1100px) {
      width: 100%;
    }
  }
`;

export const Intro = styled.div`
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background-color: #fff;

  > .logo {
    width: 200px;
    margin: 0 auto 10px auto;
  }

  > p {
    margin-top: 4px;

    > strong {
      color: #c63f7d;
    }
  }

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  > div {
    background-color: #e8eefa;
    padding: 10px;
    border: 3px solid #fff;
    padding: 20px;

    &.form {
      > span {
        display: block;
        text-align: center;
        margin-bottom: 10px;
      }

      > form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        label {
          display: flex;
          gap: 10px;
          align-items: center;
          justify-content: center;

          > input {
            background-color: #fff;
            margin-bottom: 10px;
          }
        }

        > span {
          display: block;
          color: #b8acc4;
          margin-top: 4px;
          font-size: 13px;
        }

        > button {
          margin: 10px auto 0 auto;
          padding: 2px 4px;
        }
      }

      > .forgotPassword {
        text-align: center;
        margin-top: 20px;
      }
    }

    &.signUp {
      text-align: center;

      > span {
        display: block;
      }

      > a {
        text-transform: uppercase;
        font-weight: bold;
      }
    }
  }
`;
