import { create } from 'zustand'

// const store = () => {
//   return (
//     <div>store</div>
//   )
// }

// export default store

type Zus_Count = {
  counterZus: number
  fifteenFunc: () => void
  deductFiveFunc: () => void
}

export const sampleZus_counter = create<Zus_Count>((set) => ({
  counterZus: 15,
  fifteenFunc: () => {
    set({ counterZus: 115 })
  },
  deductFiveFunc: () => {
    set((state) => ({
      counterZus: state.counterZus + 1000,
    }))
  },
}))
