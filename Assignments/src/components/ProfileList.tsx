import Profile from "./ProfileCard";
import type { User } from "../types/User";

type Props = {
  profiles: User[];
};

const ProfileList = ({ profiles }: Props) => {
  return (
    <ul className="flex flex-col gap-4">
      {profiles.map(profile => (
        <li key={profile.id}>
          <Profile user={profile} />
        </li>
      ))}
    </ul>
  );
};

export default ProfileList;
