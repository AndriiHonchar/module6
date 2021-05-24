// Пиши код ниже этой строки
const sortByDescendingFriendCount = users => {
  return [...users].sort((fu, su) => su.friends.length - fu.friends.length); 
};
// Пиши код выше этой строки