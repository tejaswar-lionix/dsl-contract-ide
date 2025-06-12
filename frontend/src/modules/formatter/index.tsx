import React, {useState} from 'react';
export const FormatterView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>FORMATTER - Formatter - pretty print, style, indent</h2><p>pretty print</p></div>
};
export default FormatterView;
