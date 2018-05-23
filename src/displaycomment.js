import React from 'react';

export const Displaycomment = ({comment}) =>  <div id="name"> {comment.map((i) => <div> {i.comment} </div>)} </div>
