
import React from 'react';

const IdeaCard = ({idea}) => {
    const {_id,title} =idea;
    return (
     <div className="">
  {title}
     </div>
    );
};

export default IdeaCard;