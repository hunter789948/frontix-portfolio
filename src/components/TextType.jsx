import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function TextType({
  text = [],
  typingSpeed = 75,      // ms per letter typing
  deletingSpeed = 50,    // ms per letter deleting
  pauseDuration = 1200,  // pause after full word
  showCursor = true,
  cursorCharacter = "|",
}) {
  const textRef = useRef(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!text.length) return;

    const word = text[wordIndex];
    let timeout;

    // PAUSE after typing full word
    if (!isDeleting && charIndex === word.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(timeout);
    }

    // MOVE to next word after deleting
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % text.length);
      return;
    }

    timeout = setTimeout(() => {
      setCharIndex((prev) =>
        isDeleting ? prev - 1 : prev + 1
      );
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [
    charIndex,
    isDeleting,
    wordIndex,
    text,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.textContent =
        text[wordIndex]?.substring(0, charIndex) || "";
    }
  }, [charIndex, wordIndex, text]);

  return (
    <span className="inline-flex items-center">
      <span ref={textRef} />
      {showCursor && (
        <span className="ml-1 animate-pulse opacity-80">
          {cursorCharacter}
        </span>
      )}
    </span>
  );
}
