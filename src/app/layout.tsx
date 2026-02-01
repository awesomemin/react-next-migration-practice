import { Metadata } from 'next';
import NavigationBar from '../components/NavigationBar';

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: 'Vite + React + TS',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <div className="drawer-content flex flex-col">
            <NavigationBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
