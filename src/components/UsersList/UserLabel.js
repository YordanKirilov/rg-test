import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  margin-top: 8px;
  padding: 4px 8px;
  background: #eee;
  > p {
    margin-bottom: 0;
  }
`;

const StyledInput = styled.input`
  border: 1px solid #ddd;
`;
const Label = styled.strong`
  display: inline-block;
  padding: 2px 4px;
  font-size: 12px;
  color: #fff;
  background: #2972fb;
  border: 1px solid #376ed6;
  border-radius: 3px;
`;

const UserLabel = ({ label, handleChangeLabel, user }) => {
  return (
    <StyledForm>
      <label>Add user label: </label>
      <StyledInput
        onChange={(event) => handleChangeLabel(event, user.uuid)}
        value={label}
        type="text"
      />
      {label && (
        <div>
          <Label>{label}</Label>
        </div>
      )}
    </StyledForm>
  );
};

export default UserLabel;
