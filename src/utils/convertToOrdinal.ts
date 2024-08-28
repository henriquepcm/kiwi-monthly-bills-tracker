export const convertToOrdinal = (day: string) => {
     const dayAsNumber = Number(day);
     const suffixes = ["th", "st", "nd", "rd"];
     const remainder = dayAsNumber % 10;
     const exception = dayAsNumber % 100;

     if (exception >= 11 && exception <= 13) {
          return `${dayAsNumber}th`;
     }

     return `${dayAsNumber}${suffixes[remainder] || suffixes[0]}`;
};
