export const formatCountryCurrency = (value: string) => {
     return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
     }).format(Number(value));
};

export const removeCommas = (value: string) => {
     return value.replace(/[$,]/g, "");
};

export const removeDollarSign = (value: string) => {
     return value.replace(/[$]/g, "");
};
