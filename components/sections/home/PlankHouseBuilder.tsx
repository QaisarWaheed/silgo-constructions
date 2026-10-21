"use client";

import { useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/ui/Button";

type Piece = {
  id: string;
  top: number;
  left: number;
  width: number;
  height: number;
  shape: "wall-a" | "wall-b" | "door" | "roof" | "chimney";
};

const PIECES: Piece[] = [
  { id: "wall-1", top: 214, left: 40, width: 160, height: 16, shape: "wall-a" },
  { id: "wall-2", top: 198, left: 40, width: 160, height: 16, shape: "wall-b" },
  { id: "wall-3", top: 182, left: 40, width: 160, height: 16, shape: "wall-a" },
  { id: "wall-4", top: 166, left: 40, width: 160, height: 16, shape: "wall-b" },
  { id: "wall-5", top: 150, left: 40, width: 160, height: 16, shape: "wall-a" },
  { id: "door", top: 194, left: 104, width: 32, height: 36, shape: "door" },
  { id: "roof", top: 80, left: 33, width: 190, height: 70, shape: "roof" },
  { id: "chimney", top: 70, left: 150, width: 14, height: 55, shape: "chimney" },
];

const TOTAL = PIECES.length;

const PIECE_STYLE: Record<Piece["shape"], CSSProperties> = {
  "wall-a": {
    background: "linear-gradient(180deg,#d4b273,#b3915a)",
    borderRadius: 2,
    boxShadow: "0 3px 5px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
  },
  "wall-b": {
    background: "linear-gradient(180deg,#c6a366,#a3824f)",
    borderRadius: 2,
    boxShadow: "0 3px 5px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
  },
  door: {
    background: "linear-gradient(180deg,#6b5636,#4a3a24)",
    borderRadius: "3px 3px 0 0",
    boxShadow: "0 3px 6px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
  },
  roof: {
    background: "linear-gradient(160deg,#3a3226,#1c1712)",
    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
    filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.45))",
  },
  chimney: {
    background: "linear-gradient(180deg,#4a4032,#2a241c)",
    borderRadius: 1,
    boxShadow: "0 3px 5px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.1)",
  },
};

const PLANK_STYLE: CSSProperties = {
  background: "linear-gradient(180deg,#d4b273,#b3915a)",
  boxShadow: "0 2px 4px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
};

export default function PlankHouseBuilder() {
  const [builtCount, setBuiltCount] = useState(0);
  const built = PIECES.slice(0, builtCount);
  const remaining = PIECES.slice(builtCount);
  const done = builtCount === TOTAL;

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-[260px] w-[240px]">
        {/* ground line */}
        <div className="absolute bottom-[28px] left-0 right-0 h-px bg-gold/20" />

        {built.map((piece, i) => (
          <motion.div
            key={piece.id}
            className="absolute"
            style={{
              top: piece.top,
              left: piece.left,
              width: piece.width,
              height: piece.height,
              ...PIECE_STYLE[piece.shape],
            }}
            initial={{ opacity: 0, y: 60, scale: 0.7, rotate: i % 2 === 0 ? -7 : 7 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, mass: 0.6 }}
          >
            {piece.shape === "door" && (
              <span className="absolute right-1.5 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-gold" />
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-7 flex min-h-[60px] w-full max-w-[440px] flex-col items-center">
        {!done ? (
          <>
            <div className="flex flex-wrap items-end justify-center gap-2.5">
              <AnimatePresence>
                {remaining.map((piece) => (
                  <motion.button
                    key={piece.id}
                    type="button"
                    aria-label="Place next plank"
                    onClick={() => setBuiltCount((c) => c + 1)}
                    layout
                    initial={{ opacity: 0, y: 14, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5, y: -10, transition: { duration: 0.2 } }}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="h-3.5 w-11 cursor-pointer rounded-sm"
                    style={PLANK_STYLE}
                  />
                ))}
              </AnimatePresence>
            </div>
            <p className="mt-4 text-sm text-muted-dim">
              {builtCount === 0 ? "Click a plank to start building." : `${TOTAL - builtCount} left to place.`}
            </p>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <p className="text-base font-semibold text-foreground">
              That&rsquo;s how we build outcomes — <span className="text-gold">one deliberate piece at a time.</span>
            </p>
            <Button variant="outline" className="mt-5" onClick={() => setBuiltCount(0)}>
              Build Again
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
