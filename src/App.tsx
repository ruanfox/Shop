import { QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import { AppRouters } from './routes'
import { queryClient } from './Client/queryClient'
import { TypeProvider } from './context/TypeProvider'

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <TypeProvider>
        <AppRouters />
      </TypeProvider>
    </QueryClientProvider>
  )
}

export default App
