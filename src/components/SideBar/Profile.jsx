export const routes = {
  users: '/users',
  
}
 

const ProfileCard = ({ user }) => (
  <div className="overflow-hidden max-w-3xl rounded-xl border border-green-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div className="p-5">
      <div className="mb-4 flex items-center">
        <div className="flex size-15 items-center justify-center rounded-full bg-[#f4f4f4] text-[#9b87f5]">
          <img src={user.avatar} alt={user.name} className="rounded-full object-cover" />
        </div>
        <div className="ml-3 flex flex-col gap-0">
          <a href="javascript:void(0)">
            <h6 className="text-lg font-semibold">{user.name}</h6>
          </a>
        <span>{user.location}</span>
         
        </div>
      </div>

      <p title={user.shortDescription} className="mb-4 line-clamp-3 text-gray-600">
        {user.shortDescription}
      </p>

     
    </div>

   
  </div>
)

export default ProfileCard;