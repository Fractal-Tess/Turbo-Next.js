import { alphabet, generateRandomString } from 'oslo/crypto';

export function generateId() {
  return generateRandomString(15, alphabet('0-9', 'a-z'));
}
