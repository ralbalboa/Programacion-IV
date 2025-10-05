import {z} from 'zod';

const orderSizeSchema = z.enum(['S', 'M', 'L']);


export const createOrderSchema = z.object({
    orderSize: orderSizeSchema,

    toppings: 
    z
    .array(z.string())
    .max(5,{message: "No puede tener más de 5 toppings"})
    .min(1, {message: "Debe tener al menos un topping"}),

    address: 
    z.
    string()
    .min(10,{
        message: "La dirección debe tener al menos 10 caracteres"
    })
})

export type CreateOrder = z.infer<typeof createOrderSchema>; // significa que cualquier dato que pase la validación Zod sera del tipo CreateOrder