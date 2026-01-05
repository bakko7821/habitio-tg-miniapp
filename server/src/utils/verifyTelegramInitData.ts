import crypto from 'crypto';

export function verifyTelegramInitData(
  initData: string,
  botToken: string
): boolean {
  const parsed = new URLSearchParams(initData);

  const hash = parsed.get('hash');
  if (!hash) return false;

  parsed.delete('hash');

  const dataCheckString = Array.from(parsed.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}=${value}`)
    .join('\n');

  const secretKey = crypto
    .createHmac('sha256', 'WebAppData')
    .update(botToken)
    .digest();

  const calculatedHash = crypto
    .createHmac('sha256', secretKey)
    .update(dataCheckString)
    .digest('hex');

  return calculatedHash === hash;
}
