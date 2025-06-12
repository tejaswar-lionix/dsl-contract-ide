import React, {useState} from 'react';
export const IdeView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>IDE - IDE - syntax highlight, autocomplete, di</h2><p>highlight</p></div>
};
export default IdeView;
