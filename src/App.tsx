export default function App() {
  return (
    <div className="drawer lg:drawer-open">
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
          <div className="px-4">Navbar Title</div>
        </nav>
        <div className="p-4">Page Content</div>
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
              <button
                className="is-drawer-close:tooltip-right is-drawer-close:tooltip"
                data-tip="Homepage"
              >
                <span className="icon-[fluent--home-24-filled]" />
                <span className="is-drawer-close:hidden">Homepage</span>
              </button>
            </li>

            <li>
              <button
                className="is-drawer-close:tooltip-right is-drawer-close:tooltip"
                data-tip="Settings"
              >
                <span className="icon-[codicon--settings]" />
                <span className="is-drawer-close:hidden">Settings</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
