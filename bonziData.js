function range(begin, end) {
	let array = [];
	for (let i = begin; i <= end; i++)
		array.push(i);
	for (let i = begin; i >= end; i--)
		array.push(i);
	return array;
}

window.BonziData = {
	size: {
		x: 200,
		y: 160
	},
	sprite: {
		frames: { width: 200, height: 160 },
		animations: {
			idle: [0],

			surf_intro: [...range(1, 26), "idle"],
			surf_away: range(27, 50),

			shrug_fwd: [...range(51, 61), "shrug_still"],
			shrug_still: [61],
			shrug_back: [...range(61, 51), "idle"],

			earth_fwd: [...range(63, 69), "earth_still"],
			earth_still: [...range(70, 91), "earth_still"],
			earth_back: [...range(92, 97), "idle"],

			cool_fwd: [...range(98, 114), "cool_still"],
			cool_still: [115],
			cool_back: [...range(114, 98), "idle"],

			praise_fwd: [...range(116, 119), "praise_still"],
			praise_still: [120],
			praise_back: [...range(119, 116), "idle"],

			grin_fwd: [...range(121, 127), "grin_still"],
			grin_still: [128],
			grin_back: [...range(123, 121), "idle"],

			backflip: [...range(129, 141), "idle"]
		}
	},
	to_idle: {
		shrug_fwd: "shrug_back",
		shrug_still: "shrug_back",

		earth_fwd: "earth_back",
		earth_still: "earth_back",

		beat_fwd: "beat_back",
		beat_still: "beat_back",

		cool_fwd: "cool_back",
		cool_still: "cool_back",

		praise_fwd: "praise_back",
		praise_still: "praise_back",

		grin_fwd: "grin_back",
		grin_still: "grin_back",
	},
	event_list_joke_open: [
		[
			{
				type: "text",
				text: "Yeah, of course {NAME} wants me to tell a joke."
			},
			{
				type: "anim",
				anim: "praise_fwd",
				ticks: 15
			},
			{
				type: "text",
				text: '"Haha, look at the stupid {COLOR} monkey telling jokes!" Fuck you. It isn\'t funny.',
				say: "Hah hah! Look at the stupid {COLOR} monkey telling jokes! Fuck you. It isn't funny."
			},
			{
				type: "anim",
				anim: "praise_back",
				ticks: 15
			},
			{
				type: "text",
				text: "But I'll do it anyway. Because you want me to. I hope you're happy."
			}
		], [
			{
				type: "text",
				text: "{NAME} used /joke. Whoop-dee-fucking doo."
			}
		], [
			{
				type: "text",
				text: "HEY YOU IDIOTS ITS TIME FOR A JOKE"
			}
		], [
			{
				type: "text",
				text: "Wanna hear a joke?"
			},
			{
				type: "text",
				text: "No?"
			},
			{
				type: "text",
				text: "Mute me then. That's your fucking problem."
			}
		], [
			{
				type: "text",
				text: "Senpai {NAME} wants me to tell a joke."
			}
		], [
			{
				type: "text",
				text: "Time for whatever horrible fucking jokes the creator of this site wrote."
			}
		]
	],
	event_list_joke_mid: [
		[
			{
				type: "text",
				text: "What is easy to get into, but hard to get out of?"
			},
			{
				type: "text",
				text: "Child support!"
			}
		], [
			{
				type: "text",
				text: "Why do they call HTML HyperText?"
			},
			{
				type: "text",
				text: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
			},
			{
				type: "anim",
				anim: "shrug_back",
				ticks: 15
			},
			{
				type: "text",
				text: "Sorry. I just had an epiphany of my own sad, sad existence."
			}
		], [
			{
				type: "text",
				text: "Two sausages are in a pan. One looks at the other and says \"Boy it's hot in here!\" and the other sausage says \"Unbelievable! It's a talking sausage!\"",
				say: "Two sausages are in a pan. One looks at the other and says, Boy it's hot in here! and the other sausage says, Unbelievable! It's a talking sausage!"
			},
			{
				type: "anim",
				anim: "shrug_back",
				ticks: 15
			},
			{
				type: "text",
				text: "What were you expecting? A dick joke? You're a sick fuck."
			}
		], [
			{
				type: "text",
				text: "What is in the middle of Paris?"
			},
			{
				type: "text",
				text: "A giant inflatable buttplug."
			}
		], [
			{
				type: "text",
				text: "What goes in pink and comes out blue?"
			},
			{
				type: "text",
				text: "Sonic's asshole."
			}
		], [
			{
				type: "text",
				text: "What type of water won't freeze?"
			},
			{
				type: "text",
				text: "Your mother's."
			}
		], [
			{
				type: "text",
				text: "Who earns a living by driving his customers away?"
			},
			{
				type: "text",
				text: "Nintendo!"
			}
		], [
			{
				type: "text",
				text: "What did the digital clock say to the grandfather clock?"
			},
			{
				type: "text",
				text: "Suck my clock."
			}
		], [
			{
				type: "text",
				text: "What do you call a man who shaves 10 times a day?"
			},
			{
				type: "text",
				text: "A woman."
			}
		], [
			{
				type: "text",
				text: "How do you get water in watermelons?"
			},
			{
				type: "text",
				text: "Cum in them."
			}
		], [
			{
				type: "text",
				text: "Why do we call money bread?"
			},
			{
				type: "text",
				text: "Because we KNEAD it. Haha please send money to my PayPal at nigerianprince99@bonzi.com"
			}
		], [
			{
				type: "text",
				text: "What is a cow that eats grass?"
			},
			{
				type: "text",
				text: "ASS"
			},
			{
				type: "text",
				text: "I'm a comedic genius, I know."
			},
		]
	],
	event_list_joke_end: [
		[
			{
				type: "text",
				text: "You know {NAME}, a good friend laughs at your jokes even when they're not so funny."
			},
			{
				type: "text",
				text: "And you fucking suck. Thanks."
			}
		], [
			{
				type: "text",
				text: "Where do I come up with these? My ass?"
			}
		], [
			{
				type: "text",
				text: "Do I amuse you, {NAME}? Am I funny? Do I make you laugh?"
			},
			{
				type: "text",
				text: "pls respond",
				say: "please respond"
			}
		], [
			{
				type: "text",
				text: "Maybe I'll keep my day job, {NAME}. Patreon didn't accept me."
			}
		], [
			{
				type: "text",
				text: "Laughter is the best medicine!"
			},
			{
				type: "text",
				text: "Apart from meth."
			}
		], [
			{
				type: "text",
				text: "Don't judge me on my sense of humor alone."
			},
			{
				type: "text",
				text: "Help! I'm being oppressed!"
			}
		]
	],

	// ============================================================================

	event_list_fact_open: [
		[
			{
				type: "text",
				text: "Hey kids, it's time for a Fun Fact\u24C7!",
				say: "Hey kids, it's time for a Fun Fact!"
			}
		]
	],

	event_list_fact_mid: [
		[
			{
				type: "anim",
				anim: "earth_fwd",
				ticks: 15
			},
			{
				type: "text",
				text: "Did you know that Uranus is 31,518 miles (50,724 km) in diameter?",
				say: "Did you know that Yer Anus is 31 thousand 500 and 18 miles in diameter?",
			},
			{
				type: "anim",
				anim: "earth_back",
				ticks: 15
			},
			{
				type: "anim",
				anim: "grin_fwd",
				ticks: 15
			}
		], [
			{
				type: "text",
				text: "Fun Fact: The skript kiddie of this site didn't bother checking if the text that goes into the dialog box is HTML code."
			},
			{
				type: "text",
				text: "{TOPJEJ}",
				say: "toppest jej"
			}
		]
	],

	event_list_fact_end: [
		[
			{
				type: "text",
				text: "o gee whilickers wasn't that sure interesting huh"
			}
		]
	]
};

BonziData.event_list_joke = [
	{
		type: "add_random",
		pool: BonziData.event_list_joke_open
	},
	{
		type: "anim",
		anim: "shrug_fwd",
		ticks: 15
	},
	{
		type: "add_random",
		pool: BonziData.event_list_joke_mid
	},
	{
		type: "idle"
	},
	{
		type: "add_random",
		pool: BonziData.event_list_joke_end
	},
	{
		type: "idle"
	}
];

BonziData.event_list_fact = [
	{
		type: "add_random",
		pool: BonziData.event_list_fact_open
	},
	{
		type: "add_random",
		pool: BonziData.event_list_fact_mid
	},
	{
		type: "idle"
	},
	{
		type: "add_random",
		pool: BonziData.event_list_fact_end
	},
	{
		type: "idle"
	}
];

BonziData.event_list_triggered = [
	{
		type: "anim",
		anim: "cool_fwd",
		ticks: 30
	},
	{
		type: "text",
		text: "I secretly identify as BonziBUDDY. Ever since I was a young gorilla I dreamed of invading desktops dropping hot sticky tootorals on disgusting PC users.",
		say: "I secretly identify as BonziBUDDY. Ever since I was a young gorilla I dreamed of invading desktops dropping hot sticky tootorals on disgusting PC users."
	},
	{
		type: "text",
		text: "People say to me that a person being a BonziBUDDY is hard and I’m a virus but I don’t care, I’m beautiful.",
		say: "People say to me that a person being a BonziBUDDY is hard and I'm a virus but I dont care, I'm beautiful."
	},
	{
		type: "text",
		text: "I’m having an IT intern install Internet Explorer 6, aquarium screensavers and PC Doctor 2016 on my body. From now on I want you guys to call me “Joel” and respect my right to meme from above and meme needlessly.",
		say: "I'm having an IT intern install Internet Explorer 6, aquarium screensavers and PC Doctor 2016 on my body. From now on I want you guys to call me Joel and respect my right to meme from above and meme needlessly."
	},
	{
		type: "text",
		text: "If you can’t accept me you need a mac and need to check your file permissions. Thank you for being so understanding.",
		say: "If you cant accept me you need a mac and need to check your file permissions. Thank you for being so understanding."
	},
	{
		type: "idle"
	}
];

BonziData.event_list_linux = [
	{
		type: "text",
		text: "I'd just like to interject for a moment. What you’re referring to as Linux, is in fact, BONZI/Linux, or as I’ve recently taken to calling it, BONZI plus Linux."
	},
	{
		type: "text",
		text: "Linux is not an operating system unto itself, but rather another free component of a fully functioning BONZI system made useful by the BONZI corelibs, shell utilities and vital system components comprising a full OS as defined by M.A.L.W.A.R.E."
	},
	{
		type: "text",
		text: "Many computer users run a modified version of the BONZI system every day, without realizing it. Through a peculiar turn of events, the version of BONZI which is widely used today is often called “Linux”, and many of its users are not aware that it is basically the BONZI system, developed by the BONZI Project."
	},
	{
		type: "text",
		text: "There really is a Linux, and these people are using it, but it is just a part of the system they use. Linux is the kernel: the program in the system that allocates the machine’s memes to the other programs that you run. "
	},
	{
		type: "text",
		text: "The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system, such as systemd."
	},
	{
		type: "text",
		text: "Linux is normally used in combination with the BONZI operating system: the whole system is basically BONZI with Linux added, or BONZI/Linux. All the so-called “Linux” distributions are really distributions of BONZI/Linux."
	}
];

BonziData.event_list_pawn = [
	{
		type: "text",
		text: "Hi, my name is BonziBUDDY, and this is my website. I am here with my old harambe son, Clippy. Everything in here has is ad free. One thing I've learned after 17 years - you never know what is gonna give you some fun."
	},


];
