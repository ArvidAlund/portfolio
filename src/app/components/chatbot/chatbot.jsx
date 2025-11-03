"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExtendedChat from "./exstendedChat";
import { onEvent } from "@/app/utils/eventbus";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true)

  return (
    <section className={`${isVisible ? "fixed" : "hidden"} z-100 right-5 bottom-5 sm:bottom-10 sm:right-10 border border-neutral-800 sm:min-w-[20%] w-fit sm:w-[350px] rounded-lg overflow-hidden bg-neutral-900/80 backdrop-blur-md transition-all duration-200 shadow-[0_0_5px_0_oklch(25%_0_0)]`}>
      <div
        className={`flex justify-between items-center p-2 cursor-pointer hover:underline ${
          isOpen ? "border-b border-neutral-800" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`${isOpen ? "block" : "hidden sm:block"}`}>
          <p className="text-xs">Skriv med min</p>
          <p className="flex gap-1 items-center">
            <span className="bg-green-500 w-1.5 h-1.5 rounded-full block animate-pulse" />
            Serviceagent
          </p>
        </div>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="chat"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <ExtendedChat />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
