const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort((fb, sb) => fb-sb);

const descendingReleaseDates = [...releaseDates].sort((fb, sb) => sb-fb);