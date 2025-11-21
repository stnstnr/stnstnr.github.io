import { Box } from "@chakra-ui/react";

export default function BackgroundLayer() {
  return (
    <>
      {/* Grid (vertical + horizontal lines) */}
      <Box
        position="fixed"
        inset={0}
        pointerEvents="none"
        backgroundImage={`
          linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
        `}
        backgroundSize="40px 40px"
        zIndex={-2}
      />

      {/* Noise Overlay */}
      <Box
        position="fixed"
        inset={0}
        pointerEvents="none"
        backgroundImage="url('https://grainy-gradients.vercel.app/noise.svg')"
        opacity={0.08}
        mixBlendMode="overlay"
        zIndex={-1}
      />
    </>
  );
}
