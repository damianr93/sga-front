import { useState } from 'react';

export const useForm = <T extends Record<string, any>>(initialForm: T) => {
    const [formState, setFormState] = useState<T>(initialForm);

    const onInputChange = ({ target }: any) => {
        const {name, value } = target;
        !name ? 
        setFormState({
            ...formState,
            tipo: value
        }) :
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}