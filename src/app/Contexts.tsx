
import { CartProvider } from "@/contexts/CartContext"
import { UserProvider } from "@/contexts/UserContext"

const Contexts = ({children}: {children: React.ReactNode}) => {
  return (
    <UserProvider>
        <CartProvider>
            {children}
        </CartProvider>
    </UserProvider>
  )
}

export default Contexts