import React, {useState} from 'react';
export const ParserView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>PARSER - Parser - grammar, AST, contract clauses</h2><p>grammar</p></div>
};
export default ParserView;
