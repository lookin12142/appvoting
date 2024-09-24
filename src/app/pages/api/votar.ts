"use strict";

import type { NextApiRequest, NextApiResponse } from 'next';
import { produceMessage } from '../../kafka/producer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('Request recibido:', req.body);
  if (req.method === 'POST') {
    const { voto, uuid, timestamp } = req.body;
    try {
      await produceMessage({ voto, uuid, timestamp });
      res.status(200).json({ message: 'Voto recibido', voto, uuid, timestamp });
    } catch (error) {
      res.status(500).json({ error: 'Error al enviar el mensaje a Kafka' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}
