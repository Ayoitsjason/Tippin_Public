export const toggleBool = (boolean) => (boolean ? false : true);

export const getCurrentTimestamp = () => {
  const dateObject = new Date();

  const month = `0 ${dateObject.getMonth() + 1}`.slice(-2);
  const date = `0 ${dateObject.getDate()}`.slice(-2);
  const year = dateObject.getFullYear();

  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();
  const seconds = dateObject.getSeconds();
  const timestamp = {
    date: `${month}-${date}-${year}`,
    time: `${hours}:${minutes}:${seconds}`,
  };
  return timestamp;
};
