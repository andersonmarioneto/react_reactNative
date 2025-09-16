import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginData {
  email: string;
  password: string;
}

interface LoginProps {
  onLoginSuccess: () => void;
}

export function Login({ onLoginSuccess }: LoginProps) {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar sua lógica de autenticação posteriormente
    console.log('Dados de login:', loginData);
    onLoginSuccess();
    navigate('/chat');
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
                Login no ChatApp
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Entre com sua conta para continuar
              </p>
            </div>
            
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm space-y-4">
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
                    placeholder="Seu email"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
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
                    placeholder="Sua senha"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-[#25D366] focus:ring-[#25D366] border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Lembrar-me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-[#128C7E] hover:text-[#25D366]">
                    Esqueceu sua senha?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#25D366] hover:bg-[#128C7E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] transition-colors duration-200"
                >
                  Entrar
                </button>
              </div>
            </form>
            
            <p className="text-center text-sm text-gray-600">
              Não tem uma conta?{' '}
              <button 
                onClick={() => navigate('/register')} 
                className="font-medium text-[#128C7E] hover:text-[#25D366] bg-transparent border-none cursor-pointer"
              >
                Registre-se
              </button>
            </p>
          </div>
        </div>

        {/* Lado direito - Imagem */}
        <div className="hidden md:block w-1/2 bg-cover bg-center" 
             style={{
               backgroundImage: `linear-gradient(rgba(37, 211, 102, 0.1), rgba(18, 140, 126, 0.2)), url('https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`
             }}>
        </div>
      </div>
    </div>
  );
}