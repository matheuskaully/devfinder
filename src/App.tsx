import { ThemeContextProvider } from "./contexts/ThemeContext"
import { TopArea } from "./components/TopArea"
import { Container } from "./styles"
import { useState } from "react"
import { UserProps } from "./types"
import { Index } from "./components/UserData/Index/Index"

export default function App() {
const [user, setUser] = useState<UserProps | null>(null)

function setUserData(user: UserProps | null): void {
  setUser(user)
}
  return (
    <ThemeContextProvider>
      <Container>
        <TopArea setUser={setUserData} />
        {user && <Index user={user} />}
      </Container>
    </ThemeContextProvider>
  )
}
