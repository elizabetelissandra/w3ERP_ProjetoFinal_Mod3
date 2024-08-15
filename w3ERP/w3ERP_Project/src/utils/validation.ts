export const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

export const validatePassword = (password: string): boolean => {
    // Adicione sua lógica de validação de senha aqui
    return password.length >= 6;
};