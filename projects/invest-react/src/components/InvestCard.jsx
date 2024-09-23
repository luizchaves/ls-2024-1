'use client';

import Link from 'next/link';
import { IconTrash } from '@tabler/icons-react';
import { formatCurrency, formatDate } from '@/lib/format';
import Storage from '@/lib/storage';

export default function InvestCard({
  investment,
  setInvestments,
  isShowValues,
}) {
  const handleDeleteInvestment = (id) => {
    setInvestments((prevInvestments) =>
      prevInvestments.filter((investment) => investment.id !== id)
    );
    Storage.remove('investments', id);
  };

  return (
    <div
      id={`investment-${investment.id}`}
      className="bg-white shadow-md rounded-lg p-4 relative"
    >
      <div className="flex justify-between items-center">
        <Link href={`/investments/${investment.id}`}>
          <h3 className="investment-name text-lg font-semibold text-gray-700">
            {investment.name}
          </h3>
        </Link>
        <p className="investment-value text-lg font-semibold text-gray-700">
          {isShowValues ? formatCurrency(investment.value / 100) : 'R$ -----'}
        </p>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-500">
          <span className="font-bold">Origem:</span>{' '}
          <span className="investment-origin">{investment.origin}</span>
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-bold">Categoria:</span>{' '}
          <span className="investment-category">{investment.category}</span>
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-bold">Taxa:</span>{' '}
          <span className="investment-interest">{investment.interest}</span>
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-bold">Data:</span>{' '}
          <span className="investment-created_at">
            {formatDate(investment.created_at)}
          </span>
        </p>
      </div>
      <div className="absolute bottom-4 right-4 inline-flex">
        <IconTrash
          size={20}
          className="text-gray-400 hover:text-gray-500 cursor-pointer"
          onClick={() => handleDeleteInvestment(investment.id)}
        />
      </div>
    </div>
  );
}
