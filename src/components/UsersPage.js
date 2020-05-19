import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

import { usernamesList } from '../atoms/users';

import UsersList from './UsersList';

function UserInput() {
  const [input, setInput] = useState('');
  const [usernames, setUsernames] = useRecoilState(usernamesList);

  function onChange(event) {
    setInput(event.target.value.trim());
  }

  function submit() {
    setUsernames([...usernames, input]);

    setInput('');
  }

  return (
    <div>
      <input type="text" value={input} onChange={onChange} />

      <button onClick={submit}>Add Github User</button>
    </div>
  );
}

export default function UsersPage() {
  return (
    <div>
      <UserInput />

      <React.Suspense fallback={<h1>Loading...</h1>}>
        <UsersList />
      </React.Suspense>
    </div>
  );
}
