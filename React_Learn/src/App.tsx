import Components from './components/components';
import Hooks from './hooks/hooks'
import ThemeProvider from './context/ThemeProvider';
export default function App() {
  return (
    <ThemeProvider>
    <div className="bg-linear-to-r from-violet-800 to-black  text-white">
      <Components />
      <Hooks />
    </div>
    </ThemeProvider>
  );
}
