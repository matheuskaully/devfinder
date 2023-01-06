import { Container, Data } from "./styles"

interface StartAreaProps {
  repos: string;
  followers: string;
  following: string;
}

export function StartArea({repos, followers, following}: StartAreaProps) {
  return (
    <Container>
      <Data>
        <span>Repos</span>
        <strong>{repos}</strong>
      </Data>
      <Data>
        <span>Followers</span>
        <strong>{followers}</strong>
      </Data>
      <Data>
        <span>Following</span>
        <strong>{following}</strong>
      </Data>
    </Container>
  )
}