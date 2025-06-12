import React, {useState} from 'react';
export const CompilerView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>COMPILER - Compiler - bytecode, IR, optimization</h2><p>bytecode</p></div>
};
export default CompilerView;
