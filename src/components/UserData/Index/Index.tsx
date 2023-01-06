import { TopArea } from "../TopArea"
import { LinksArea } from "../LinksArea"
import { StartArea } from "../StartArea"
import { UserDataProps } from "../../../types"
import { Container, Pfp, SideArea,  } from "./styles"
export function Index({user}: UserDataProps) {
  return (
    <Container>
      <Pfp src={user.pfp} alt={"Photografy of " + user.name} />
      <SideArea>
        <TopArea
          username={user.username}
          bio={user.bio}
          name={user.name}
          joinedAt={user.joinedAt}
          pfp={user.pfp}
        />
        <StartArea 
          repos={user.repos} 
          followers={user.followers} 
          following={user.following} 
        />
        <LinksArea 
          location={user.links.location}
          twitter={user.links.twitter}
          company={user.links.company}
          blog={user.links.blog}
        />
      </SideArea>
      
    </Container>
  )
}