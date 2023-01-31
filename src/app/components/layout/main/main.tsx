import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
// END OF IMPORTS

type Props = {
  children: React.ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        key={Math.random()}
        className="flex-1 w-full h-screen text-slate-900 tracking-normal leading-normal flex flex-col justify-center items-center py-10 s:py-11 md:py-12 lg:py-14 xl:py-16 2xl:py-20"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};

export default Main;
