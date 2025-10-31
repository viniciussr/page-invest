
// This file represents a serverless function for newsletter signups.
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

// Serverless function handler.
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  try {
    const { email } = req.body;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        return res.status(400).json({ message: 'Please provide a valid email address.' });
    }

    const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;
    const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
    const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');
    
    if (!GOOGLE_SHEET_ID || !GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY) {
        console.error('Missing Google Sheets API credentials for newsletter.');
        return res.status(500).json({ message: 'Server configuration error.' });
    }

    const serviceAccountAuth = new JWT({
      email: GOOGLE_CLIENT_EMAIL,
      key: GOOGLE_PRIVATE_KEY,
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID, serviceAccountAuth);

    await doc.loadInfo(); 
    // Use a specific sheet for newsletter subscribers to keep data separate.
    const sheet = doc.sheetsByTitle['Newsletter Subscribers']; 
    
    if (!sheet) {
      console.error('"Newsletter Subscribers" sheet not found in the document.');
      return res.status(500).json({ message: 'Server configuration error.' });
    }

    await sheet.addRow({
      'Data de Inscrição': new Date().toLocaleString('pt-BR'),
      'Email': email,
    });

    return res.status(200).json({ message: 'Successfully subscribed!' });

  } catch (error) {
    console.error('Error in /api/newsletter:', error);
    return res.status(500).json({ message: 'An internal server error occurred.' });
  }
}
