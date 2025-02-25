import './App.css';
import { ChevronDown, ChevronsLeftRight, CircleUser, Ellipsis, LockKeyhole, LogIn, LogOut, Pencil, Search, Shield, Trash2, Weight } from 'lucide-react';
import img from './assets/logo.png';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

function App() {
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);
  const [showFour, setShowFour] = useState(false);
  const buttonStyle = "outline-none bg-[#e4e1dc] px-3 py-2 rounded-2xl cursor-pointer";
  const linkDiv = "flex flex-row w-full h-fit items-center justify-start gap-x-3 rounded-xl bg-white px-2 py-1 hover:bg-[#f3efec]";
  const linkDiv2 = "flex flex-row w-full h-fit items-center justify-start gap-x-1 rounded-xl bg-white px-3 py-2 hover:bg-[#f3efec]";
  const div = "flex flex-col bg-[#f8f7f5] h-fit rounded-2xl shadow-xl p-1 gap-y-[0.15rem]";

  return (
    <>
      <div
        className="w-full h-screen flex flex-row max-md:flex-col items-center bg-[#edece8] text-[#322f2c]"
      >
        <div className="w-1/2 max-md:w-full h-full flex flex-col">
          <div className="flex flex-col w-full h-[50%] items-center justify-center">
            <div className="flex flex-col items-end w-fit gap-y-2">
              <button
                className={buttonStyle}
                onClick={() => setShowOne(!showOne)}
              >
                <Ellipsis />
              </button>
              <AnimatePresence mode="wait">
                {showOne && 
                <motion.div
                  key={1}
                  className={div + " w-52"}
                  initial={{ opacity: 0, y: -20, scale:0 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0 }}
                >
                  <a href="" className={linkDiv}>
                    <Pencil className="w-[0.8rem]" />
                    <p className="text-xs font-[500]">Edit</p>
                  </a>
                  <a href="" className={linkDiv}>
                    <LockKeyhole className="w-[0.8rem]" />
                    <p className="text-xs font-[500]">Block</p>
                  </a>
                  <a href="" className={linkDiv + " text-red-600"}>
                    <Trash2 className="w-[0.8rem]" />
                    <p className="text-xs font-[500]">Delete</p>
                  </a>
                </motion.div>}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex flex-col w-full h-[50%] items-center justify-center gap-y-2">
            <AnimatePresence mode="wait">
              {showTwo &&
                <motion.div
                  key={2} 
                  className={div + " w-48"}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0  
                  }}
                  exit={{ opacity: 0, y: 25 }}
                  transition= {{ 
                    duration: 0.3,
                    type: "spring",
                    bounce: 0.2 
                  }}
                >
                  <a href="" className={linkDiv}>
                    <CircleUser className="w-[0.8rem]" />
                    <p className="text-xs font-[500]">Profile</p>
                  </a>
                  <a href="" className={linkDiv + " text-red-600"}>
                    <LogOut className="w-[0.8rem]" />
                    <p className="text-xs font-[500]">Log out</p>
                  </a>
                </motion.div>
              }
            </AnimatePresence>
            <button
              className={buttonStyle + " flex flex-row items-center justify-between gap-x-16"}
              onClick={() => setShowTwo(!showTwo)}
            >
              <div className="flex flex-row items-center justify-between gap-x-2">
                <div className="relative flex items-center justify-center rounded-full">
                  <img src={img} alt="" className="z-0 w-[2rem] rounded-full" />
                  <span className="absolute z-10 bg-[#18a24d] w-[0.5rem] h-[0.5rem] rounded-full border-1 border-white bottom-0 right-0"></span>
                </div>
                <ul className="list-none font-[Geist] p-0 text-start items-center space-y-[-0.4rem] pt-1">
                  <li className="text-sm font-[500]">Pixsellz</li>
                  <li className="text-[0.6rem] text-[#928d87] flex flex-row items-center gap-x-1"><Shield className="w-[0.7rem]" /> Admin</li>
                </ul>
              </div>
              <ChevronsLeftRight className="rotate-90 w-[1rem]" />
            </button>
          </div>
        </div>
        <div className="w-1/2 max-md:w-full h-full flex flex-col">
          <div className="flex flex-col w-full h-[50%] items-center justify-start gap-y-2">
            <button
                className={buttonStyle + " flex flex-row items-center justify-between gap-x-12 mt-17"}
                onClick={() => setShowThree(!showThree)}
            >
              <div className="flex flex-row items-center justify-between gap-x-2">
                <div className="relative flex items-center justify-center rounded-full">
                  <Weight className="w-[1.3rem] text-[#928d87]" />
                </div>
                <ul className="list-none font-[Geist] p-0 text-start items-center pt-1">
                  <li className="text-[0.6rem] text-[#928d87]">Balance</li>
                  <li className="text-xs font-[600]">5,400,000 UZS</li>
                </ul>
              </div>
              <ChevronDown className="w-[1rem]" />
            </button>
            <AnimatePresence mode="sync">
              {showThree &&
                <motion.div
                  key={3} 
                  className={div + " w-51"}
                  initial={{ y: -15, height: 0, opacity: 0, scaleY: 0 }}
                  animate={{ 
                    scaleY: 1,
                    opacity: 1,
                    y: 0,
                    height: "fit-content"
                    }}
                    exit={{ y: -15, height: 0, opacity: 0, scaleY: 0 }}
                    transition= {{ 
                      height: { duration: 0.2 },
                      duration: 0.5,
                      type: "spring",
                      bounce: 0.3 } }
                >
                  <a href="" className={linkDiv + " text-green-500"}>
                    <LogIn className="rotate-90 w-[0.8rem]" />
                    <p className="text-xs font-[500]">Deposit</p>
                  </a>
                  <a href="" className={linkDiv}>
                    <LogIn className="rotate-270 w-[0.8rem]" />
                    <p className="text-xs font-[500]">Withdraw</p>
                  </a>
                  <a href="" className={linkDiv}>
                    <CircleUser className="w-[0.8rem]" />
                    <p className="text-xs font-[500]">Payment Info</p>
                  </a>
                </motion.div>
              }
            </AnimatePresence>
          </div>
          <div className="flex flex-col w-full h-[50%] items-center justify-start gap-y-2">
            <button
                  className={buttonStyle + " flex flex-row items-center justify-between gap-x-18 mt-14"}
                  onClick={() => setShowFour(!showFour)}
            >
              <p className="text-xs font-[500] text-[#928d87]">Choose company</p>
              <ChevronsLeftRight className="rotate-90 w-[0.8rem]" />
            </button>
            <AnimatePresence mode="wait">
              {showFour &&
                <motion.div 
                  key={4}
                  className={div + " w-52"}
                  initial={{ y: -15, height: 0, scaleY: 0, opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    scaleY: 1,
                    y: 0,
                    height: "fit-content"
                  }}
                  exit={{ y: -15, height: 0, opacity: 0, scaleY: 0 }}
                  transition= {{ 
                    opacity: { duration: 0.2 },
                    height: { duration: 0.2 },
                    duration: 0.5,
                    type: "spring",
                    bounce: 0.3 }}
                >
                  <div className="w-full sticky flex flex-row items-center justify-between rounded-xl px-2 py-1 bg-[#f3efec]">
                    <Search className="w-[1rem] text-[#928d87]" />
                    <input type="text" placeholder="Search" className="w-[88%] text-xs font-[500] bg-transparent outline-none" />
                  </div>
                  <div className="h-[23vh] flex flex-col gap-y-[0.15rem] overflow-y-scroll">
                    <a href="" className={linkDiv2}>
                      <p className="text-xs font-[500]">OOO</p>
                      <p className="text-xs font-[500]">"Pixsellz Studio"</p>
                    </a>
                    <a href="" className={linkDiv2}>
                      <p className="text-xs font-[500]">OOO</p>
                      <p className="text-xs font-[500]">"Apple Inc."</p>
                    </a>
                    <a href="" className={linkDiv2}>
                      <p className="text-xs font-[500]">OOO</p>
                      <p className="text-xs font-[500]">"Tewavoy Corp."</p>
                    </a>
                    <a href="" className={linkDiv2}>
                      <p className="text-xs font-[500]">OOO</p>
                      <p className="text-xs font-[500]">"Global Innovative Sol..."</p>
                    </a>
                    <a href="" className={linkDiv2}>
                      <p className="text-xs font-[500]">OOO</p>
                      <p className="text-xs font-[500]">"Pixsellz Studio"</p>
                    </a>
                    <a href="" className={linkDiv2}>
                      <p className="text-xs font-[500]">OOO</p>
                      <p className="text-xs font-[500]">"Apple Inc."</p>
                    </a>
                    <a href="" className={linkDiv2}>
                      <p className="text-xs font-[500]">OOO</p>
                      <p className="text-xs font-[500]">"Tewavoy Corp."</p>
                    </a>
                    <a href="" className={linkDiv2}>
                      <p className="text-xs font-[500]">OOO</p>
                      <p className="text-xs font-[500]">"Global Innovative Sol..."</p>
                    </a>
                    <a href="" className={linkDiv2}>
                      <p className="text-xs font-[500]">OOO</p>
                      <p className="text-xs font-[500]">"Pixsellz Studio"</p>
                    </a>
                    <a href="" className={linkDiv2}>
                      <p className="text-xs font-[500]">OOO</p>
                      <p className="text-xs font-[500]">"Apple Inc."</p>
                    </a>
                  </div>
                </motion.div>
              }
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
