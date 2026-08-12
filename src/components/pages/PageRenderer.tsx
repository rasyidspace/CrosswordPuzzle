"use client";

import React from "react";
import { useLearning } from "@/context/LearningContext";
import { motion, AnimatePresence } from "framer-motion";

// Import all 30 page components
import { Page1Opening } from "./Page1Opening";
import { Page2CP } from "./Page2CP";
import { Page3Objectives } from "./Page3Objectives";
import { Page4Instructions } from "./Page4Instructions";
import { Page5Apersepsi } from "./Page5Apersepsi";
import { Page6Material1 } from "./Page6Material1";
import { Page7Material2 } from "./Page7Material2";
import { Page8Material3 } from "./Page8Material3";
import { Page9Material4 } from "./Page9Material4";
import { Page10Quiz1 } from "./Page10Quiz1";
import { Page11Transition1 } from "./Page11Transition1";
import { Page12Material5 } from "./Page12Material5";
import { Page13Material6 } from "./Page13Material6";
import { Page14Material7 } from "./Page14Material7";
import { Page15Material8 } from "./Page15Material8";
import { Page16Material9 } from "./Page16Material9";
import { Page17Material10 } from "./Page17Material10";
import { Page18Gallery } from "./Page18Gallery";
import { Page19Facts } from "./Page19Facts";
import { Page20MiniGame } from "./Page20MiniGame";
import { Page21Transition2 } from "./Page21Transition2";
import { Page22CrosswordIntro } from "./Page22CrosswordIntro";
import { Page23CrosswordPuzzle } from "./Page23CrosswordPuzzle";
import { Page24CrosswordAcross } from "./Page24CrosswordAcross";
import { Page25CrosswordDown } from "./Page25CrosswordDown";
import { Page26CrosswordCheck } from "./Page26CrosswordCheck";
import { Page27Result } from "./Page27Result";
import { Page28Reflection } from "./Page28Reflection";
import { Page29CharacterMessage } from "./Page29CharacterMessage";
import { Page30FinalQuiz } from "./Page30FinalQuiz";
import { Page31Closing } from "./Page31Closing";

export const PageRenderer: React.FC = () => {
  const { currentPage } = useLearning();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 1:
        return <Page1Opening key="p-1" />;
      case 2:
        return <Page2CP key="p-2" />;
      case 3:
        return <Page3Objectives key="p-3" />;
      case 4:
        return <Page4Instructions key="p-4" />;
      case 5:
        return <Page5Apersepsi key="p-5" />;
      case 6:
        return <Page6Material1 key="p-6" />;
      case 7:
        return <Page7Material2 key="p-7" />;
      case 8:
        return <Page8Material3 key="p-8" />;
      case 9:
        return <Page9Material4 key="p-9" />;
      case 10:
        return <Page10Quiz1 key="p-10" />;
      case 11:
        return <Page11Transition1 key="p-11" />;
      case 12:
        return <Page12Material5 key="p-12" />;
      case 13:
        return <Page13Material6 key="p-13" />;
      case 14:
        return <Page14Material7 key="p-14" />;
      case 15:
        return <Page15Material8 key="p-15" />;
      case 16:
        return <Page16Material9 key="p-16" />;
      case 17:
        return <Page17Material10 key="p-17" />;
      case 18:
        return <Page18Gallery key="p-18" />;
      case 19:
        return <Page19Facts key="p-19" />;
      case 20:
        return <Page20MiniGame key="p-20" />;
      case 21:
        return <Page21Transition2 key="p-21" />;
      case 22:
        return <Page22CrosswordIntro key="p-22" />;
      case 23:
        return <Page23CrosswordPuzzle key="p-23" />;
      case 24:
        return <Page24CrosswordAcross key="p-24" />;
      case 25:
        return <Page25CrosswordDown key="p-25" />;
      case 26:
        return <Page26CrosswordCheck key="p-26" />;
      case 27:
        return <Page27Result key="p-27" />;
      case 28:
        return <Page28Reflection key="p-28" />;
      case 29:
        return <Page29CharacterMessage key="p-29" />;
      case 30:
        return <Page30FinalQuiz key="p-30" />;
      case 31:
        return <Page31Closing key="p-31" />;
      default:
        return <Page1Opening key="p-default" />;
    }
  };

  return (
    <div className="flex-1 w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="w-full min-h-full"
        >
          {renderCurrentPage()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
