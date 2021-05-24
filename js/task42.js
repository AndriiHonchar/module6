// Пиши код ниже этой строки
const getNamesSortedByFriendCount = users => {
   return [...users].sort((fuf, suf) => fuf.friends.length - suf.friends.length)
  .map((user) => user.name);
};
// Пиши код выше этой строки