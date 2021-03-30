import React, {useState} from 'react';
import {Link} from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

const Home = props => {
    const [isVisible, setIsVisible] = useState(false);
    const [text, setText] = useState('sasha');

  return (
    <div>
      <Link to='/shop'>Shop</Link>
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key="visibleText"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                >
                    Hello
                </motion.div>
            )}
            <motion.p
                key="changedText"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 20, opacity: 0 }}
            >
                {text}
            </motion.p>
        </AnimatePresence>
        <hr/>
        <button onClick={() => setIsVisible(!isVisible)}>toggle</button>
        <button onClick={() => setText(text + 'sasha')}>text</button>
    </div>
  )
};

export default Home