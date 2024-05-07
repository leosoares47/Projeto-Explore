import "./App.css"

export function App() {
  return (
    <>
      <div>
        <img className="w-[730px]" src="./src/assets/astro.png" />
        <div className="flex flex-col text-center mt-4 justify-center items-center">
          <h1 className="text-2xl text-pink-500 font-bold">
            Explore sem limites
          </h1>

          <p className="font-semibold text-xl">
            Porque o aprendizado é contínuo
          </p>
          <img className="w-[58px] mt-9 mb-24" src="./src/assets/arrow.png" />
        </div>
      </div>
      <div className="bg-blue-700 p-10">
        <div className="bg-white rounded-xl pt-7 max-w-lg pr-1">
          <div className="ml-7 ">
            <img className="mb-8" src="./src/assets/sun.png" alt="" />
            <h1 className="text-2xl text-pink-500 font-bold">Não pare nunca</h1>
            <p className="font-semibold text-xl pb-7">
              Se você deseja ter sucesso nos estudos, é fundamental que você
              adote uma mentalidade de "não pare nunca". Estudar de forma
              consistente e contínua é a chave para o progresso e a conquista de
              seus objetivos.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl pt-7 mt-12 max-w-lg pr-1">
          <div className="ml-7">
            <img className="mb-8" src="./src/assets/moon.png" alt="" />
            <h1 className="text-2xl text-pink-500 font-bold">Só volta</h1>
            <p className="font-semibold text-xl pb-7">
              Se você parou ou perdeu o ritmo em alguma atividade ou projeto,
              saiba que nunca é tarde para recomeçar. Às vezes, as
              circunstâncias podem mudar, ou podemos nos sentir desmotivados ou
              sobrecarregados.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl pt-7 mt-12 max-w-lg pr-1">
          <div className="ml-7">
            <img className="mb-8" src="./src/assets/purple.png" alt="" />
            <h1 className="text-2xl text-pink-500 font-bold">Siga seu Ritmo</h1>
            <p className="font-semibold text-xl pb-7">
              Avançar pouco a pouco mantém progresso constante em objetivos,
              evitando parar ou desistir. Mesmo pequenos passos nos aproximam do
              destino e motivam a continuidade. Não subestime o poder de cada
              ação rumo ao objetivo final.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 bg-white pt-20 items-center justify-center">
        <h1 className="text-2xl text-pink-500 font-bold mr-28">
          Entre em contato
        </h1>
        <input
          className="p-3 rounded-xl border-2 border-blue-950 w-96"
          type="user"
          placeholder="Seu nome"
        />
        <input
          className="p-3 rounded-xl border-2 border-blue-950 w-96"
          type="email"
          placeholder="Email"
        />

        <input
          className="py-12 rounded-xl border-2 border-blue-950 w-96"
          type="textarea"
          placeholder=" Digite sua mensagem aqui..."
        />
        <button className="bg-blue-700 text-white p-3 rounded-xl">
          Enviar Mensagem
        </button>
        <footer className=" bg-blue-700 text-white w-full text-center pt-3 pb-3">
          © 2023 - Rocketseat Explorer
        </footer>
      </div>
    </>
  )
}
