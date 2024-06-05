const Quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Stay hungry, stay foolish. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Programs must be written for people to read, and only incidentally for machines to execute. - Harold Abelson",
    "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. - John Woods",
    "Truth can only be found in one place: the code. - Robert C. Martin",
    "First, solve the problem. Then, write the code. - John Johnson",
    "The best error message is the one that never shows up. - Thomas Fuchs",
    "Programming is the art of telling another human what one wants the computer to do. - Donald Knuth",
    "The best thing about a boolean is even if you are wrong, you are only off by a bit. - Unknown",
    "It's not a bug – it's an undocumented feature. - Unknown",
    "If debugging is the process of removing software bugs, then programming must be the process of putting them in. - Edsger Dijkstra",
    "Talk is cheap. Show me the code. - Linus Torvalds",
    "Measuring programming progress by lines of code is like measuring aircraft building progress by weight. - Bill Gates",
    "Good code is its own best documentation. - Steve McConnell",
    "Experience is the name everyone gives to their mistakes. - Oscar Wilde",
    "The most disastrous thing that you can ever learn is your first programming language. - Alan Kay",
    "I'm not a great programmer; I'm just a good programmer with great habits. - Kent Beck",
    "Truth can only be found in one place: the code. - Robert C. Martin",
    "One of the best programming skills you can have is knowing when to walk away for awhile. - Oscar Godson",
    "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. - John Woods",
    "The only way to learn a new programming language is by writing programs in it. - Dennis Ritchie",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler",
    "I think it's fair to say that personal computers have become the most empowering tool we've ever created. They're tools of communication, they're tools of creativity, and they can be shaped by their user. - Bill Gates",
    "The function of good software is to make the complex appear to be simple. - Grady Booch",
    "The computer was born to solve problems that did not exist before. - Bill Gates",
    "Any sufficiently advanced technology is indistinguishable from magic. - Arthur C. Clarke",
    "A programmer is a person who fixed a problem that you don't know you have, in a way you don't understand. - Unknown",
    "Programming is not about typing, it's about thinking. - Rich Hickey",
    "A good programmer is someone who always looks both ways before crossing a one-way street. - Doug Linder",
    "Software and cathedrals are much the same — first we build them, then we pray. - Sam Redwine",
    "The trouble with programmers is that you can never tell what a programmer is doing until it’s too late. - Seymour Cray",
    "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else. - Eagleson's law",
    "Don’t worry if it doesn’t work right. If everything did, you’d be out of a job. - Mosher's Law of Software Engineering",
    "The next best thing to having good ideas is recognizing good ideas from your users. - Eric S. Raymond",
    "The best programmers are not marginally better than merely good ones. They are an order-of-magnitude better, measured by whatever standard: conceptual creativity, speed, ingenuity of design, or problem-solving ability. - Randall E. Stross",
    "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. - John Woods",
    "There are only two kinds of languages: the ones people complain about and the ones nobody uses. - Bjarne Stroustrup",
    "There's nothing more permanent than a temporary hack. - Kyle Simpson",
    "In software, the only numbers that matter are 0, 1, and infinity. - Unknown",
    "Programming is the art of algorithm design and the craft of debugging errant code. - Ellen Ullman",
    "Programs must be written for people to read, and only incidentally for machines to execute. - Harold Abelson",
    "I'm not a great programmer; I'm just a good programmer with great habits. - Kent Beck",
    "Java is to JavaScript what car is to carpet. - Chris Heilmann",
    "The best thing about a boolean is even if you are wrong, you are only off by a bit. - Unknown",
    "The most important property of a program is whether it accomplishes the intention of its user. - C.A.R. Hoare",
    "Programs must be written for people to read, and only incidentally for machines to execute. - Harold Abelson",
    "C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows away your whole leg. - Bjarne Stroustrup",
    "A language that doesn't affect the way you think about programming is not worth knowing. - Alan Perlis",
    "A good programmer is someone who always looks both ways before crossing a one-way street. - Doug Linder",
    "If you think your users are idiots, only idiots will use it. - Linus Torvalds",
    "Testing leads to failure, and failure leads to understanding. - Burt Rutan",
    "Perl – The only language that looks the same before and after RSA encryption. - Keith Bostic",
    "The best code is no code at all. - Jeff Atwood",
    "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code. - Dan Salomon",
    "The most important skill for a programmer is to know how to learn. - John Sonmez",
    "If at first you don’t succeed; call it version 1.0. - Unknown",
    "Before software can be reusable, it first has to be usable. - Ralph Johnson",
    "Don't comment bad code – rewrite it. - Brian Kernighan",
    "Make it work, make it right, make it fast. - Kent Beck",
    "If you automate a mess, you get an automated mess. - Rod Michael",
    "It's not a bug – it's an undocumented feature. - Unknown",
    "Good design adds value faster than it adds cost. - Thomas C. Gale",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler",
    "The best programmers are not marginally better than merely good ones. They are an order-of-magnitude better, measured by whatever standard: conceptual creativity, speed, ingenuity of design, or problem-solving ability. - Randall E. Stross",
    "Debugging is like being the detective in a crime movie where you are also the murderer. - Filipe Fortes",
    "The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time. - Tom Cargill",
    "Simplicity is the soul of efficiency. - Austin Freeman",
    "You can't have great software without a great team, and most software teams behave like dysfunctional families. - Jim McCarthy",
    "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. - John Woods",
    "Don’t worry if it doesn’t work right. If everything did, you’d be out of a job. - Mosher's Law of Software Engineering",
    "The next best thing to having good ideas is recognizing good ideas from your users. - Eric S. Raymond",
    "The best programmers are not marginally better than merely good ones. They are an order-of-magnitude better, measured by whatever standard: conceptual creativity, speed, ingenuity of design, or problem-solving ability. - Randall E. Stross",
    "The computer was born to solve problems that did not exist before. - Bill Gates",
    "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else. - Eagleson's law",
    "The only way to learn a new programming language is by writing programs in it. - Dennis Ritchie",
    "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. - John Woods",
    "The best error message is the one that never shows up. - Thomas Fuchs",
    "Experience is the name everyone gives to their mistakes. - Oscar Wilde",
    "The most disastrous thing that you can ever learn is your first programming language. - Alan Kay",
    "Good code is its own best documentation. - Steve McConnell",
    "The most important skill for a programmer is to know how to learn. - John Sonmez",
    "Testing leads to failure, and failure leads to understanding. - Burt Rutan",
    "Perl – The only language that looks the same before and after RSA encryption. - Keith Bostic",
    "The best code is no code at all. - Jeff Atwood",
    "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code. - Dan Salomon",
    "The most important property of a program is whether it accomplishes the intention of its user. - C.A.R. Hoare",
    "C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows away your whole leg. - Bjarne Stroustrup",
    "A language that doesn't affect the way you think about programming is not worth knowing. - Alan Perlis",
    "Testing shows the presence, not the absence of bugs. - Edsger Dijkstra",
    "The only way to go fast is to go well. - Uncle Bob Martin",
    "Good software, like wine, takes time. - Joel Spolsky",
    "I don't care if it works on your machine! We are not shipping your machine! - Vidiu Platon",
    "If you want to set off and go develop some grand new thing, you don't need millions of dollars of capitalization. You need enough pizza and Diet Coke to stick in your refrigerator, a cheap PC to work on, and the dedication to go through with it. - John Carmack",
    "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it. - Patrick McKenzie",
    "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. - John Woods",
    "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else. - Eagleson's law",
    "The only way to learn a new programming language is by writing programs in it. - Dennis Ritchie",
    "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. - John Woods",
    "The best error message is the one that never shows up. - Thomas Fuchs",
    "Experience is the name everyone gives to their mistakes. - Oscar Wilde",
    "The most disastrous thing that you can ever learn is your first programming language. - Alan Kay",
    "Good code is its own best documentation. - Steve McConnell",
    "The most important skill for a programmer is to know how to learn. - John Sonmez",
    "Testing leads to failure, and failure leads to understanding. - Burt Rutan",
    "Perl – The only language that looks the same before and after RSA encryption. - Keith Bostic",
    "The best code is no code at all. - Jeff Atwood",
    "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code. - Dan Salomon",
    "The most important property of a program is whether it accomplishes the intention of its user. - C.A.R. Hoare",
    "C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows away your whole leg. - Bjarne Stroustrup",
    "A language that doesn't affect the way you think about programming is not worth knowing. - Alan Perlis",
    "Testing shows the presence, not the absence of bugs. - Edsger Dijkstra",
    "The only way to go fast is to go well. - Uncle Bob Martin",
    "Good software, like wine, takes time. - Joel Spolsky",
    "I don't care if it works on your machine! We are not shipping your machine! - Vidiu Platon",
    "If you want to set off and go develop some grand new thing, you don't need millions of dollars of capitalization. You need enough pizza and Diet Coke to stick in your refrigerator, a cheap PC to work on, and the dedication to go through with it. - John Carmack",
    "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it. - Patrick McKenzie",
  ];
  
export default Quotes;  