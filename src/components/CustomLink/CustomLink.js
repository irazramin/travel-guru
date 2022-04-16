import { Link, useMatch, useResolvedPath } from "react-router-dom";
import './CustomLink.css';
function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  const path = to === '/home';

  

  return (
    <div>
      <Link
        style={
          ({ color: path ? '#fff' : '#fff' }, { color: !path ? '#000' : '#000' })
        }
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;