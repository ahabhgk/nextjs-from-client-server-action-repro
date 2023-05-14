'use server';

import { getServerState, setServerState } from './_serverState';

export async function add() {
  setServerState(2);
  console.log('In add:', getServerState())
}
