/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props)=>{
  return (
    <div className='background'>
    <PrettyChatWindow
      projectId="1d316d73-8aba-4867-9000-14d4e0bccfda"
      username={props.user.username}
      secret={props.user.secret}
      style={{ height: '100vh' }}  
    />
    </div>
  );
}
export default ChatsPage