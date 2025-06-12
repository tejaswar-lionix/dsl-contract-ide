import React, {useState} from 'react';
export const LspView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>LSP - LSP - hover, goto def, references, renam</h2><p>hover</p></div>
};
export default LspView;
