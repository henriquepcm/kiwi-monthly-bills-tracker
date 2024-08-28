/* Block "Enter" if the value is either "$0.00" or "0.00" */
export const blockEnterKey = (e: React.KeyboardEvent, value: string) => {
     // Remove undesired spaces
     const trimedValue = value ? value.trim() : "";

     // Conditions to block Enter key
     const shouldBeBlocked =
          trimedValue === "0" ||
          trimedValue === "0.00" ||
          trimedValue === "$0.00" ||
          trimedValue === "" ||
          trimedValue === null ||
          trimedValue === undefined;

     if (e.key === "Enter" && shouldBeBlocked) {
          e.preventDefault();
     }
};
