// Пиши код ниже этой строки
const getSortedFriends = users => {
  return users.flatMap(user => user.friends)
  .filter((friend, index, allFriends) => allFriends.indexOf(friend) === index)
  .sort((ff, sf) => ff.localeCompare(sf));
};
// Пиши код выше этой строки