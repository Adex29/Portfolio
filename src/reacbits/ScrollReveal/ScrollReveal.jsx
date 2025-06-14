// ScrollReveal.jsx - THE CORRECTED AND ROBUST VERSION
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// This is a reusable component to apply scroll-triggered animations
const ScrollReveal = ({ children, move='50px' }) => {
    // 1. Create a ref to be the main container for our component and its animations
    const componentRef = useRef(null);

    useEffect(() => {
        // 2. Create a GSAP Context. All GSAP animations and ScrollTriggers created
        //    inside this function will be scoped to this component and automatically
        //    cleaned up when the component unmounts.
        const ctx = gsap.context(() => {
            
            // 3. Select elements *inside the component's scope*
            // This is safer than document.querySelectorAll
            const elementsToAnimate = componentRef.current.querySelectorAll(".reveal-on-scroll");

            // 4. Check if we actually found any elements before trying to animate them
            if (elementsToAnimate.length > 0) {
                gsap.fromTo(elementsToAnimate,
                    {
                        opacity: 0,
                        y: move,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: componentRef.current, // Use the component itself as the trigger
                            start: 'top 85%', // When the top of the trigger hits 85% of the viewport height
                            end: 'bottom top',
                            toggleActions: 'play none none none', // Play the animation once
                        },
                    }
                );
            }

        }, componentRef); // Scope the context to our component's ref

        // 5. Cleanup function. GSAP's context handles this for us!
        return () => ctx.revert();

    }, [move]); // Re-run effect if the 'move' prop changes

    // 6. Attach the ref to the main div and pass a class for our selector to find
    return (
        <div ref={componentRef}>
            <div className="reveal-on-scroll">
                {children}
            </div>
        </div>
    );
};

export default ScrollReveal;