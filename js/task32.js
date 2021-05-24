// Пиши код ниже этой строки
const calculateTotalBalance = users => {
  return users.reduce((total, user) => total + user.balance, 0);
};
// Пиши код выше этой строки