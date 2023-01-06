import { Bio, Info, JoinedAt, Name, Pfp, SideInfo, Username } from "./styles";

interface TopAreaProps {
  username: string;
  bio: string;
  name: string;
  joinedAt: string;
  pfp: string;
}

export function TopArea({
  username,
  bio,
  name,
  joinedAt,
  pfp
} : TopAreaProps) {
  return (
    <>
      <Info>
        <Pfp src={pfp} alt={"Photografy of " + name} />
        <SideInfo>
          <Name>
            {name}
          </Name>
          <Username>
            <a href={`https://github.com/${username}`} target="_blank">
              @{username}
            </a>
          </Username>
          <JoinedAt>{joinedAt}</JoinedAt>
        </SideInfo>
      </Info>
      <Bio>{bio}</Bio>
    </>
  )
}