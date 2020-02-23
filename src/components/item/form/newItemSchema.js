import * as yup from 'yup';

export const newItemSchema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().max(200, "Description is too long").notRequired(),
    volumeWeight: yup.number().positive().required(),
    price: yup.number().positive().required(),
    quantity: yup.number().positive().required()
});