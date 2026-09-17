import {
	oak,
	eme,
	e1flyer,
	e11,
	e12,
	e13,
	e14,
	e1main,
	e2main,
	e2flyer,
	e21,
	e22,
	e23,
	e24,
	o1main,
	o11,
	o12,
	o13,
	o14,
	o2main,
	o21,
	o22,
	o23,
	o24,
	o3main,
	o31,
	o32,
	o33,
	o1p,
	o34,
	o3p,
	amety,
	a1,
	a2,
	a3,
	a4,
	a5,
	a6,
	nm1,
	nm2,
	nm3,
	nm4,
	am1,
	am2,
	am3,
	am4,
	am5,
	am6,
	am7,
	am8,
	bf1,
	bf2,
	bf3,
	bf4,
	bf5,
	b1,
	b2,
	b3,
	b4,
	b5,
	orcover,
	orcover2,
	ordetails,
	or1,
	or2,
	or3,
	or4,
	orp1,
	orp2,
	orp3,
	orp4,
	orp5,
	orpx,
	orn1,
	orn2,
	orn3,
	orn4,
	orn5,
	orn6,
	fn1, fn2, fn3, fn4, fn5, fn6, fn7, fn8, fn9, fn10, fn11, fn12, fn13, fn14, fn15, fn16, fn17, fn18, fn19, fn20, fn21, fn22,
} from "../assets";

export const featured = [
	{
		img: bf1,
		title: "Forest One Residency",
		desc: "Luxury living centered on functionality, distinction, and elegance",
		location: "Westlands, Nairobi",
	},
	{
		img: oak,
		title: "OAK WEST",
		desc: "Flexible payment plan until completion November, 2027",
		location: "Westlands, Nairobi",
	},
	{
		img: "/images/emerald.jpg",
		title: "EMERALD SPRINGS",
		desc: "Flexible payment plan until completion October, 2026",
		location: "Westlands, Nairobi",
	},
];

export const amet = [
	{
		id: "amethyst-props",
		title: "Amethyst Springs  –Denis Pritt near the State House ",
		mainImg: am1,
		flyer: am2,
		photos: [am3, am4, am5, am6, am7, am8],
		desc: `A landmark luxury development featuring 2 striking architectural blocks connected at the rooftop. Rising 22 floors high, with 3 elevators per floor, Amethyst offers 380 exclusive apartments designed for modern urban living by the GY Group. 
Nairobi’s best is within reach — a short drive connects you to Yaya Centre, State House and the vibrant Kilimani lifestyle, while Westlands, Upper Hill , CBD and JKIA Airport are just minutes away,Amethyst keeps you at the center of it all.
`,

		location: "Denis Pritt",
		avgPrice: "9M KSH ($69,230)",
		ApartmentOptions: [
			{
				size: "58 SQM",
				type: "Standard 1 Bedroom Apartment(76 Units)",
				desc: "Affordable entry point, strong rental demand",
				price: "7.9M KSH ($60,769)",
			},
			{
				size: "62 SQM",
				type: "Premium 1 Bedroom (52 units)",
				desc: "Floor-to-ceiling curved glass, Spacious interiors, premium home appliances",
				price: "9.6M KSH ($73,846)",
			},
			{
				size: "88 SQM",
				type: "Standard 2 Bedroom (114 units)",
				desc: "Balanced layout, double balconies , affordable entry point",
				price: "13.2M KSH ($101,538)",
			},
			{
				size: "90 SQM",
				type: " Floating 2 Bedroom (24 units)",
				desc: "Suspended block design, unique architecture, high-end appliances ",
				price: "14.7M KSH ($113,076)",
			},
			{
				size: "95 SQM",
				type: "Premium 2 Bedroom (76 units)",
				desc: "Elegant curved glass, breathtaking views,high-end appliances ",
				price: "14.9M KSH ($114,615)",
			},
			{
				size: "110 SQM",
				type: "2 Bedroom + Study office(38 units)",
				desc: "Spacious design ,high-end appliances Ideal for long-term living, families",
				price: "16.3M KSH ($125,384)",
			},
		],
		highlights: [
			"310 Parking Spaces",
			"Rooftop Infinity Pool with panoramic city views",
			"Luxurious Rooftop Bar & Residents’ Lounge",
			"Rooftop Garden & Paddle Court",
			"Fully Equipped Gym, Spa & Sauna",
			"Wellness Center with Yoga Studios",
			"High-Speed Elevators (3 per floor)",
			"High-Speed Elevators (3 per floor)",
			"24/7 Security with CCTV Surveillance",
			"Two Standby Generators",
		],
	},
];
export const aria = [
	{
		id: "aria-park",
		title: "Aria Park 5 Bedroom Villa",
		mainImg: a1,
		flyer: a2,
		photos: [a3, a4, a5, a6],
		desc: `Welcome to ARIA PARK.  A distinguished development discreetly nestled in the leafy 
surburbs of Karen, Nairobi.  The address where  sophistication effortlessly meets with the 
splendor of nature.`,
		location: "Karen, Nairobi, kenya",
		avgPrice: "In development",
		highlights: [
			"5 Ensuite  Bedrooms",
			"Triple Volume entrance foyer",
			"Gym",
			"Study",
			"Family-friendly amenities",
			"Gazebo",
			"Home Theatre",
		],
	},
];
export const emeraldOneBed = [
	{
		id: "emerald-1-bedroom",
		title: "1 BEDROOM APARTMENT",
		mainImg: "/images/emerald.jpg",
		flyer: e1flyer,
		photos: [e11, e12, e13, e14],
		desc: "A thoughtfully designed space combining comfort, privacy, and style ideal for individuals or couples seeking modern living in a serene environment.",
		location: "Westlands, Nairobi, kenya",
		avgPrice: "7.8M KSH ($60,000)",
		highlights: [
			"Flexible payment plans",
			"Prime locations",
			"Modern Interiors",
			"Secure Environment",
			"Family-friendly amenities",
			"12% annual ROI",
			"24/7 security",
			"25 floors of modern living",
		],
	},
];

export const emeraldTwoBed = [
	{
		id: "emerald-2-bedroom",
		title: "2 BEDROOM APARTMENT",
		mainImg: e2main,
		flyer: e2flyer,
		photos: [e21, e22, e23, e24],
		desc: "Spacious and elegantly designed, this two-bedroom apartment offers the perfect balance of privacy and shared living, ideal for small families, young professionals, or savvy investors.",
		location: "Westlands, Nairobi, kenya",
		avgPrice: "12.9M KSH ($99,230)",
		highlights: [
			"Flexible payment plans",
			"Prime locations",
			"Modern Interiors",
			"Secure Environment",
			"Family-friendly amenities",
			"12% annual ROI",
			"24/7 security",
			"25 floors of modern living",
		],
	},
];

export const oakOneBed = [
	{
		id: "oak-1-bedroom",
		title: "1 BEDROOM APARTMENT",
		mainImg: o1main,
		photos: [o11, o12, o13, o14],
		desc: "A thoughtfully designed space combining comfort, privacy, and style ideal for individuals or couples seeking modern living in a serene environment.",
		location: "Westlands, Nairobi, kenya",
		avgPrice: "1 bedroom (58 SQM) - 8.1M KSH ($62,307)",
		highlights: [
			"Flexible payment plans",
			"Prime locations",
			"Modern Interiors",
			"Secure Environment",
			"Family-friendly amenities",
			"12% annual ROI",
			"24/7 security",
			"25 floors of modern living",
		],
		pricingPlan: [
			{
				title: "1 BEDROOM APARTMENT",
				price: "8.1M KSH ($62,307)",
				installmentPlan: [
					"30% - 2,640,000 (deposit)",
					"12.5% - 1,100,000 (6 months)",
					"12.5% - 1,100,000 (12 months)",
					"20% - 1,760,000 (upon completion November 2027)",
				],
			},
		],
	},
];
export const oakOneBedPlusStudy = [
	{
		id: "oak-1-study",
		title: "1 BEDROOM APARTMENT PLUS STUDY",
		mainImg: o1main,
		photos: [o1p, o12, o13, o14],
		desc: "A thoughtfully designed space combining comfort, privacy, and style ideal for individuals or couples seeking modern living in a serene environment.",
		location: "Westlands, Nairobi, kenya",
		avgPrice: "1 bedroom + study (84 SQM) - 10M KSH ($76,923)",
		highlights: [
			"Flexible payment plans",
			"Prime locations",
			"Modern Interiors",
			"Secure Environment",
			"Family-friendly amenities",
			"12% annual ROI",
			"24/7 security",
			"25 floors of modern living",
		],
		pricingPlan: [
			{
				title: "1 BEDROOM APARTMENT PLUS STUDY",
				price: "10M KSH ($76,923)",
				installmentPlan: [
					"30% - 2,640,000 (deposit) ",
					"12.5% - 1,100,000 ( after every 6 months) instalment",
					"12.5% - 1,100,000",
					"12.5% - 1,100,000",
					"12.5% - 1,100,000",
					"20% - 1,760,000 (upon completion November 2027)",
				],
			},
		],
	},
];

export const oakTwoBed = [
	{
		id: "oak-2-bedroom",
		title: "2 BEDROOM APARTMENT",
		mainImg: o2main,
		photos: [o21, o22, o23, o24],
		desc: "A thoughtfully designed space combining comfort, privacy, and style ideal for individuals or couples seeking modern living in a serene environment.",
		location: "Westlands, Nairobi, kenya",
		avgPrice: "2 bedroom (105 SQM) - 14.1M KSH ($108,461)",
		highlights: [
			"Flexible payment plans",
			"Prime locations",
			"Modern Interiors",
			"Secure Environment",
			"Family-friendly amenities",
			"12% annual ROI",
			"24/7 security",
			"25 floors of modern living",
		],
		pricingPlan: [
			{
				price: "14.1M KSH",
				installmentPlan: [
					"20% - 2,940,000 (deposit)",
					"15% - 2,205,000 (6 months)",
					"15% - 2,205,000 (12 months)",
					"20% - 2,940,000 (upon completion November 2027)",
				],
			},
		],
	},
];

export const oakThreeBed = [
	{
		id: "oak-3-bedroom",
		title: "3 BEDROOM APARTMENT",
		mainImg: o3main,
		photos: [o31, o3p, o32, o34, o33],
		desc: "A thoughtfully designed space combining comfort, privacy, and style ideal for individuals or couples seeking modern living in a serene environment.",
		location: "Westlands, Nairobi, kenya",
		avgPrice: "3 bedroom (150 SQM) - 16.9M KSH ($130,000)",
		highlights: [
			"Flexible payment plans",
			"Prime locations",
			"Modern Interiors",
			"Secure Environment",
			"Family-friendly amenities",
			"12% annual ROI",
			"24/7 security",
			"25 floors of modern living",
		],
		pricingPlan: [
			{
				price: "16.9M KSH",
				installmentPlan: [
					"30% - 5,070,000 KSH  (deposit)",
					"50℅ - spread equally at 2,112,500 KH every 6 months (4 installments)",
					"20% - 3,380,000 KSH (upon completion in November 2027)",
				],
			},
		],
	},
];

export const brooksideForestOne = [
	{
		id: "forest-one-residency",
		title: "Forest One Residency",
		mainImg: bf1,
		photos: [bf2, bf3, bf4, bf5, b1, b2, b3, b4, b5, fn1, fn2, fn3, fn4, fn5, fn6, fn7, fn8, fn9, fn10, fn11, fn12, fn13, fn14, fn15, fn16, fn17, fn18, fn19, fn20, fn21, fn22],
		desc: `Forest One Residency embodies a design philosophy centered on luxury, functionality, and distinction. Our approach merges modern aesthetics with practical elegance, ensuring our residence offers a harmonious blend of style and comfort. With its prime location, high rental demand, and contemporary amenities, this apartment is an ideal choice for savvy investors looking to expand their portfolio. 
Expected Completion: September 2028. Flexible Off-Plan Payment Plans Available. Secure Your Unit with a 20% Deposit.`,
		location: "Westlands, Nairobi, Kenya",
		avgPrice: "From 9.7M KSH ($75,000)",
		highlights: [
			"Fully equipped gymnasium",
			"Heated swimming pool",
			"Children's play area",
			"Secure Environment",
			"24/7 security",
		],
		ApartmentOptions: [
			{
				type: "1 Bedroom (Type D)",
				floor: "1st-20th Floor",
				size: "76 SQM",
				price: "9,700,000 KSH ($75,000)",
				desc: "Value 1 Bed",
			},
			{
				type: "1 Bedroom (Type B)",
				floor: "1st-20th Floor",
				size: "79 SQM",
				price: "10,000,000 KSH ($78,000)",
				desc: "Compact 1 Bed",
			},
			{
				type: "1 Bedroom (Type C)",
				floor: "1st-20th Floor",
				size: "81 SQM",
				price: "10,300,000 KSH ($80,000)",
				desc: "Standard 1 Bed",
			},
			{
				type: "2 Bedroom All En-suite (Type E)",
				floor: "1st-20th Floor",
				size: "120 SQM",
				price: "15,200,000 KSH ($118,000)",
				desc: "Luxury 2 Bed",
			},
			{
				type: "3 Bedroom All En-suite + SQ (Type A)",
				floor: "1st-20th Floor",
				size: "179 SQM",
				price: "22,700,000 KSH ($176,000)",
				desc: "Spacious 3 bed with SQ",
			},
		],
	},
];

export const oakRise = [
	{
		id: "oak-rise",
		title: "Oak Rise",
		mainImg: orcover,
		photos: [orcover2, ordetails, or1, or2, or3, or4, orp1, orp2, orp3, orp4, orp5, orpx, orn1, orn2, orn3, orn4, orn5, orn6],
		desc: `Oak Rise Residency is the latest signature development by The Oak Residences. Located on General Mathenge Drive, Westlands, within the "UN Blue Zone", it offers a high level of security and peace of mind. Backed by Karura Forest, and just 700 meters from Sarit Centre and Westgate Mall. 24 Residential floors within a 26-storey development.

Amenities:
✅ Gym & Fitness Center
✅ Co-working Space
✅ Mini Mart
✅ Kids' Play Area
✅ Restaurants & Cafe
✅ Games Room
✅ Spa & Sauna
✅ Cinema
✅ Residents' Lounge
✅ Laundry Room
✅ Changing Rooms
✅ Reception
✅ Outdoor Heated Swimming Pool
✅ Zen Garden (Landscaped Garden)
✅ Jogging Track
✅ Sky Lounge
✅ Padel Court

1 & 2 Bedroom Apartments
Secure your unit with a 20% deposit.`,
		location: "Westlands, Nairobi, Kenya",
		avgPrice: "From 6.8M KSH ($53,000)",
		highlights: [
			"Entrance hall with reception",
			"Club House",
			"Automatic generator",
			"Fully equipped gym",
			"24/7 security",
			"Borehole and underground water storage",
		],
		ApartmentOptions: [
			{
				type: "Mini 1 Bedroom",
				size: "45 SQM",
				price: "6.8M KSH ($53,000)",
				desc: "Compact and efficient living",
			},
			{
				type: "Mini 1 Bedroom B",
				size: "49 SQM",
				price: "7.3M KSH ($57,000)",
				desc: "Smart layout with optimal space",
			},
			{
				type: "1 Bedroom B",
				size: "60 SQM",
				price: "7.8M KSH ($60,000)",
				desc: "Standard 1 bedroom apartment",
			},
			{
				type: "1 Bedroom A",
				size: "66 SQM",
				price: "8.8M KSH ($68,000)",
				desc: "Spacious 1 bedroom design",
			},
			{
				type: "2 Bedroom Small",
				size: "81 SQM",
				price: "10.8M KSH ($84,000)",
				desc: "Cosy 2 bedroom layout",
			},
			{
				type: "2 Bedroom B",
				size: "91 SQM",
				price: "11.8M KSH ($91,000)",
				desc: "Standard 2 bedroom apartment",
			},
			{
				type: "2 Bedroom A",
				size: "98 SQM",
				price: "12.8M KSH ($99,000)",
				desc: "Generous 2 bedroom space",
			},
			{
				type: "2 Bedroom All En-Suite",
				size: "113 SQM",
				price: "14.8M KSH ($115,000)",
				desc: "Premium 2 bedroom with en-suite bathrooms",
			},
		],
	},
];
