import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <header>Navbar</header>

      <aside>Sidebar</aside>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;