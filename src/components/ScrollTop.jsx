import { ChevronUp, ChevronDown } from 'lucide-react';
import React, { useEffect, useState } from 'react';

function ScrollTop() {
  const [atBottom, setAtBottom] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
      setAtBottom(scrolledToBottom);
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (atBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-6 right-6 p-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 shadow-lg shadow-yellow-500/25 transition-all duration-300 z-50 hover:scale-110 hover:shadow-xl hover:shadow-yellow-500/40 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {atBottom ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
    </button>
  );
}

export default ScrollTop;
