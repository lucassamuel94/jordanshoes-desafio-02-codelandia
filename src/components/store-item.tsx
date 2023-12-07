import { Store } from '../data/store'

export const StoreItem = ({ store }: { store: Store }) => {
  return (
    <article className='cursor-pointer space-y-6'>
      <figure className='bg-brand-background h-[200px] grid place-items-center'>
        <img src={store.imageUrl} alt="" className='w-[225px] hover:scale-105 transition-all duration-300' />
      </figure>

      <div>
        <h4 className='font-medium md:text-lg'>{store.name}</h4>
        <span className='font-medium mt-3 text-brand'>{store.category}</span>

        <p className='font-medium mt-3 lg:mt-6 text-xl'>{store.price.toLocaleString('pt-BR', { style: 'currency', currency: "BRL", minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
      </div>
    </article>
  )
}