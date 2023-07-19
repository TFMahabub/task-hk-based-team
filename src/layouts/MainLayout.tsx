import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/navbar/Navbar';

function MainLayouts() {
  return (
    <div>
      <nav className="h-full py-4 lg:py-0 lg:h-navbarHeight flex-item bg-primary border-b-2 border-secondary">
        <Navbar />
      </nav>
      <section className="grid-12">
        <aside>this is aside</aside>
        <Outlet />
      </section>
    </div>
  );
}

export default MainLayouts;
