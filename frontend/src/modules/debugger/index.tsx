import React, {useState} from 'react';
export const DebuggerView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>DEBUGGER - Debugger - breakpoints, step, inspect, w</h2><p>breakpoints</p></div>
};
export default DebuggerView;
