import type { User } from "../types/User";
function UserCard({ user }:{user:User}) {
  return (
    <div className="w-80 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
      <h3 className="text-lg font-semibold text-zinc-900">
        {user.name}
      </h3>

      <p className="mt-1 text-sm text-zinc-600">
        {`Email: ${user.email}`}
      </p>
    </div>
  );
}

export default UserCard;
