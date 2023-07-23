import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/navbar/Navbar';
import AsideAllMenus from '../pages/aside/AsideAllMenus';

function MainLayouts() {
  return (
    <section className="relative bg-lightGray">
      <nav className="absolute top-0 h-14 flex items-center justify-between container bg-primary border-b-2 border-secondary">
        <Navbar />
      </nav>
      <section className="pt-14 h-screen grid grid-cols-10">
        <aside className="col-span-2 bg-white overflow-y-auto">
          <ul className="list-none mt-10">
            <AsideAllMenus />
          </ul>
        </aside>
        <main className="col-span-8 overflow-y-auto">
          <Outlet />
        </main>
      </section>
    </section>
  );
}

export default MainLayouts;
