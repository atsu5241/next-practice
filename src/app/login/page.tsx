'use client';

import { useEffect, useState } from 'react';
import { getProviders, signIn, ClientSafeProvider } from 'next-auth/react';

// BuiltInProviderType を使わずに string を代用
function Login() {
  const [providers, setProviders] = useState<Record<
    string,
    ClientSafeProvider
  > | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    fetchProviders();
  }, []);

  return (
    <div className="flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          アカウントにログイン
        </h2>

        <div className="mt-8 space-y-6">
          {!providers && <p>読み込み中...</p>}

          {providers &&
            Object.values(providers).map((provider) => (
              <div key={provider.id} className="text-center">
                <button
                  onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                  className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full flex items-center justify-center"
                >
                  <span>{provider.name} でログイン</span>
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Login;
