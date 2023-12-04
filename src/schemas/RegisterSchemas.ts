import { z } from 'zod'

export const RegisterSchemas = z.object({
    id: z.number().default(0),
    name: z.string().nonempty('Vui lòng nhập tài khoản'),  
    email: z.string().nonempty('Vui lòng nhập email').email('Vui lòng nhập đúng email'),
    password: z.string().nonempty('Vui lòng nhập mật khẩu'),
    phone: z.string().nonempty('Vui lòng nhập số điện thoại'),
    birthday: z.string().nonempty('Vui lòng chọn ngày sinh'),
    gender:z.boolean().default(true),
    role:z.string().default("USER")
   

})

export type RegisterSchemasType = z.infer<typeof RegisterSchemas>