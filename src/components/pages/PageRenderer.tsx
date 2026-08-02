"use client";

import React from "react";
import { useLearning } from "@/context/LearningContext";
import { motion, AnimatePresence } from "framer-motion";

// Import all 30 page components
import { Page1Opening } from "./Page1Opening";
import { Page2Objectives } from "./Page2Objectives";
import { Page3Instructions } from "./Page3Instructions";
import { Page4Apersepsi } from "./Page4Apersepsi";
import { Page5Material1 } from "./Page5Material1";
import { Page6Material2 } from "./Page6Material2";
import { Page7Material3 } from "./Page7Material3";
import { Page8Material4 } from "./Page8Material4";
import { Page9Quiz1 } from "./Page9Quiz1";
import { Page10Transition1 } from "./Page10Transition1";
import { Page11Material5 } from "./Page11Material5";
import { Page12Material6 } from "./Page12Material6";
import { Page13Material7 } from "./Page13Material7";
import { Page14Material8 } from "./Page14Material8";
import { Page15Material9 } from "./Page15Material9";
import { Page16Material10 } from "./Page16Material10";
import { Page17Gallery } from "./Page17Gallery";
import { Page18Facts } from "./Page18Facts";
import { Page19MiniGame } from "./Page19MiniGame";
import { Page20Transition2 } from "./Page20Transition2";
import { Page21CrosswordIntro } from "./Page21CrosswordIntro";
import { Page22CrosswordPuzzle } from "./Page22CrosswordPuzzle";
import { Page23CrosswordAcross } from "./Page23CrosswordAcross";
import { Page24CrosswordDown } from "./Page24CrosswordDown";
import { Page25CrosswordCheck } from "./Page25CrosswordCheck";
import { Page26Result } from "./Page26Result";
import { Page27Reflection } from "./Page27Reflection";
import { Page28CharacterMessage } from "./Page28CharacterMessage";
import { Page29FinalQuiz } from "./Page29FinalQuiz";
import { Page30Closing } from "./Page30Closing";

export const PageRenderer: React.FC = () => {
  const { currentPage } = useLearning();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 1:
        return <Page1Opening key="p-1" />;
      case 2:
        return <Page2Objectives key="p-2" />;
      case 3:
        return <Page3Instructions key="p-3" />;
      case 4:
        return <Page4Apersepsi key="p-4" />;
      case 5:
        return <Page5Material1 key="p-5" />;
      case 6:
        return <Page6Material2 key="p-6" />;
      case 7:
        return <Page7Material3 key="p-7" />;
      case 8:
        return <Page8Material4 key="p-8" />;
      case 9:
        return <Page9Quiz1 key="p-9" />;
      case 10:
        return <Page10Transition1 key="p-10" />;
      case 11:
        return <Page11Material5 key="p-11" />;
      case 12:
        return <Page12Material6 key="p-12" />;
      case 13:
        return <Page13Material7 key="p-13" />;
      case 14:
        return <Page14Material8 key="p-14" />;
      case 15:
        return <Page15Material9 key="p-15" />;
      case 16:
        return <Page16Material10 key="p-16" />;
      case 17:
        return <Page17Gallery key="p-17" />;
      case 18:
        return <Page18Facts key="p-18" />;
      case 19:
        return <Page19MiniGame key="p-19" />;
      case 20:
        return <Page20Transition2 key="p-20" />;
      case 21:
        return <Page21CrosswordIntro key="p-21" />;
      case 22:
        return <Page22CrosswordPuzzle key="p-22" />;
      case 23:
        return <Page23CrosswordAcross key="p-23" />;
      case 24:
        return <Page24CrosswordDown key="p-24" />;
      case 25:
        return <Page25CrosswordCheck key="p-25" />;
      case 26:
        return <Page26Result key="p-26" />;
      case 27:
        return <Page27Reflection key="p-27" />;
      case 28:
        return <Page28CharacterMessage key="p-28" />;
      case 29:
        return <Page29FinalQuiz key="p-29" />;
      case 30:
        return <Page30Closing key="p-30" />;
      default:
        return <Page1Opening key="p-default" />;
    }
  };

  return (
    <div className="flex-1 w-full overflow-y-auto">
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
