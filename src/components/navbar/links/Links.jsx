import React from 'react'

const Links = () => {

    const links = [
        {
            title:"homepage",
            path:"/",
        },
        {
            title:"About",
            path:"/about",
        },
        {
            title:"Contact",
            path:"/contact",
        },
        {
            title:"Blog",
            path:"/blog",
        }
    ]
  return (
    <div>
    {links.map((link) => (
        <NavLink />
    ))}
    </div>
  )
}

export default Links