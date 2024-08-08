'use client'

import { persistor, store } from '@/store'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  )
}

export default Providers
