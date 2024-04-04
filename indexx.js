
    <script>
        const febHolidays = [
            "Dear Samhita,",
            "First of all, Many Happy Returns Of The Day ❤",
            "I can’t believe you’re 18! Cheers to another year, Bestie ! ",
            "You’re the brightest star in the galaxy. !",
            "I will always be there for you, No matter how far we are.",
            "You're the prettiest, cutest, funniest, sweetest girl alive.",
            "In one word, you're just perfect.",
            "When I think about some of my favorite memories,",
            "You’re always a part of them.",
            "Nothing can shake our unbreakable bond.",
            "You make the world a better and brighter place.",
            "When we met, I knew that you’d always be a part of my life.",
            "There’s not a day goes by that I don’t pray for you.",
            "I'm so grateful I met you ❤",
            "You have the best smile...",
            "You are more fun than anyone or anything I know.",
            "I don't want to lose you.",
            "And trust me I dont want anyone else.",
            "There's no one better than you.",
            "Your friendship is one of my biggest blessings.",
            "and I never take it for granted !!!",
            "You always make my day.",
            "I like the way you are.",
            "You have the best sense of style.",
            "We argue alot, but we always got over it,",
            "And it made me realise how important you are in my life",
            "A single rose can be my garden; a single friend, my world; ",
            "And That is YOU !!!❤",
            "Never doubt yourself, You're the best version of You",
            "You're all that i could ever ask for !!!",
            "I Love You So much ❤️"
	    
        ];
        const ulEl = document.querySelector("ul");
        const d = new Date();
        let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
        let activeIndex = daynumber;
        const rotate = -360 / febHolidays.length;
        init();
        function init() {
            febHolidays.forEach((holiday, idx) => {
                const liEl = document.createElement("li");
                liEl.style.setProperty("--day_idx", idx);
                liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
                idx + 1
                }</time><span>${holiday}</span>`;
                ulEl.append(liEl);
            });
            ulEl.style.setProperty("--rotateDegrees", rotate);
            adjustDay(0);
        }
        function adjustDay(nr) {
            daynumber += nr;
            ulEl.style.setProperty("--currentDay", daynumber);
            const activeEl = document.querySelector("li.active");
            if (activeEl) activeEl.classList.remove("active");
            activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
            const newActiveEl = document.querySelector(
                `li:nth-child(${activeIndex + 1})`
            );
            document.body.style.backgroundColor = window.getComputedStyle(
                newActiveEl
            ).backgroundColor;
            newActiveEl.classList.add("active");
        }
        window.addEventListener("keydown", (e) => {
            switch (e.key) {
                case "ArrowUp":
                adjustDay(-1);
                break;
                case "ArrowDown":
                adjustDay(1);
                break;
                default:
                return;
            }
        });
    </script>


