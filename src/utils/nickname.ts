export const validTwitterUser = (nickname: string) => {
  return /^[a-zA-Z0-9_]{1,15}$/.test(nickname);
};
