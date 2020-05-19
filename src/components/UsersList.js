import React from 'react';
import { useRecoilValue } from 'recoil';

import { usernamesList } from '../atoms/users';
import { userToFollowerMap } from '../atoms/users/selectors/followers';

export default function UsersList() {
  const usernames = useRecoilValue(usernamesList);
  const followerMap = useRecoilValue(userToFollowerMap);

  return (
    <ul>
      {usernames.map((username) => (
        <li key={username}>
          {username} ({followerMap[username]})
        </li>
      ))}
    </ul>
  );
}
