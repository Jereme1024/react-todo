import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/basic">Basic</NavLink>
        </li>
        <li>
          <NavLink to="/all">All</NavLink>
        </li>
        <li>
          <NavLink to="/mockApi">Api</NavLink>
        </li>
        <li>
          <NavLink to="/reducer">Reducer</NavLink>
        </li>
        <li>
          <NavLink to="/localStorage">LocalStorage</NavLink>
        </li>
        <li>
          <NavLink to="/fireStore">FireStore</NavLink>
        </li>
      </ul>
    </nav>
  )
}
