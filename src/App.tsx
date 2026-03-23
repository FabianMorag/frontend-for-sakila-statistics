import { NavLink, Outlet, useNavigation } from 'react-router'
import { useGlobalLoading } from './stores/useGlobalLoading'

export default function App() {
  const { state } = useNavigation()
  const isLoading = state === 'loading'
  const globalLoading = useGlobalLoading(state => state.globalLoading)

  return (
    <div className="drawer lg:drawer-open">
      {(isLoading || globalLoading) && (
        <progress className="z-20 absolute w-full progress-primary progress" />
      )}
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <nav className="bg-base-300 w-full navbar">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <span className="icon-[octicon--sidebar-collapse-24] text-2xl" />
          </label>
          <span className="px-4 font-semibold">Sakila Statistics</span>
        </nav>

        <Outlet />
      </div>

      <div className="is-drawer-close:overflow-visible drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64 min-h-full">
          <ul className="w-full menu grow">
            <li>
              <NavLink
                to="/"
                className="is-drawer-close:tooltip-right is-drawer-close:tooltip"
                data-tip="Homepage"
              >
                <span className="text-xl icon-[fluent--home-24-filled]" />
                <span className="is-drawer-close:hidden whitespace-nowrap">
                  Homepage
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/films"
                className="is-drawer-close:tooltip-right is-drawer-close:tooltip"
                data-tip="Films"
              >
                <span className="text-xl icon-[fluent--filmstrip-play-24-filled]" />
                <span className="is-drawer-close:hidden whitespace-nowrap">
                  Films
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/revenue"
                className="is-drawer-close:tooltip-right is-drawer-close:tooltip"
                data-tip="Revenue Reports"
              >
                <span className="text-xl icon-[bxs--report]" />
                <span className="is-drawer-close:hidden whitespace-nowrap">
                  Revenue reports
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/customers"
                className="is-drawer-close:tooltip-right is-drawer-close:tooltip"
                data-tip="Customers"
              >
                <span className="text-xl icon-[solar--user-bold]" />
                <span className="is-drawer-close:hidden whitespace-nowrap">
                  Customers list
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
