'use client';

import { useRouter } from 'next/navigation'
import { add } from './_actions';

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <button onClick={async () => {
        await add()
        router.refresh()
      }}>add</button>
    </main>
  );
}
