export const isFormCorrectlyFilled = (
     name: string,
     dueDay: string,
     value: string
) => {
     return name && value && value !== "0.00" && dueDay && dueDay !== "0";
};

//check for "$0.00" or "0.00"
export const isZero = (value: string) => {
     return /^\$?0\.00$/.test(value);
};
