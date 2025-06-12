import React, {useState} from 'react';
export const TypesystemView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>TYPESYSTEM - Type system - obligations, parties, date</h2><p>obligations</p></div>
};
export default TypesystemView;
