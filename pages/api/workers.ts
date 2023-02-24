import { NextApiRequest, NextApiResponse } from 'next'
import funcionarios from './api.json'

export default function handler(req:NextApiRequest, res:NextApiResponse) {
    res.status(200).json(funcionarios)
}