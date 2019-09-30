import crypto from 'crypto';

const iv = Buffer.alloc(16, 0);

const key = crypto.scryptSync('password', 'salt', 24);
const cipher = crypto.createCipheriv('aes-192-cbc', key, iv);
const deCipher = crypto.createDecipheriv('aes-192-cbc', key, iv);

cipher.update('wakeup', 'utf8', 'base64');

const encrypt = cipher.final('base64');
console.log(encrypt);

deCipher.update(encrypt, 'base64', 'utf8');
const decrypted = deCipher.final('utf8');
console.log(decrypted);
