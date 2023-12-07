import Logotipo from "./icons/logotipo";

export default function Hero() {
  return (
    <div className="relative h-[250px] md:h-[350px] lg:h-[400px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/hero.jpg")' }}>
      <span className="absolute inset-0 z-0 opacity-10" style={{ background: 'linear-gradient(0deg, rgba(18, 18, 20, 0.75) 0%, rgba(18, 18, 20, 0.75) 100%), url(<path-to-image>), lightgray 0px -77px / 100% 269.011% no-repeat' }}></span>
      <div className="container h-full flex items-center">
        <div className="text-dark-30 max-w-xl space-y-10">
          <div className="inline-flex items-center gap-2">
            <Logotipo className="w-6 lg:w-12" />
            <h1 className="text-lg lg:text-2xl">JordanShoes</h1>
          </div>

          <div className="space-y-3 lg:space-y-5">
            <h2 className="text-2xl lg:text-4xl">A melhor loja de Jordan</h2>
            <p className="md:text-lg lg:text-2xl text-dark-20">O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
