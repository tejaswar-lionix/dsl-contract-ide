import React, {useState} from 'react';
export const LexerView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>LEXER - Lexer - tokenization, keywords, contract</h2><p>tokenize</p></div>
};
export default LexerView;
