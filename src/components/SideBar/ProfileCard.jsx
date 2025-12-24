import ProfileCard from "../SideBar/Profile"

const users = [
  {
    id: 1,
    name: 'Subham Sharma ',
    shortDescription: 'Full-stack developer with a love for building modern web Demos and UIs.',
    slug: 'subham-sharma',
    avatar:
      'https://res.cloudinary.com/dm9l1jl3i/image/upload/v1766565128/IMG_20251224_140104_yjkpqg.jpg',

    location: 'Chennai',
    
  }
]
function Demo() {
  return (
    <div className="">
      <div className="">
        {users.map((user) => (
          <ProfileCard  key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}

export default Demo