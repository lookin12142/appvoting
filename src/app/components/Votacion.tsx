"use client";

import { useEffect } from 'react';
const cookieCutter = require('cookie-cutter');
import { enviarVoto, generateUUID } from '../utils/voteUtils';

const Votacion = () => {
  useEffect(() => {
    if (!cookieCutter.get('votoUUID')) {
      cookieCutter.set('votoUUID', generateUUID(), { path: '/' });
    }
  }, []);

  return (
    <div>
      <button onClick={() => enviarVoto('perro')}>Votar por Perro</button>
      <button onClick={() => enviarVoto('gato')}>Votar por Gato</button>
    </div>
  );
};

export default Votacion;
