import Link from "next/link";
import Image from "next/image";

function NavBar() {
  return (
    <div className="navbar shadow-sm bg-(--color-light-pink)">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Image src="/bookbrick.svg" alt="logo" width="250" height="300" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/rules">Rules</Link>
            </li>
            <li>
              <Link href="/lists">Book lists</Link>
              <ul className="p-2">
                <li>
                  <Link href="/lists">Book lists</Link>
                </li>
                <li>
                  <Link href="/reviews">Reviews</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/polls">Polls & Quiz's</Link>
            </li>
          </ul>
        </div>
        <Link href="/">
          <Image src="/bookbrick.svg" alt="logo" width="250" height="300" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/rules">Rules</Link>
          </li>
          <li>
            <details>
              <summary>Book Lists</summary>
              <ul
                tabIndex={0}
                className="p-2 menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link href="/lists">Book lists</Link>
                </li>
                <li>
                  <Link href="/reviews">Reviews</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/polls">Polls & Quiz's</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
