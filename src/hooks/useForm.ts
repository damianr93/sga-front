import { useState } from 'react';

export const useForm = <T extends Record<string, any>>(initialForm: T) => {
    const [formState, setFormState] = useState<T>(initialForm);

    const onInputChange = ({ target }: any) => {
        const { name, type, value, checked } = target;
        
        setFormState({
            ...formState,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    };
};
