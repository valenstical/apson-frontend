export const scrollIntoView = element => {
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  });
};

export const selectedFilter = (
  params: object,
  key: string,
  value?: string,
): object => {
  params = { ...params, [key]: value, page: 1 };
  if (!value || !value.toString().trim().length) {
    delete params[key];
  }
  return params;
};

export const getGender = (genderId: number) =>
  ['Male', 'Female', 'Male & Female'][genderId];
