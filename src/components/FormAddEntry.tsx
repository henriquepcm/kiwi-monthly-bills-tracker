import { useState } from "react";
import styled from "styled-components";

const ModalForm = styled.form`
     display: flex;
     flex-direction: column;
     width: 36rem;
`;
const ModalFormField = styled.div`
     display: flex;
     flex-direction: column;
`;
const ModalFormFieldLabel = styled.label`
     transform: translate(2rem, 3rem);
     color: #888888;
`;

const ModalFormFieldInput = styled.input`
     padding-left: 2rem;
     padding-top: 3rem;
     font-size: 1.6rem;
     color: #888;
     border: 0.16rem solid #5c5c5c;
     border-radius: 0.6rem;
     background-color: #000;
     color: #fff;
     height: 5rem;
     transition-duration: 0.4s;
     &:focus {
          outline: none; /* Remove default focus outline */
          background-color: #222;
     }
`;
const ModalFormButton = styled.button`
     background-color: #22c580;
     height: 8.5rem;
     color: #fff;
     border-radius: 0.6rem;
     border: none;
     font-size: 1.6rem;
     transition-duration: 0.4s;
     margin-top: 2rem;
     &:hover {
          background-color: #1da46c;
          cursor: pointer;
          font-size: 1.5rem;
     }
`;

export default function FormAddEntry() {
     const [name, setName] = useState("");
     const [value, setValue] = useState("");
     const [dueDay, setDueDay] = useState("");

     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();

          // Save entry to localStorage
          const entriesData = { name, value, dueDay };
          localStorage.setItem("entriesData", JSON.stringify(entriesData));

          //Clean for after submitting
          setName("");
          setValue("");
          setDueDay("");

          alert("Monthly fixed cost saved!");
     };

     return (
          <>
               <ModalForm onSubmit={handleSubmit}>
                    <ModalFormField>
                         <ModalFormFieldLabel>Name</ModalFormFieldLabel>
                         <ModalFormFieldInput type="text" />
                    </ModalFormField>
                    <ModalFormField>
                         <ModalFormFieldLabel>Value</ModalFormFieldLabel>
                         <ModalFormFieldInput
                              type="text"
                              pattern="^\d+\,\(\.\d{1,2})?$"
                              title="Enter a valid value"
                         />
                    </ModalFormField>
                    <ModalFormField>
                         <ModalFormFieldLabel>Due day</ModalFormFieldLabel>
                         <ModalFormFieldInput
                              type="text"
                              pattern="^(?:[1-9]|[12][0-9]|31)$"
                              title="Enter a valid due day"
                         />
                    </ModalFormField>
                    <ModalFormButton type="submit">Add expense</ModalFormButton>
               </ModalForm>
          </>
     );
}
