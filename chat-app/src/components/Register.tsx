import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function Register() {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState<RegisterData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar sua lógica de registro
    console.log('Dados de registro:', registerData);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Container principal com responsividade */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Lado esquerdo - Formulário */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
          <div className="max-w-md w-full space-y-6">
            {/* Logo e Título */}
            <div className="flex flex-col items-center">
              <div className="bg-[#25D366] p-3 rounded-full">
                <span className="text-2xl font-bold text-white">💬</span>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold text-gray-900">
                Criar uma conta
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Junte-se ao ChatApp hoje
              </p>
            </div>
            
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nome completo
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1 appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#25D366] focus:border-[#25D366] focus:z-10 sm:text-sm"
                    placeholder="Seu nome completo"
                    value={registerData.name}
                    onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#25D366] focus:border-[#25D366] focus:z-10 sm:text-sm"
                    placeholder="Seu melhor email"
                    value={registerData.email}
                    onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Senha
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="mt-1 appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#25D366] focus:border-[#25D366] focus:z-10 sm:text-sm"
                    placeholder="Crie uma senha forte"
                    value={registerData.password}
                    onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                    Confirmar Senha
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    className="mt-1 appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#25D366] focus:border-[#25D366] focus:z-10 sm:text-sm"
                    placeholder="Confirme sua senha"
                    value={registerData.confirmPassword}
                    onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#25D366] hover:bg-[#128C7E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] transition-colors duration-200"
                >
                  Criar conta
                </button>
              </div>
            </form>
            
            <p className="text-center text-sm text-gray-600">
              Já tem uma conta?{' '}
              <button 
                onClick={() => navigate('/login')}
                className="font-medium text-[#128C7E] hover:text-[#25D366] bg-transparent border-none cursor-pointer"
              >
                Faça login
              </button>
            </p>
          </div>
        </div>

        {/* Lado direito - Imagem */}
        <div className="hidden md:block w-1/2 bg-cover bg-center" 
             style={{
               backgroundImage: `linear-gradient(rgba(37, 211, 102, 0.1), rgba(18, 140, 126, 0.2)), url('https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`
             }}>
        </div>
      </div>
    </div>
  );
}