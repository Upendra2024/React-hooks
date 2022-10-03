import React from 'react';
import {UserContext,ChannelContext} from '../App';
export const ComponentC = () =>{
  return(
    <div>
      <UserContext.Consumer>
        {
          user =>{
            return(
             <ChannelContext.Consumer>
               {
                 channel =>{
                   return <div> The user name is {user} and the Channel is {channel}</div>
                 }
               }
             </ChannelContext.Consumer>
            ) 
          }
        }
      </UserContext.Consumer>

    </div>
  )
}