import React, { useContext } from 'react';
import { ThemeContext } from '../theme/themeContext';
import '../theme/theme.css';

const DealsTable = () => {
  const {theme}=useContext(ThemeContext);
  const deals = [
    { name: 'Collins', stage: 'Conversation', value: '$04,51,000', probability: '85%', status: 'Lost' },
    { name: 'Konopelski', stage: 'Pipeline', value: '$14,51,000', probability: '56%', status: 'Won' },
    { name: 'Adams', stage: 'Won', value: '$12,51,000', probability: '15%', status: 'Won' },
    { name: 'Schumm', stage: 'Lost', value: '$51,000', probability: '45%', status: 'Lost' },
    { name: 'Wisozk', stage: 'Follow Up', value: '$67,000', probability: '5%', status: 'Won' },
  ];

  return (
    <table className={`deals-table ${theme==="dark"?"dashboard-custom-dark":"dashboard-custom-light"}`}>
      <thead>
        <tr>
          <th>Deal Name</th>
          <th>Stage</th>
          <th>Deal Value</th>
          <th>Probability</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {deals.map((deal, index) => (
          <tr key={index}>
            <td>{deal.name}</td>
            <td>{deal.stage}</td>
            <td>{deal.value}</td>
            <td>{deal.probability}</td>
            <td className={deal.status.toLowerCase()} ><span>{deal.status}</span></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DealsTable;
