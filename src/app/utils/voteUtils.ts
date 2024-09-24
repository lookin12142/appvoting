"use client";

const cookieCutter = require('cookie-cutter');
import axios from 'axios';

export const enviarVoto = async (voto: string) => {
  const uuid = cookieCutter.get('votoUUID');
  try {
    const response = await axios.post('/api/votar', {
      voto,
      uuid,
      timestamp: new Date().toISOString(),
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error al enviar el voto:', error);
  }
};

export const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
