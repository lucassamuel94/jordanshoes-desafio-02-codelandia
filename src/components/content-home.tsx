import { store } from "../data/store"
import { StoreItem } from "./store-item"

export default function ContentHome() {
  return (
    <main className="container py-14 lg:py-20 flex flex-col items-center gap-10 lg:gap-[72px]">
      <header className="max-w-xl space-y-3 lg:space-y-6 text-center">
        <h2 className="font-semibold text-xl md:text-2xl lg:text-[32px]">Os melhores em só lugar</h2>
        <p className="text-sm md:text-base lg:text-2xl">A marca Jordan na JordanShoes é a escolha certa para os amantes de sneakers que buscam estilo e conforto.</p>
      </header>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
        {
          store.map(item => (
            <StoreItem key={item.id} store={item} />
          ))
        }
      </ul>
    </main>
  )
}