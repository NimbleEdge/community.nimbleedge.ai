export const getContributors = (data, key) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].project === key) {
      return data[i].contributors;
    }
  }
  return [];
};
