'use client';

import InvestCard from '@/components/InvestCard';
import Storage from '@/lib/storage';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

async function getData() {
  return Storage.read('investments');
}

export default function Home() {
  const [investments, setInvestments] = useState([]);
  const [isShowValues, setIsShowValues] = useState(false);

  // getData().then((data) => setInvestments(data));

  useEffect(() => {
    getData().then((data) => setInvestments(data));

    // const loadInvestments = async () => {
    //   const data = await getData();
    //   setInvestments(data);
    // };

    // loadInvestments();
  }, []);

  // useEffect(() => {}, [investments]);

  const toggleShowValues = () => {
    setIsShowValues(!isShowValues);
  };

  return (
    <div className="container mx-auto lg:max-w-screen-lg">
      <header className="my-12 text-black">
        <div className="float-right" onClick={toggleShowValues}>
          {isShowValues ? <IconEye size={24} /> : <IconEyeOff size={24} />}
        </div>
        <h1 className="text-center text-2xl font-bold">Investimentos</h1>
      </header>

      <div className="investments grid grid-cols-3 gap-3">
        {investments.map((investment) => (
          <InvestCard
            key={investment.id}
            investment={investment}
            setInvestments={setInvestments}
            isShowValues={isShowValues}
          />
        ))}
      </div>
    </div>
  );
}
