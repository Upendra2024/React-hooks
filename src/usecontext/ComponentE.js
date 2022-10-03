import React, { useContext } from 'react';
import { UserContext, ChannelContext } from '../App';

export const ComponentE = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      User : {user} <br />
      Channel : {channel}
    </div>
  );
};
