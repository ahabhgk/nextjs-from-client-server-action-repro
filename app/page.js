'use client';

import { useRouter } from 'next/navigation'
import { add } from './_actions';
import { getServerState } from './_serverState';

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <button onClick={async () => {
        await add()
        console.log(getServerState())
        router.refresh()
      }}>add</button>
    </main>
  );
}
