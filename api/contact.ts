// This file represents a serverless function.
// In a real-world scenario, this would be deployed to a cloud provider (like Vercel, Netlify, AWS Lambda).
// It securely handles the communication with the Google Sheets API.

import { GoogleSpreadsheet } from 'google-spreadsheet';
// FIX: Import JWT from google-auth-library for v4+ of google-spreadsheet
import { JWT } from 'google-auth-library';

// This is a simplified representation of a serverless function handler.
// The actual signature may vary depending on the deployment platform.
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }

  try {
    const { fullName, email, phone, patrimony, message } = req.body;

    // These would be stored as environment variables on the serverless platform for security.
    const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;
    const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
    // The private key needs to be formatted correctly (e.g., replacing \\n with \n)
    const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');
    
    if (!GOOGLE_SHEET_ID || !GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY) {
        console.error('Missing Google Sheets API credentials in environment variables.');
        // In a real app, you wouldn't expose this level of detail to the client.
        return res.status(500).json({ message: 'Server configuration error.' });
    }

    // FIX: Update authentication method for google-spreadsheet v4+.
    // The `useServiceAccountAuth` method is deprecated. Authentication is now handled
    // by passing a `JWT` auth object to the GoogleSpreadsheet constructor.
    const serviceAccountAuth = new JWT({
      email: GOOGLE_CLIENT_EMAIL,
      key: GOOGLE_PRIVATE_KEY,
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    // Initialize the sheet with the sheet ID and auth object.
    const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID, serviceAccountAuth);

    await doc.loadInfo(); // loads document properties and worksheets
    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsByTitle['MySheet']

    // Add a new row with the form data
    await sheet.addRow({
      'Data de Envio': new Date().toLocaleString('pt-BR'),
      'Nome Completo': fullName,
      'Email': email,
      'Telefone': phone,
      'Patrimônio': patrimony,
      'Mensagem': message,
    });

    return res.status(200).json({ message: 'Success' });

  } catch (error) {
    console.error('Error in /api/contact:', error);
    // Return a generic error message to the client
    return res.status(500).json({ message: 'An internal server error occurred.' });
  }
}
