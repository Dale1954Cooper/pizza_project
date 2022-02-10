export const rules = {
    required: (message: string = 'required field') => ({
        required: true,
        message
    }),
    generateId: () => 'id' + Math.random().toString(16).slice(2)

}
