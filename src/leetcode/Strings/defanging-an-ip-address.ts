export const defangIPaddr = (ip: string): string => {
  return ip.split(".").join("[.]");
};
