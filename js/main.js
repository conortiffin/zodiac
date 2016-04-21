var zodiac = [
	{
		sign: "aquarius",
		fortune: "Knowledgable, Humanitarian, Serious, Insightful, and Duplicitous.",
		image: "img/aquarius.jpeg"
	},
	{
		sign: "aries",
		fortune: "Active, Demanding, Determined, Effective, and Ambitious.",
		image: "img/aries.png"
	},
	{
		sign: "cancer",
		fortune: "Emotional, Diplomatic, Intense, Impulsive, and Selective.",
		image: "img/cancer.png"
	},
	{
		sign: "capricorn",
		fortune: "Determinated, Dominant, Perservering, Practical, and Willful.",
		image: "img/capricorn.png"
	},
	{
		sign: "gemini",
		fortune: "Communicative, Indecisive, Inquisitive, Intelligent, and Adaptable.",
		image: "img/gemini.jpeg"
	},
	{
		sign: "leo",
		fortune: "Ruling, Warm, Generous, Faithful, and Initiative.",
		image: "img/leo.png"
	},
	{
		sign: "libra",
		fortune: "Balanced, Just, Truthful, Beautiful, and Perfect.",
		image: "img/libra.jpeg"
	},
	{
		sign: "pisces",
		fortune: "Fluctuating, Deep, Imaginative, Reactive, and Indecisive.",
		image: "img/pisces.png"
	},
	{
		sign: "sagittarius",
		fortune: "Philosophical, Emotional, Experimental, and Optimistic.",
		image: "img/sagittarius.png"
	},
	{
		sign: "scorpio",
		fortune: "Transient, Self-Willed, Purposeful, and Unyielding.",
		image: "img/scorpio.png"
	},
	{
		sign: "taurus",
		fortune: "Secure, Strong, Appreciative, Instructive, and Patient.",
		image: "img/taurus.png"
	},
	{
		sign: "virgo",
		fortune: "Analytical, Practical, Reflective, Observational, and Thoughtful.",
		image: "img/virgo.png"
	}
]

function horoscope() {
	var sign = document.getElementById("sign").value.toLowerCase()

	for(i = 0; i < zodiac.length; i++) {
		if(sign === zodiac[i].sign) {
			document.getElementById("yourSign").innerHTML = zodiac[i].sign
			document.getElementById("icon").src = zodiac[i].image
			document.getElementById("yourHoroscope").innerHTML = "Individuals with your sign are " + zodiac[i].fortune
			return
		} else {
			document.getElementById("yourSign").innerHTML = "That's not one of the signs. Try again!"
			document.getElementById("yourHoroscope").innerHTML = ""
			document.getElementById("icon").src = ""
		}
	}
}