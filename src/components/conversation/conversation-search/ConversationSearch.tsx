/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import './ConversationSearch.scss';
import IChat from '../../../Models/IChat';

const ConversationSearch = (props:{conversations:IChat[] }) => {
    let searchInput = null;

    if (props.conversations && props.conversations?.length !=0) {
        searchInput = <input type="text" placeholder="Search" />;
    }

    return (
        <div id="search-container">
            { searchInput }
        </div>
    );
}

export default ConversationSearch;