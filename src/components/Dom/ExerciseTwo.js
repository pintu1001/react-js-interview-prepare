
import { useEffect } from 'react';
export default function ExerciseTwo() {
    /*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/
    useEffect(() => {
        const paragraph = document.querySelector("p");
        let res = paragraph && paragraph.innerText.split(" ").map(word => word.length > 8 ? ` <span style="background-color:yellow">${word}</span>` : word).join(" ");
        paragraph.innerHTML = res;
    }, []);

    /*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (https://forcemipsum.com/)
*/
    useEffect(() => {
        const a = document.createElement("a");
        a.href = "https://forcemipsum.com/";
        a.target = "_blank";
        a.innerText = "click here";
        document.body.appendChild(a);
    }, []);



    return (
        <>
            <h1>Heading</h1>

            <p>Hey, you're not permitted in there. It's restricted. You'll be deactivated for sure.. Don't call me a mindless philosopher, you overweight glob of grease! Now come out before somebody sees you. Secret mission? What plans? What are you talking about? I'm not getting in there! I'm going to regret this. There goes another one. Hold your fire. There are no life forms. It must have been short-circuited. That's funny, the damage doesn't look as bad from out here. Are you sure this things safe?

                Close up formation. You'd better let her loose. Almost there! I can't hold them! It's away! It's a hit! Negative. Negative! It didn't go in. It just impacted on the surface. Red Leader, we're right above you. Turn to point... oh-five, we'll cover for you. Stay there... I just lost my starboard engine. Get set to make your attack run.

                The Death Star plans are not in the main computer. Where are those transmissions you intercepted? What have you done with those plans? We intercepted no transmissions. Aaah....This is a consular ship. Were on a diplomatic mission. If this is a consular ship...were is the Ambassador? Commander, tear this ship apart until you've found those plans and bring me the Ambassador. I want her alive! There she is! Set for stun! She'll be all right. Inform Lord Vader we have a prisoner.

                What a piece of junk. She'll make point five beyond the speed of light. She may not look like much, but she's got it where it counts, kid. I've added some special modifications myself. We're a little rushed, so if you'll hurry aboard we'll get out of here. Hello, sir. Which way? All right, men. Load your weapons! Stop that ship! Blast 'em! Chewie, get us out of here! Oh, my. I'd forgotten how much I hate space travel.

                Run, Luke! Run!</p>
        </>
    )
}