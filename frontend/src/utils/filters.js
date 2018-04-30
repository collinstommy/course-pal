export const sortByTitle = (a, b) => {
  const titleA = a.title.toUpperCase(); // ignore upper and lowercase
  const titleB = b.title.toUpperCase(); // ignore upper and lowercase
  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }

  // titles must be equal
  return 0;
}

export const sortByRating = (a, b) => {
  return b.rating - a.rating;
}

