'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const PurchaseSuccess = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  // console.log(sessionId);
  useEffect(() => {
    const fetchData = async () => {
      if (sessionId) {
        try {
          console.log(sessionId);
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/checkout/success`,
            {
              method: 'POST',
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify({ sessionId }),
            }
          );
          const data = await res.json();
          console.log(data);
        } catch (err: unknown) {
          if (err instanceof Error) {
            console.error(err.message);
            console.error(err.stack);
          } else {
            console.error(err);
          }
        }
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex items-center justify-center bg-gray-100 mt-20">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          購入ありがとうございます！
        </h1>
        <p className="text-center text-gray-600">
          ご購入いただいた内容の詳細は、登録されたメールアドレスに送信されます。
        </p>
        <div className="mt-6 text-center">
          <Link
            href={`/`}
            className="text-indigo-600 hover:text-indigo-800 transition duration-300"
          >
            購入した記事を読む
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PurchaseSuccess;
