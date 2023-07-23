import React, { useContext } from "react";
import { UserContext, ChannelContext } from '../../App'

export default function ComponentE() {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
    return (
        <div>
            My Name is {user} - {channel}
        </div>
    )
}