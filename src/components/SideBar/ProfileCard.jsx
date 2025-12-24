import ProfileCard from "../SideBar/Profile"

const users = [
  {
    id: 1,
    name: 'Subham Sharma ',
    shortDescription: 'Full-stack developer with a love for building modern web Demos and UIs.',
    slug: 'subham-sharma',
    avatar:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

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