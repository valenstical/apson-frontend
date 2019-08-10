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
  ['Male Only', 'Female Only', 'Male & Female'][genderId];

export const toMobileNumber = (phone: string) => {
  let suffix = '0';
  const firstLetter = phone.charAt(0);
  if (firstLetter === '2') {
    suffix = '+';
  } else if (firstLetter === '0' || firstLetter === '+') {
    suffix = '';
  }
  return `${suffix}${phone}`;
};
