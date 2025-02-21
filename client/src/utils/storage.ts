
import { Client } from "replit-object-storage";

const client = new Client();

export const uploadImage = async (file: File): Promise<string> => {
  const fileName = `profile-${Date.now()}-${file.name}`;
  await client.uploadFromBlob(fileName, file);
  return `https://${process.env.REPLIT_BUCKET_NAME}.replit.storage/${fileName}`;
};
