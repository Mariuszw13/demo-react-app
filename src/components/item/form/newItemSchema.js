import * as yup from "yup";

const newItemSchema = yup.object().shape({
    name: yup.string().required(),
    description: yup
        .string()
        .max(200, "Description is too long")
        .notRequired(),
    volumeWeight: yup
        .number()
        .positive()
        .required(),
    price: yup
        .number()
        .positive()
        .required(),
    quantity: yup
        .number()
        .positive()
        .required(),
});

export const validateForm = async (resultObject, onValidationSuccess, onValidationError) => {
    try {
        await newItemSchema.validate(resultObject, {
            abortEarly: false,
            isStrict: false,
        });
        onValidationSuccess();
    } catch (err) {
        onValidationError(err);
    }
};
