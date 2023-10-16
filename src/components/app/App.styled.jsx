import styled from '@emotion/styled';

export const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: black;
  border: 2px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  margin: 20px; /* Додали зовнішні відступи */
`;

export const MainHeader = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: #007bff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f0f0f0; /* Додали фоновий колір */
  padding: 10px; /* Додали внутрішні відступи */
  border: 1px solid #ddd; /* Додали границю */
  border-radius: 5px; /* Додали закруглені кути */
`;

export const FormTable = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 400px;
  padding: 8px;
`;

export const ButtonAddContact = styled.button`
  font-weight: 700;
  border-radius: 4px;
  margin-bottom: 8px;
  padding: 8px;
  width: 140px;
  cursor: pointer;
  background: rgb(87, 87, 253);
  color: white;

  border: 1.5px solid rgb(171, 163, 163);
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);

  transition: box-shadow 250ms linear, background 250ms linear;

  &:hover {
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
    background: blue;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 12px;
  font-size: 20px;
`;
export const InputInfToAdd = styled.input`
  width: 380px;

  border: none;
  border-bottom: 1px solid rgb(171, 163, 163);
  outline: none;
  background: transparent;
  &:focus {
    border-bottom: 2px solid #000;
  }
`;

export const ItemsContracts = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 12px;
`;

export const ItemContact = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  max-width: 600px;
`;
export const ButtonDel = styled.button`
  color: black;
  margin-right: 0;
  margin-left: auto;
  border: none;
  border-radius: 4px;
  height: 30px;
  border: none;
  font-size: 16px;
  display: flex;
  align-items: center;

  transition: color 250ms linear, background-color 250ms linear,
    box-shadow 250ms linear;

  svg {
    width: 25px;
    height: 25px;
  }

  &:hover,
  &:focus {
    color: rgb(255, 255, 255);
    background-color: red;
    cursor: pointer;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
  }
`;
export const FindContact = styled.p`
  margin: 4px;
  font-weight: 500;
`;

export const WraperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: rgba(249, 249, 249, 0.8);
`;

export const FormContacts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const GradientTextPhone = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
  font-family: 'YourDesiredFont', sans-serif;
`;

export const GradientSubTitleContacts = styled.h2`
  font-size: 20px;
  margin-top: 20px;
  color: #333;
  font-family: 'YourDesiredFont', sans-serif;
`;

// ////////////////////home page/////////////////////

// layout////////////////////////
export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`;
