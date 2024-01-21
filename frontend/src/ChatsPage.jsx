import React from 'react';

import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props)=>{
  return (
    <div className='background'>
    <PrettyChatWindow
      projectId="9a3f34f3-78a6-4ffa-8604-ad221ce5ff57"
      username={props.user.username}
      secret={props.user.secret}
      style={{ height: '100vh' }}  
    />
    </div>
  );
}
export default ChatsPage

