export async function telegramAuth() {
  const tg = window.Telegram?.WebApp;

  if (!tg?.initData || !tg?.initDataUnsafe?.user) {
    throw new Error('Telegram WebApp not available');
  }

  const response = await fetch('/api/auth/telegram', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      initData: tg.initData,
      user: tg.initDataUnsafe.user,
    }),
  });

  if (!response.ok) {
    throw new Error('Telegram auth failed');
  }

  return response.json();
}
