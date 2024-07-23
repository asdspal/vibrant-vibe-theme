import {Suspense} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import Header from './Header.client';
import Footer from './Footer.server';


export function Layout({children}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={useRouter().asPath}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.3}}
      >
        <div className="flex flex-col min-h-screen">
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      <main role="main" id="mainContent" className="flex-grow">
        {children}
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
      </motion.div>
    </AnimatePresence>
  );
}
