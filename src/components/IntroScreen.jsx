import React, { useEffect } from "react";
import { motion } from "framer-motion";

const IntroScreen = ({ onComplete }) => {
useEffect(() => {
const timer = setTimeout(() => {
onComplete();
}, 3500);


return () => clearTimeout(timer);


}, [onComplete]);

const titleText = "Vishal L Shettigar";

const titleVariants = {
hidden: { opacity: 0 },
show: {
opacity: 1,
transition: {
staggerChildren: 0.06,
},
},
};

const letterVariants = {
hidden: {
opacity: 0,
y: 30,
},
show: {
opacity: 1,
y: 0,
transition: {
duration: 0.4,
},
},
};

return (
<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{
opacity: 0,
transition: {
duration: 0.8,
},
}}
className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#02040a]"
>
{/* GRID BACKGROUND */} <div
     className="
       absolute inset-0
       opacity-[0.04]
       bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
       bg-[size:60px_60px]
     "
   />

```
  {/* GLOW ORB 1 */}
  <motion.div
    animate={{
      x: [0, 50, -30, 0],
      y: [0, -40, 20, 0],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      absolute
      top-20
      left-20
      w-72
      h-72
      rounded-full
      bg-cyan-500/20
      blur-3xl
    "
  />

  {/* GLOW ORB 2 */}
  <motion.div
    animate={{
      x: [0, -40, 30, 0],
      y: [0, 40, -20, 0],
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      absolute
      bottom-10
      right-10
      w-96
      h-96
      rounded-full
      bg-blue-500/20
      blur-3xl
    "
  />

  {/* GLOW ORB 3 */}
  <motion.div
    animate={{
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
    }}
    className="
      absolute
      left-1/2
      top-1/2
      -translate-x-1/2
      -translate-y-1/2
      w-[500px]
      h-[500px]
      rounded-full
      bg-indigo-500/10
      blur-3xl
    "
  />

  {/* SKIP BUTTON */}
  <motion.button
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1 }}
    onClick={onComplete}
    className="
      absolute
      top-6
      right-6
      px-5
      py-2

      rounded-full

      bg-white/5
      border border-white/10

      backdrop-blur-xl

      text-xs
      uppercase
      tracking-widest

      text-slate-300

      hover:text-white
      hover:border-cyan-500/40

      transition-all
      duration-300
    "
  >
    Skip Intro
  </motion.button>

  {/* MAIN CONTENT */}
  <div className="relative z-10 text-center flex flex-col items-center px-6">

    {/* PROFILE IMAGE */}
    <motion.div
      initial={{
        scale: 0.7,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      className="relative mb-10"
    >

      {/* OUTER RING */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          -inset-3
          rounded-full
          border
          border-cyan-400/30
        "
      />

      {/* INNER RING */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          -inset-6
          rounded-full
          border
          border-blue-500/20
        "
      />

      {/* IMAGE */}
      <img
        src="/Photos/Profile/photo1.jpeg"
        alt="Vishal L Shettigar"
        className="
          w-40
          h-40
          md:w-48
          md:h-48

          rounded-full
          object-cover

          border-4
          border-cyan-400/30

          shadow-[0_0_60px_rgba(34,211,238,0.3)]

          relative
          z-10
        "
      />
    </motion.div>

    {/* NAME */}
    <motion.div
      variants={titleVariants}
      initial="hidden"
      animate="show"
      className="
        flex
        flex-wrap
        justify-center

        text-5xl
        sm:text-6xl
        md:text-8xl

        font-black

        tracking-tight

        mb-6

        bg-gradient-to-r
        from-cyan-400
        via-blue-400
        to-indigo-400

        bg-clip-text
        text-transparent
      "
    >
      {titleText.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>

    {/* ROLE */}
    <motion.p
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 1.2,
      }}
      className="
        text-lg
        md:text-2xl

        text-slate-300

        font-medium

        tracking-wide
      "
    >
      Full Stack Developer • AI Engineer
    </motion.p>
    

    {/* TECH BADGES */}
    <div className="flex flex-wrap justify-center gap-3 mt-8">

      {[
        "React",
        "Python",
        "Flask",
        "AI",
        "Machine Learning",
        "Full Stack"
      ].map((skill) => (
        <motion.span
          key={skill}
          whileHover={{
            y: -4,
            scale: 1.05,
          }}
          className="
            px-4
            py-2

            rounded-full

            bg-slate-900/50

            border
            border-cyan-500/20

            text-cyan-300

            text-xs

            font-mono

            backdrop-blur-xl
          "
        >
          {skill}
        </motion.span>
      ))}
    </div>

    {/* LOADING BAR */}
    <div className="mt-10 w-[260px]">

      <div className="h-[6px] bg-slate-800 rounded-full overflow-hidden">

        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: "100%",
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
          }}
          className="
            h-full

            rounded-full

            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-indigo-500
          "
        />
      </div>

    </div>

    {/* STATUS */}
    <motion.p
      animate={{
        opacity: [0.4, 1, 0.4],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="
        mt-5

        text-xs

        uppercase

        tracking-[0.3em]

        font-mono

        text-cyan-400
      "
    >
      Initializing Portfolio Experience
    </motion.p>

  </div>
</motion.div>


);
};

export default IntroScreen;
